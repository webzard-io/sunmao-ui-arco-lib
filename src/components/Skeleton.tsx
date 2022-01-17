import { Skeleton as BaseSkeleton } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css, cx } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { SkeletonPropsSchema as BaseSkeletonPropsSchema } from "../generated/types/Skeleton";
import { useState, useEffect } from "react";

const SkeletonPropsSchema = Type.Object(BaseSkeletonPropsSchema);
const SkeletonStateSchema = Type.Object({
  loading: Type.Boolean(),
});

const SkeletonImpl: ComponentImpl<Static<typeof SkeletonPropsSchema>> = (
  props
) => {
  const { ...cProps } = getComponentProps(props);
  const {
    customStyle,
    className,
    slotsElements,
  } = props;

  return (
    <BaseSkeleton
      className={cx(className, css(customStyle?.content))}
      {...cProps}
    >
      {slotsElements.content}
    </BaseSkeleton>
  );
};

const exampleProperties: Static<typeof SkeletonPropsSchema> = {
  className: "",
  animation: true,
  loading: true,
  image: false,
  text: { rows: 3, width: ["100%", 600, 400] },
};

const options = {
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    name: "Skeleton",
    displayName: "Skeleton",
    exampleProperties,
  },
  spec: {
    properties: SkeletonPropsSchema,
    state: SkeletonStateSchema,
    methods: {
      setLoading: Type.String(),
    },
    slots: ["content"],
    styleSlots: ["content"],
    events: [],
  },
};

export const Skeleton = implementRuntimeComponent(options)(
  SkeletonImpl as typeof SkeletonImpl & undefined
);
