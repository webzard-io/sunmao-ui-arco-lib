import { Divider as BaseDivider } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { DividerPropsSchema as BaseDividerPropsSchema } from "../generated/types/Divider";

const DividerPropsSchema = Type.Object({
  ...BaseDividerPropsSchema,
});
const DividerStateSchema = Type.Object({});

const DividerImpl: ComponentImpl<Static<typeof DividerPropsSchema>> = (
  props
) => {
  const { elementRef, customStyle } = props;
  const { ...cProps } = getComponentProps(props);

  return (
    <BaseDivider
      ref={elementRef}
      className={css(customStyle?.content)}
      {...cProps}
    ></BaseDivider>
  );
};

const exampleProperties: Static<typeof DividerPropsSchema> = {
  type: "horizontal",
  orientation: "center",
};

const options = {
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    name: "divider",
    displayName: "Divider",
    exampleProperties,
    annotations: {
      category: "Layout",
    }
  },
  spec: {
    properties: DividerPropsSchema,
    state: DividerStateSchema,
    methods: {},
    slots: [],
    styleSlots: ["content"],
    events: [],
  },
};

export const Divider = implementRuntimeComponent(options)(DividerImpl);
