// move to @sunmao-ui/runtime in the future?

import { ComponentMetadata } from "@sunmao-ui/core/lib/metadata";
import { ComponentImplementationProps } from "@sunmao-ui/runtime";
import { TUnion, TLiteral, Type } from "@sinclair/typebox";

import {
  ArrayKind,
  BooleanKind,
  IntegerKind,
  NumberKind,
  ObjectKind,
  Static,
  StringKind,
  UnionKind,
} from '@sinclair/typebox';

// copy from https://github.com/webzard-io/sunmao-ui/blob/main/packages/runtime/src/utils/parseTypeBox.ts
// remove generated items by Type.option to get specific example properties
// mostly used in the case of many attributes like component "Layout.tsx"
// for some simple properties you should manually specify the specific value for better display
export function getInitExampleProperties(tSchema: any): Static<typeof tSchema> {
  switch (true) {
    case tSchema.type === 'string' && 'enum' in tSchema && tSchema.enum.length > 0:
      return tSchema.enum[0];
    case tSchema.kind === StringKind:
      return '';
    case tSchema.kind === BooleanKind:
      return false;
    case tSchema.kind === ArrayKind:
      return [];
    case tSchema.kind === NumberKind:
    case tSchema.kind === IntegerKind:
      return 0;
    case tSchema.kind === ObjectKind: {
      const obj: Static<typeof tSchema> = {};
      for (const key in tSchema.properties) {
        obj[key] = getInitExampleProperties(tSchema.properties[key]);
      }
      return obj;
    }
    case tSchema.kind === UnionKind && 'anyOf' in tSchema && tSchema.anyOf.length > 0:
    case tSchema.kind === UnionKind && 'oneOf' in tSchema && tSchema.oneOf.length > 0: {
      const subSchema = (tSchema.anyOf || tSchema.oneOf)[0];
      return getInitExampleProperties(subSchema);
    }
    default:
      return {};
  }
}


export type IntoStringUnion<T> = {
  [K in keyof T]: T[K] extends string ? TLiteral<T[K]> : never;
};

export function StringUnion<T extends string[]>(
  values: [...T]
): TUnion<IntoStringUnion<T>> {
  return Type.KeyOf(
    Type.Object(
      values.reduce((prev, cur) => {
        prev[cur] = Type.Boolean();
        return prev;
      }, {} as any)
    )
  ) as any;
}

export const FALLBACK_METADATA: ComponentMetadata = {
  name: "",
  description: "",
  displayName: "",
  isDraggable: true,
  isResizable: true,
  exampleProperties: {},
  exampleSize: [1, 1],
};

export const getComponentProps = <T, TState, TMethods, KSlot extends string,
  KStyleSlot extends string,
  KEvent extends string>(
    props: T & ComponentImplementationProps<TState, TMethods, KSlot, KStyleSlot, KEvent>
  ): T => {
  const {
    component,
    slotsElements,
    services,
    app,
    gridCallbacks,
    componentWrapper,
    data,
    customStyle,
    callbackMap,
    effects,
    mergeState,
    subscribeMethods,
    ...rest
  } = props;
  return (rest as unknown) as T;
};
