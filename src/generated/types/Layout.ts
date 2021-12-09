
import { Type, TUnion, TLiteral } from "@sinclair/typebox";

type IntoStringUnion<T> = {[K in keyof T]: T[K] extends string ? TLiteral<T[K]>: never }

function StringUnion<T extends string[]>(values: [...T]): TUnion<IntoStringUnion<T>> {
    return { enum: values } as any
}

export const LayoutPropsSchema = {
  'hasSider': Type.Optional(Type.Boolean()),
  'defaultChecked': Type.Optional(Type.Boolean()),
  'suppressContentEditableWarning': Type.Optional(Type.Boolean()),
  'suppressHydrationWarning': Type.Optional(Type.Boolean()),
  'accessKey': Type.Optional(Type.String()),
  'contextMenu': Type.Optional(Type.String()),
  'dir': Type.Optional(Type.String()),
  'hidden': Type.Optional(Type.Boolean()),
  'id': Type.Optional(Type.String()),
  'lang': Type.Optional(Type.String()),
  'placeholder': Type.Optional(Type.String()),
  'slot': Type.Optional(Type.String()),
  'title': Type.Optional(Type.String()),
  'translate': Type.Optional(StringUnion(['yes', 'no'])),
  'radioGroup': Type.Optional(Type.String()),
  'about': Type.Optional(Type.String()),
  'datatype': Type.Optional(Type.String()),
  'prefix': Type.Optional(Type.String()),
  'property': Type.Optional(Type.String()),
  'resource': Type.Optional(Type.String()),
  'typeof': Type.Optional(Type.String()),
  'vocab': Type.Optional(Type.String()),
  'autoCapitalize': Type.Optional(Type.String()),
  'autoCorrect': Type.Optional(Type.String()),
  'autoSave': Type.Optional(Type.String()),
  'color': Type.Optional(Type.String()),
  'itemProp': Type.Optional(Type.String()),
  'itemScope': Type.Optional(Type.Boolean()),
  'itemType': Type.Optional(Type.String()),
  'itemID': Type.Optional(Type.String()),
  'itemRef': Type.Optional(Type.String()),
  'security': Type.Optional(Type.String()),
  'unselectable': Type.Optional(StringUnion(['on', 'off'])),
  'inputMode': Type.Optional(StringUnion(['text', 'none', 'search', 'tel', 'url', 'email', 'numeric', 'decimal'])),
  'is': Type.Optional(Type.String())
};
export const HeaderPropsSchema = {
  'defaultChecked': Type.Optional(Type.Boolean()),
  'suppressContentEditableWarning': Type.Optional(Type.Boolean()),
  'suppressHydrationWarning': Type.Optional(Type.Boolean()),
  'accessKey': Type.Optional(Type.String()),
  'contextMenu': Type.Optional(Type.String()),
  'dir': Type.Optional(Type.String()),
  'hidden': Type.Optional(Type.Boolean()),
  'id': Type.Optional(Type.String()),
  'lang': Type.Optional(Type.String()),
  'placeholder': Type.Optional(Type.String()),
  'slot': Type.Optional(Type.String()),
  'title': Type.Optional(Type.String()),
  'translate': Type.Optional(StringUnion(['yes', 'no'])),
  'radioGroup': Type.Optional(Type.String()),
  'about': Type.Optional(Type.String()),
  'datatype': Type.Optional(Type.String()),
  'prefix': Type.Optional(Type.String()),
  'property': Type.Optional(Type.String()),
  'resource': Type.Optional(Type.String()),
  'typeof': Type.Optional(Type.String()),
  'vocab': Type.Optional(Type.String()),
  'autoCapitalize': Type.Optional(Type.String()),
  'autoCorrect': Type.Optional(Type.String()),
  'autoSave': Type.Optional(Type.String()),
  'color': Type.Optional(Type.String()),
  'itemProp': Type.Optional(Type.String()),
  'itemScope': Type.Optional(Type.Boolean()),
  'itemType': Type.Optional(Type.String()),
  'itemID': Type.Optional(Type.String()),
  'itemRef': Type.Optional(Type.String()),
  'security': Type.Optional(Type.String()),
  'unselectable': Type.Optional(StringUnion(['on', 'off'])),
  'inputMode': Type.Optional(StringUnion(['text', 'none', 'search', 'tel', 'url', 'email', 'numeric', 'decimal'])),
  'is': Type.Optional(Type.String())
};
export const FooterPropsSchema = {
  'defaultChecked': Type.Optional(Type.Boolean()),
  'suppressContentEditableWarning': Type.Optional(Type.Boolean()),
  'suppressHydrationWarning': Type.Optional(Type.Boolean()),
  'accessKey': Type.Optional(Type.String()),
  'contextMenu': Type.Optional(Type.String()),
  'dir': Type.Optional(Type.String()),
  'hidden': Type.Optional(Type.Boolean()),
  'id': Type.Optional(Type.String()),
  'lang': Type.Optional(Type.String()),
  'placeholder': Type.Optional(Type.String()),
  'slot': Type.Optional(Type.String()),
  'title': Type.Optional(Type.String()),
  'translate': Type.Optional(StringUnion(['yes', 'no'])),
  'radioGroup': Type.Optional(Type.String()),
  'about': Type.Optional(Type.String()),
  'datatype': Type.Optional(Type.String()),
  'prefix': Type.Optional(Type.String()),
  'property': Type.Optional(Type.String()),
  'resource': Type.Optional(Type.String()),
  'typeof': Type.Optional(Type.String()),
  'vocab': Type.Optional(Type.String()),
  'autoCapitalize': Type.Optional(Type.String()),
  'autoCorrect': Type.Optional(Type.String()),
  'autoSave': Type.Optional(Type.String()),
  'color': Type.Optional(Type.String()),
  'itemProp': Type.Optional(Type.String()),
  'itemScope': Type.Optional(Type.Boolean()),
  'itemType': Type.Optional(Type.String()),
  'itemID': Type.Optional(Type.String()),
  'itemRef': Type.Optional(Type.String()),
  'security': Type.Optional(Type.String()),
  'unselectable': Type.Optional(StringUnion(['on', 'off'])),
  'inputMode': Type.Optional(StringUnion(['text', 'none', 'search', 'tel', 'url', 'email', 'numeric', 'decimal'])),
  'is': Type.Optional(Type.String())
};
export const ContentPropsSchema = {
  'defaultChecked': Type.Optional(Type.Boolean()),
  'suppressContentEditableWarning': Type.Optional(Type.Boolean()),
  'suppressHydrationWarning': Type.Optional(Type.Boolean()),
  'accessKey': Type.Optional(Type.String()),
  'contextMenu': Type.Optional(Type.String()),
  'dir': Type.Optional(Type.String()),
  'hidden': Type.Optional(Type.Boolean()),
  'id': Type.Optional(Type.String()),
  'lang': Type.Optional(Type.String()),
  'placeholder': Type.Optional(Type.String()),
  'slot': Type.Optional(Type.String()),
  'title': Type.Optional(Type.String()),
  'translate': Type.Optional(StringUnion(['yes', 'no'])),
  'radioGroup': Type.Optional(Type.String()),
  'about': Type.Optional(Type.String()),
  'datatype': Type.Optional(Type.String()),
  'prefix': Type.Optional(Type.String()),
  'property': Type.Optional(Type.String()),
  'resource': Type.Optional(Type.String()),
  'typeof': Type.Optional(Type.String()),
  'vocab': Type.Optional(Type.String()),
  'autoCapitalize': Type.Optional(Type.String()),
  'autoCorrect': Type.Optional(Type.String()),
  'autoSave': Type.Optional(Type.String()),
  'color': Type.Optional(Type.String()),
  'itemProp': Type.Optional(Type.String()),
  'itemScope': Type.Optional(Type.Boolean()),
  'itemType': Type.Optional(Type.String()),
  'itemID': Type.Optional(Type.String()),
  'itemRef': Type.Optional(Type.String()),
  'security': Type.Optional(Type.String()),
  'unselectable': Type.Optional(StringUnion(['on', 'off'])),
  'inputMode': Type.Optional(StringUnion(['text', 'none', 'search', 'tel', 'url', 'email', 'numeric', 'decimal'])),
  'is': Type.Optional(Type.String())
};
export const SiderPropsSchema = {
  'theme': Type.Optional(StringUnion(['dark', 'light'])),
  'collapsed': Type.Optional(Type.Boolean()),
  'collapsible': Type.Optional(Type.Boolean()),
  'defaultCollapsed': Type.Optional(Type.Boolean()),
  'reverseArrow': Type.Optional(Type.Boolean()),
  'breakpoint': Type.Optional(StringUnion(['xxl', 'xl', 'lg', 'md', 'sm', 'xs']))
};
