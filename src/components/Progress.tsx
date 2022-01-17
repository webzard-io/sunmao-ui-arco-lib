import { Progress as BaseProgress } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css, cx } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { ProgressPropsSchema as BaseProgressPropsSchema } from "../generated/types/Progress";

const ProgressPropsSchema = Type.Object(BaseProgressPropsSchema);
const ProgressStateSchema = Type.Object({});

const ProgressImpl: ComponentImpl<Static<typeof ProgressPropsSchema>> = (
  props
) => {
  const { className, ...cProps } = getComponentProps(props);
  const { customStyle } = props;

  let steps = 0;
  // step cannot be negative
  if (cProps.steps && cProps.steps > 0) {
    steps = cProps.steps;
  }

  return (
    <BaseProgress
      className={cx(className, css(customStyle?.content))}
      {...cProps}
      steps={steps}
    />
  );
};
const exampleProperties: Static<typeof ProgressPropsSchema> = {
  className: "",
  type: "line",
  steps: 0,
  animation: true,
  status: "normal",
  color: "red",
  trailColor: "blue",
  showText: true,
  percent: 0,
  width: 100,
  size: "default",
  buffer: false,
  bufferColor: "",
};

const options = {
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    name: "Progress",
    displayName: "Progress",
    exampleProperties,
  },
  spec: {
    properties: ProgressPropsSchema,
    state: ProgressStateSchema,
    methods: {},
    slots: [],
    styleSlots: ["content"],
    events: [""],
  },
};

export const Progress = implementRuntimeComponent(options)(
  ProgressImpl as typeof ProgressImpl & undefined
);
