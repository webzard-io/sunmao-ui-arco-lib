import { Select as BaseSelect } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { SelectPropsSchema as BaseSelectPropsSchema } from "../generated/types/Select";
import { useEffect, useState } from "react";

const SelectPropsSchema = Type.Object({
  ...BaseSelectPropsSchema,
});
const SelectStateSchema = Type.Object({
  value: Type.String(),
});

const SelectImpl: ComponentImpl<Static<typeof SelectPropsSchema>> = (props) => {
  const { customStyle, callbackMap, mergeState } = props;
  const { defaultValue, options = [], ...cProps } = getComponentProps(props);

  const [value, setValue] = useState<string>(defaultValue);
  useEffect(() => {
    mergeState({
      value,
    });
  }, [value]);

  return (
    <BaseSelect
      className={css(customStyle?.content)}
      onChange={(v) => {
        setValue(v);
        callbackMap?.onChange?.();
      }}
      value={value}
      {...cProps}
      mode={cProps.multiple ? "multiple" : undefined}
    >
      {options.map((o) => (
        <BaseSelect.Option key={o.value} value={o.value} disabled={o.disabled}>
          {o.text}
        </BaseSelect.Option>
      ))}
    </BaseSelect>
  );
};

const exampleProperties: Static<typeof SelectPropsSchema> = {
  allowClear: false,
  multiple: false,
  allowCreate: false,
  bordered: true,
  defaultValue: "smartx",
  disabled: false,
  labelInValue: false,
  loading: false,
  options: [
    { value: "smartx", text: "smartx", disabled: false },
    { value: "baidu", text: "baidu", disabled: false },
    { value: "tencent", text: "tencent", disabled: true },
  ],
  placeholder: "Please select",
  size: "default",
};

export const Select = implementRuntimeComponent({
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    name: "select",
    displayName: "Select",
    exampleProperties,
    annotations: {
      category: "Input",
    },
  },
  spec: {
    properties: SelectPropsSchema,
    state: SelectStateSchema,
    methods: {},
    slots: [],
    styleSlots: ["content"],
    events: ["onChange"],
  },
})(SelectImpl);
