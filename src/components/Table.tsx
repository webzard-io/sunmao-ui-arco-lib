import {
  Button,
  Link,
  Input,
  Table as BaseTable,
  PaginationProps,
} from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css, cx } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { TablePropsSchema } from "../generated/types/Table";
import { useMemo, useRef, useState } from "react";
import { sortBy } from "lodash-es";
import {
  LIST_ITEM_EXP,
  LIST_ITEM_INDEX_EXP,
  ModuleRenderer,
} from "@sunmao-ui/runtime";

const TableStateSchema = Type.Object({
  selectedRows: Type.Optional(Type.Array(Type.Any())),
  selectedItem: Type.Optional(Type.Any()),
});

type SortRule = {
  field: string;
  direction?: "ascend" | "descend";
};

type filterDropdownParam = {
  filterKeys: string[];
  setFilterKeys: (filterKeys: string[], callback?: () => void) => void;
  confirm: () => void;
};
const TableImpl: ComponentImpl<Static<typeof TablePropsSchema>> = (props) => {
  const { app, mergeState, customStyle, services, data } = props;

  const { className, columns, pagination, ...cProps } =
    getComponentProps(props);

  const rowSelectionType: "checkbox" | "radio" | undefined =
    cProps.rowSelectionType === "default" ? undefined : cProps.rowSelectionType;

  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortRule, setSortRule] = useState<SortRule>({
    field: "name",
    direction: undefined,
  });
  const [filterRule, setFilterRule] = useState();

  const filteredData = useMemo(() => {
    let filteredData = data || [];
    if (filterRule) {
      Object.keys(filterRule).forEach((colIdx) => {
        const value = filterRule[colIdx][0];
        filteredData = filteredData?.filter((row) =>
          value ? row[colIdx].indexOf(value) !== -1 : true
        );
      });
    }
    return filteredData;
  }, [data, filterRule]);

  const sortedData = useMemo(() => {
    if (!sortRule || !sortRule.direction) {
      return filteredData;
    }

    const sorted = sortBy(filteredData, sortRule.field);
    return sortRule.direction === "ascend" ? sorted : sorted.reverse();
  }, [filteredData, sortRule]);

  const { pageSize } = pagination;
  const currentPageData = sortedData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const clearState = () => {
    mergeState({ selectedRows: [] });
    mergeState({ selectedItem: undefined });
  };
  const inputRef = useRef(null);

  for (const column of columns!) {
    if (column.filter) {
      (column as any).filterDropdown = ({
        filterKeys,
        setFilterKeys,
        confirm,
      }: filterDropdownParam) => {
        return (
          <div className="arco-table-custom-filter">
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder="Please enter name"
              value={filterKeys[0] || ""}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      };
    }

    column.render = (ceilValue: any, record: any, index: number) => {
      const value = record[column.dataIndex];

      let colItem;

      switch (column.type) {
        case "button":
          const handleClick = (record: any) => {
            column.btnCfg?.handlers.forEach((handler) => {
              services.apiService.send("uiMethod", {
                componentId: handler.componentId,
                name: handler.method.name,
                parameters: handler.method.parameters || {},
              });
            });
          };
          colItem = (
            <Button
              onClick={() => {
                handleClick(record);
              }}
            >
              {column.btnCfg?.text}
            </Button>
          );
          break;
        case "link":
          colItem = <Link href={value}>{value}</Link>;
          break;
        case "module":
          const evalScope = {
            [LIST_ITEM_EXP]: record,
            [LIST_ITEM_INDEX_EXP]: index,
          };
          colItem = (
            <ModuleRenderer
              app={app}
              evalScope={evalScope}
              handlers={column.module?.handlers || []}
              id={column.module?.id || ""}
              properties={column.module?.properties || {}}
              services={services}
              type={column.module?.type || ""}
            />
          );
          break;
        default:
          colItem = <span>{value}</span>;
          break;
      }
      return colItem;
    };
  }

  const handleChange = (
    pagination: PaginationProps,
    sorter: { field?: string; direction?: "descend" | "ascend" },
    filter: any
  ) => {
    const { current } = pagination;
    if (current !== currentPage) {
      setCurrentPage(current!);
      return;
    }

    // TODO can be optimized
    setSortRule(sorter as SortRule);

    setFilterRule(filter);
  };

  return (
    <BaseTable
      className={cx(className, css(customStyle?.content))}
      {...cProps}
      columns={columns}
      pagination={{
        total: sortedData!.length,
        current: currentPage,
      }}
      data={currentPageData}
      onChange={handleChange}
      rowSelection={{
        type: rowSelectionType,
        selectedRowKeys,
        onChange(selectedRowKeys, selectedRows) {
          setSelectedRowKeys(selectedRowKeys.map(Number));
        },
        onSelect: (selected, record, selectedRows) => {
          if (!selected) {
            clearState();
            return;
          }
          mergeState({ selectedRows });
          mergeState({ selectedItem: record });
        },
      }}
    />
  );
};

export const exampleProperties: Static<typeof TablePropsSchema> = {
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      sortDirections: ["ascend"],
      defaultSortOrder: "ascend",
      type: "text",
      filter: true,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      sorter: true,
    },
    {
      title: "Link",
      dataIndex: "link",
      type: "link",
      filter: true,
    },
    {
      title: "CustomComponent",
      dataIndex: "customComponent",
      type: "module",
      module: {
        id: "clistItemName-{{$listItem.id}}",
        handlers: [],
        properties: [],
        type: "core/v1/text",
      },
    },
  ],
  data: Array(200)
    .fill("")
    .map((_, index) => ({
      key: index,
      name: `${Math.random() > 0.5 ? "Kevin Sandra" : "xzdry"}${index}`,
      link: `link${Math.random() > 0.5 ? "-A" : "-B"}`,
      salary: Math.floor(Math.random() * 1000),
      time: `2021-${Math.floor(Math.random() * 11)}-11T${Math.floor(
        Math.random() * 23
      )}:10:45.437Z`,
    })),
  pagination: {
    pageSize: 6,
    current: 0,
  },
  className: "",
  tableLayoutFixed: false,
  borderCell: false,
  hover: true,
  defaultExpandAllRows: false,
  showHeader: true,
  stripe: false,
  size: "default",
  pagePosition: "bottomCenter",
  indentSize: 15,
  virtualized: false,
  rowSelectionType: "checkbox",
};

export const Table = implementRuntimeComponent({
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    exampleProperties,
    name: "Table",
    displayName: "Table",
  },
  spec: {
    properties: TablePropsSchema,
    state: TableStateSchema,
    methods: {
      print: Type.String(),
      deleteSelected: Type.String(),
      deleteRows: Type.String(),
    },
    slots: [],
    styleSlots: ["content"],
    events: [],
  },
})(TableImpl);
