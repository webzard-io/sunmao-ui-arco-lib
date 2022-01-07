import { Dropdown as BaseDropdown, Menu, Button } from "@arco-design/web-react";
import { ComponentImplementation } from "@sunmao-ui/runtime";
import { createComponent } from "@sunmao-ui/core";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import { DropdownPropsSchema as BaseDropdownPropsSchema } from "../generated/types/Dropdown";

const DropdownPropsSchema = Type.Object(BaseDropdownPropsSchema);
const DropdownStateSchema = Type.Object({});

const DropdownImpl: ComponentImplementation<
  Static<typeof DropdownPropsSchema>
> = (props) => {
  const { slotsElements } = props;
  const cProps = getComponentProps(props);
  return (
    <BaseDropdown {...cProps} droplist={slotsElements.list}>
      {slotsElements.trigger}
    </BaseDropdown>
  );
};

export const Dropdown = {
  ...createComponent({
    version: "arco/v1",
    metadata: {
      ...FALLBACK_METADATA,
      name: "dropdown",
      displayName: "Dropdown",
    },
    spec: {
      properties: DropdownPropsSchema,
      state: DropdownStateSchema,
      methods: {},
      slots: ["trigger", "list"],
      styleSlots: [],
      events: [],
    },
  }),
  impl: DropdownImpl,
};
