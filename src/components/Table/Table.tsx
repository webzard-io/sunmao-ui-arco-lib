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
import { FALLBACK_METADATA, getComponentProps } from "../../sunmao-helper";
import { TablePropsSchema } from "../../generated/types/Table";
import { useMemo, useRef, useState } from "react";
import { exampleProperties } from "./spec";
import { sortBy } from "lodash-es";
import {
  LIST_ITEM_EXP,
  LIST_ITEM_INDEX_EXP,
  ModuleRenderer,
} from "@sunmao-ui/runtime";

const TableStateSchema = Type.Object({
  selectedRows: Type.Optional(Type.Array(Type.Any())),
  selectedItem: Type.Optional(Type.Any()),
  allData: Type.Optional(Type.Any()),
});

type SortRule = {
  field: string;
  direction?: "ascend" | "descend";
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
    console.log(
      "%c===========usememo filterData=================",
      "color:green"
    );
    let filteredData = data;
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
    console.log(
      "%c===========usememo sortedData=================",
      "color:#c10"
    );

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
      }) => {
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

      // (column as any).onFilterDropdownVisibleChange = (visible) => {
      //   if (visible) {
      //     setTimeout(() => inputRef.current!.focus(), 150);
      //   }
      // };
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
                parameters: record,
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
    filter,
    curData
  ) => {
    console.log("%c==============handlerchange==============", "color:green");

    const { current } = pagination;
    if (current !== currentPage) {
      setCurrentPage(current!);
      return;
    }

    setSortRule(sorter as SortRule);

    setFilterRule(filter);
  };

  //   console.log(ref.current,data)
  console.log("rerender", currentPageData, columns);
  return (
    <BaseTable
      className={cx(className, css(customStyle?.content))}
      {...cProps}
      columns={columns}
      pagination={{
        total: sortedData!.length,
        current: currentPage,
      }}
      //   pagination={true}
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
