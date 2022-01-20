import { Space as BaseSpace } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import {
  FALLBACK_METADATA,
  getComponentProps,
  StringUnion,
} from "../sunmao-helper";
import { SpacePropsSchema as BaseSpacePropsSchema } from "../generated/types/Space";

const SpacePropsSchema = Type.Object({
  ...BaseSpacePropsSchema,
  size: Type.Union([
    Type.Optional(StringUnion(["mini", "small", "medium", "large"])),
    Type.Number(),
  ]),
});
const SpaceStateSchema = Type.Object({});

const SpaceImpl: ComponentImpl<Static<typeof SpacePropsSchema>> = (props) => {
  const { slotsElements, customStyle } = props;
  const cProps = getComponentProps(props);

  return (
    <BaseSpace className={css(customStyle?.content)} {...cProps} size="large">
      {slotsElements.content}
    </BaseSpace>
  );
};

const exampleProperties: Static<typeof SpacePropsSchema> = {
  align: "center",
  direction: "vertical",
  wrap: false,
  size: "mini",
};
export const Space = implementRuntimeComponent({
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    exampleProperties,
    name: "space",
    displayName: "Space",
  },
  spec: {
    properties: SpacePropsSchema,
    state: SpaceStateSchema,
    methods: {},
    slots: ["content"],
    styleSlots: ["content"],
    events: ["onClick"],
  },
})(SpaceImpl);
