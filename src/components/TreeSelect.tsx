import { TreeSelect as BaseTreeSelect } from "@arco-design/web-react";
import { ComponentImpl, implementRuntimeComponent } from "@sunmao-ui/runtime";
import { css } from "@emotion/css";
import { Type, Static } from "@sinclair/typebox";
import { FALLBACK_METADATA, getComponentProps } from "../sunmao-helper";
import {
  TreeSelectPropsSchema as BaseTreeSelectPropsSchema,
} from "../generated/types/TreeSelect";
import { useState, useEffect } from "react";

const TreeSelectPropsSchema = Type.Object(BaseTreeSelectPropsSchema);
const TreeSelectStateSchema = Type.Object({
  selectedOptions: Type.String(),
});


const TreeSelectImpl: ComponentImpl<Static<typeof TreeSelectPropsSchema>> = (
  props
) => {
  const { defaultValue, ...cProps } = getComponentProps(props);
  const { customStyle, mergeState, callbackMap } = props;

  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValue!);

  useEffect(() => {
    mergeState({ selectedOptions });
  }, [mergeState, selectedOptions]);

  const handleChange = (value: string[]) => {
    setSelectedOptions(value);
    callbackMap?.onChange?.();
  };

  const filterTreeNode = (inputText: string, treeNode: any) => {
    return (
      treeNode.props.title.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );
  };

  return (
    <BaseTreeSelect
      onChange={handleChange}
      className={css(customStyle?.content)}
      filterTreeNode={filterTreeNode}
      {...cProps}
      value={selectedOptions}
      treeCheckable={cProps.multiple}
    />
  );
};

const exampleProperties: Static<typeof TreeSelectPropsSchema> = {
  multiple: false,
  defaultValue: ["node1"],
  treeData: [
    {
      key: "node1",
      title: "Trunk",
      disabled: true,
      children: [
        {
          key: "node2",
          title: "Leaf1",
        },
      ],
    },
    {
      key: "node3",
      title: "Trunk2",
      disabled: false,
      children: [
        {
          key: "node4",
          title: "Leaf2",
        },
        {
          key: "node5",
          title: "Leaf3",
        },
      ],
    },
  ],
  bordered: true,
  placeholder: "Select option(s)",
  labelInValue: true,
  size: "default",
  disabled: false,
  error: false,
  showSearch: true,
  loading: false,
  allowClear: true,
};

const options = {
  version: "arco/v1",
  metadata: {
    ...FALLBACK_METADATA,
    name: "treeSelect",
    displayName: "TreeSelect",
    exampleProperties,
  },
  spec: {
    properties: TreeSelectPropsSchema,
    state: TreeSelectStateSchema,
    methods: {},
    slots: [],
    styleSlots: ["content"],
    events: ["onChange"],
  },
};

export const TreeSelect = implementRuntimeComponent(options)(TreeSelectImpl);
