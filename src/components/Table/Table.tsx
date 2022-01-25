import {
  Button,
  Table as BaseTable,
  PaginationProps,
} from "@arco-design/web-react";
import { SorterResult } from "@arco-design/web-react/lib/Table/interface";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css, cx } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../../sunmao-helper";
import { TablePropsSchema } from "../../generated/types/Table";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { exampleProperties } from "./spec";
import { sortBy } from "lodash-es";
import {
  LIST_ITEM_EXP,
  LIST_ITEM_INDEX_EXP,
  ModuleRenderer,
  UIServices,
} from "@sunmao-ui/runtime";

const TableStateSchema = Type.Object({
  selectedRows: Type.Optional(Type.Array(Type.Any())),
  selectedItem: Type.Optional(Type.Any()),
});

const TableImpl: ComponentImpl<Static<typeof TablePropsSchema>> = (props) => {
  const {
    app,
    subscribeMethods,
    mergeState,
    slotsElements,
    customStyle,
    callbackMap,
    services,
  } = props;

  subscribeMethods({
    print() {
      console.log("this is a table");
    },
  });

  const { className, defaultData, columns, ...cProps } =
    getComponentProps(props);

  const rowSelectionType: "checkbox" | "radio" | undefined =
    cProps.rowSelectionType === "default" ? undefined : cProps.rowSelectionType;

  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [data, setData] = useState(defaultData || []);
  const ref = useRef<any[]>([]);
  ref.current = data;

  const removeRows = (rowKey: number | string | (number | string)[]) => {
    console.log("%c==============removeRowKey==============", "color:green");
    if (Array.isArray(rowKey)) {
      setData(ref.current.filter((item) => rowKey.indexOf(item.key)));
      return;
    }
    setData(ref.current.filter((item) => item.key !== rowKey));
  };

  for (const column of columns!) {
    column.render = (ceilValue: any, record: any, index: number) => {
      const value = record[column.dataIndex];

      let colItem;

      switch (column.type) {
        case "button":
          colItem = <Button>{column.btnCfg?.text}</Button>;
          break;
        case "module":
          console.log("module: ", app);
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
    data
  ) => {
    console.log("%c==============handlerchange==============", "color:green");

    const field = sorter.field;
    const desc = sorter.direction;
    // TODO have some problem
    if (!desc) {
      // setData(defaultData || []);
      return;
    }
    const currentData = data.currentData;
    const sortedData = sortBy(currentData, field);
    setData(desc === "ascend" ? sortedData : sortedData.reverse());
  };

  return (
    <BaseTable
      className={cx(className, css(customStyle?.content))}
      {...cProps}
      columns={columns}
      data={ref.current}
      onChange={handleChange}
      rowSelection={{
        type: rowSelectionType,
        selectedRowKeys,
        onChange(selectedRowKeys, selectedRows) {
          setSelectedRowKeys(selectedRowKeys.map(Number));
        },
        onSelect: (selected, record, selectedRows) => {
          if (!selected) {
            mergeState({ selectedRows: [] });
            mergeState({ selectedItem: undefined });
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
    },
    slots: [],
    styleSlots: ["content"],
    events: ["setData"],
  },
})(TableImpl);
