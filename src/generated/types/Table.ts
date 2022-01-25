
import { Type } from "@sinclair/typebox";
import { StringUnion } from '../../sunmao-helper';

export const ColumnSchema = Type.Object({
  title: Type.String(),
  dataIndex: Type.String(),
  onSorttt: Type.Optional(Type.Boolean()),
  sorter: Type.Optional(Type.Boolean()),
  sortDirections: Type.Optional(Type.Array(Type.String())),
  defaultSortOrder: Type.Optional(Type.String()),
  render: Type.Optional(Type.Any()),
  type: Type.Optional(Type.String()),
  btnCfg: Type.Optional(Type.Object({
    text: Type.String()
  })),
  module: Type.Optional(Type.Object({
    id: Type.String(),
    handlers: Type.Array(Type.Object({
      componentId: Type.String(),
      type:Type.String(),
      method: Type.Object({
        name: Type.String(),
        parameters: Type.Optional(Type.Object(Type.Any()))
      })
    })),
    properties: Type.Array(Type.Any()),
    type: Type.String()
  }))
})


export const TablePropsSchema = Type.Object({
  className: Type.Optional(Type.String()),
  tableLayoutFixed: Type.Optional(Type.Boolean()),
  borderCell: Type.Optional(Type.Boolean()),
  hover: Type.Optional(Type.Boolean()),
  defaultExpandAllRows: Type.Optional(Type.Boolean()),
  showHeader: Type.Optional(Type.Boolean()),
  stripe: Type.Optional(Type.Boolean()),
  size: Type.Optional(StringUnion(['default', 'middle', 'small', 'mini'])),
  pagePosition: Type.Optional(StringUnion(['br', 'bl', 'tr', 'tl', 'topCenter', 'bottomCenter'])),
  // childrenColumnName: Type.Optional(Type.String()),
  indentSize: Type.Optional(Type.Number()),
  virtualized: Type.Optional(Type.Boolean()),
  rowSelectionType: Type.Optional(StringUnion(["checkbox", "radio", "default"])),
  defaultData: Type.Optional(Type.Array(Type.Any())),
  columns: Type.Optional(Type.Array(ColumnSchema)),
});
