import { Pagination as BasePagination } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css, cx } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { PaginationPropsSchema as BasePaginationPropsSchema } from "../generated/types/Pagination";
import { useEffect, useState } from "react";

const PaginationPropsSchema = Type.Object(BasePaginationPropsSchema);
const PaginationStateSchema = Type.Object({
  currentPage: Type.Number(),
});

const PaginationImpl: ComponentImpl<Static<typeof PaginationPropsSchema>> = (
  props
) => {
  const { defaultCurrent, ...cProps } = getComponentProps(props);
  const { customStyle, mergeState, callbackMap } = props;

  const [current, setCurrent] = useState<number>(defaultCurrent || 0);

  if (cProps.sizeCanChange) {
    Reflect.deleteProperty(cProps, "pageSize");
  }

  useEffect(() => {
    mergeState({ currentPage: current });
  }, [current, mergeState]);

  const handleChange = (pageNum: number) => {
    setCurrent(pageNum);
    callbackMap?.onChange();
  };

  return (
    <BasePagination
      className={cx(css(customStyle?.content))}
      {...cProps}
      current={current}
      onChange={handleChange}
    />
  );
};

const exampleProperties: Static<typeof PaginationPropsSchema> = {
  pageSize: 10,
  total: 300,
  defaultCurrent: 3,
  defaultPageSize: 20,
  disabled: false,
  hideOnSinglePage: true,
  size: "default",
  sizeCanChange: true,
  pageSizeChangeResetCurrent: true,
  simple: false,
  showJumper: false,
};

const options = {
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    name: "pagination",
    displayName: "Pagination",
    exampleProperties,
  },
  spec: {
    properties: PaginationPropsSchema,
    state: PaginationStateSchema,
    methods: {},
    slots: [],
    styleSlots: ["content"],
    events: ["onChange"],
  },
};

export const Pagination = implementRuntimeComponent(options)(PaginationImpl);
