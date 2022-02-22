
import { Type } from "@sinclair/typebox";
import { StringUnion } from '../../sunmao-helper';
import { Category } from '../../constants/category'

export const PaginationPropsSchema = {
  pageSize: Type.Number({
    title:'Page Size',
    category:Category.Basic,
  }),
  total: Type.Number({
    title:'Total',
    category:Category.Basic,
  }),
  defaultCurrent: Type.Number({
    title:'Current Page',
    category:Category.Basic,
  }),
  disabled: Type.Boolean({
    title:'Disabled',
    category:Category.Basic,
  }),
  hideOnSinglePage: Type.Boolean({
    title:'Hide On Single Page',
    category:Category.Behavior
  }),
  size: StringUnion(['mini', 'small', 'default', 'large'], {
    title:'Size',
    category: Category.Style
  }),
  sizeCanChange: Type.Boolean({
    title:'Size Can Change',
    category:Category.Behavior,
  }),
  simple: Type.Boolean({
    title:'Simple',
    category: Category.Behavior
  }),
  showJumper: Type.Boolean({
    title:'Show Jumper',
    category:Category.Behavior,
    description: 'Whether to display quick jump'
  }),
};
