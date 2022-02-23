import { Application } from "@sunmao-ui/core";


export const attributes: Application = {
    "kind": "Application",
    "version": "example/v1",
    "metadata": {
        "name": "attributesExample",
        "description": "demonstrating the use of different property"
    },
    "spec": {
        "components": [
            {
                "id": "space1",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "vertical",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": [
                                {
                                    "styleSlot": "content",
                                    "style": "align-items: flex-start !important;\nwidth:800px;"
                                }
                            ]
                        }
                    }
                ]
            },
            {
                "id": "space6",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": true,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space1",
                                "slot": "content"
                            }
                        }
                    },
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": []
                        }
                    }
                ]
            },
            {
                "id": "border_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space6",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "border",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Border",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "border_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "border_switch",
                "type": "arco/v1/Switch",
                "properties": {
                    "defaultChecked": false,
                    "disabled": false,
                    "loading": false,
                    "type": "circle",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "border_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "border_cell_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space6",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "bordercell",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Border Cell",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "border_cell_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "border_cell_switch",
                "type": "arco/v1/Switch",
                "properties": {
                    "defaultChecked": false,
                    "disabled": false,
                    "loading": false,
                    "type": "circle",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "border_cell_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "strip_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space6",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "strip",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Strip",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "strip_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "strip_switch",
                "type": "arco/v1/Switch",
                "properties": {
                    "defaultChecked": false,
                    "disabled": false,
                    "loading": false,
                    "type": "circle",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "strip_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "loading_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space6",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "loading",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Loading",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "loading_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "loading_switch",
                "type": "arco/v1/Switch",
                "properties": {
                    "defaultChecked": false,
                    "disabled": false,
                    "loading": false,
                    "type": "circle",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "loading_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "layout_fixed_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space6",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "layout_fixed",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Layout Fixed",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "layout_fixed_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "layout_fixed_switch",
                "type": "arco/v1/Switch",
                "properties": {
                    "defaultChecked": false,
                    "disabled": false,
                    "loading": false,
                    "type": "circle",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "layout_fixed_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "size_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space1",
                                "slot": "content"
                            }
                        }
                    },
                    {
                        "type": "core/v1/event",
                        "properties": {
                            "handlers": []
                        }
                    },
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": []
                        }
                    }
                ]
            },
            {
                "id": "size",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Size",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "size_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "radio10",
                "type": "arco/v1/radio",
                "properties": {
                    "options": "{{\n[\n  {\n    \"label\": \"default\",\n    \"value\": \"default\",\n  },\n  {\n    \"label\": \"middle\",\n    \"value\": \"middle\",\n  },\n  {\n    \"label\": \"small\",\n    \"value\": \"small\",\n  },\n  {\n    \"label\": \"mini\",\n    \"value\": \"mini\",\n  }\n]\n}}",
                    "type": "button",
                    "defaultCheckedValue": "default",
                    "direction": "horizontal",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "size_space",
                                "slot": "content"
                            }
                        }
                    },
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": [
                                {
                                    "styleSlot": "group",
                                    "style": "width:100%"
                                }
                            ]
                        }
                    }
                ]
            },
            {
                "id": "pagination_position_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space1",
                                "slot": "content"
                            }
                        }
                    },
                    {
                        "type": "core/v1/event",
                        "properties": {
                            "handlers": []
                        }
                    },
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": []
                        }
                    }
                ]
            },
            {
                "id": "pagination_position",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Pagination position",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "pagination_position_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "page_position",
                "type": "arco/v1/radio",
                "properties": {
                    "options": "{{\n[\n  {label: 'BottomRight', value: 'br'},\n  {label: 'BottomLeft', value: 'bl'},\n  {label: 'TopRight', value: 'tr'},\n  {label: 'TopLeft', value: 'tl'},\n  {label: 'TopCenter', value: 'topCenter'},\n  {label: 'BottomCenter', value: 'bottomCenter'},\n]\n\n}}",
                    "type": "button",
                    "defaultCheckedValue": "default",
                    "direction": "horizontal",
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "pagination_position_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "per_page_size_space",
                "type": "arco/v1/space",
                "properties": {
                    "align": "center",
                    "direction": "horizontal",
                    "wrap": false,
                    "size": "mini"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space1",
                                "slot": "content"
                            }
                        }
                    },
                    {
                        "type": "core/v1/event",
                        "properties": {
                            "handlers": []
                        }
                    },
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": []
                        }
                    }
                ]
            },
            {
                "id": "per_page_size",
                "type": "core/v1/text",
                "properties": {
                    "value": {
                        "raw": "Per Page Size",
                        "format": "plain"
                    }
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "per_page_size_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "per_page_size_input",
                "type": "arco/v1/input",
                "properties": {
                    "allowClear": false,
                    "disabled": false,
                    "readOnly": false,
                    "defaultValue": "10",
                    "placeholder": "please input",
                    "error": false,
                    "size": "default"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "per_page_size_space",
                                "slot": "content"
                            }
                        }
                    }
                ]
            },
            {
                "id": "table2",
                "type": "arco/v1/table",
                "properties": {
                    "columns": [
                        {
                            "title": "Name",
                            "dataIndex": "name",
                            "sorter": false,
                            "sortDirections": [
                                "ascend",
                                "descend"
                            ],
                            "defaultSortOrder": "ascend",
                            "type": "text",
                            "filter": false
                        },
                        {
                            "title": "Salary",
                            "dataIndex": "salary",
                            "sorter": false,
                            "filter": false,
                            "type": "text"
                        },
                        {
                            "title": "Time",
                            "dataIndex": "time",
                            "sorter": false,
                            "filter": false,
                            "type": "text"
                        },
                        {
                            "title": "Link",
                            "dataIndex": "link",
                            "type": "link",
                            "filter": false,
                            "sorter": false
                        }
                    ],
                    "data": [
                        {
                            "key": "key 0",
                            "name": "xzdry0",
                            "link": "link-B",
                            "salary": 59,
                            "time": "2021-7-11T1:10:45.437Z"
                        },
                        {
                            "key": "key 1",
                            "name": "xzdry1",
                            "link": "link-A",
                            "salary": 371,
                            "time": "2021-1-11T11:10:45.437Z"
                        },
                        {
                            "key": "key 2",
                            "name": "Kevin Sandra2",
                            "link": "link-A",
                            "salary": 779,
                            "time": "2021-10-11T4:10:45.437Z"
                        },
                        {
                            "key": "key 3",
                            "name": "Kevin Sandra3",
                            "link": "link-A",
                            "salary": 107,
                            "time": "2021-7-11T4:10:45.437Z"
                        },
                        {
                            "key": "key 4",
                            "name": "Kevin Sandra4",
                            "link": "link-A",
                            "salary": 610,
                            "time": "2021-7-11T11:10:45.437Z"
                        },
                        {
                            "key": "key 5",
                            "name": "xzdry5",
                            "link": "link-A",
                            "salary": 297,
                            "time": "2021-6-11T8:10:45.437Z"
                        },
                        {
                            "key": "key 6",
                            "name": "xzdry6",
                            "link": "link-A",
                            "salary": 799,
                            "time": "2021-0-11T9:10:45.437Z"
                        },
                        {
                            "key": "key 7",
                            "name": "xzdry7",
                            "link": "link-B",
                            "salary": 242,
                            "time": "2021-10-11T0:10:45.437Z"
                        },
                        {
                            "key": "key 8",
                            "name": "xzdry8",
                            "link": "link-B",
                            "salary": 798,
                            "time": "2021-2-11T2:10:45.437Z"
                        },
                        {
                            "key": "key 9",
                            "name": "xzdry9",
                            "link": "link-B",
                            "salary": 947,
                            "time": "2021-1-11T9:10:45.437Z"
                        },
                        {
                            "key": "key 10",
                            "name": "Kevin Sandra10",
                            "link": "link-B",
                            "salary": 927,
                            "time": "2021-4-11T0:10:45.437Z"
                        },
                        {
                            "key": "key 11",
                            "name": "Kevin Sandra11",
                            "link": "link-A",
                            "salary": 463,
                            "time": "2021-10-11T5:10:45.437Z"
                        },
                        {
                            "key": "key 12",
                            "name": "Kevin Sandra12",
                            "link": "link-B",
                            "salary": 396,
                            "time": "2021-9-11T3:10:45.437Z"
                        }
                    ],
                    "pagination": {
                        "pageSize": "{{Number(per_page_size_input.value)}}"
                    },
                    "tableLayoutFixed": "{{layout_fixed_switch.value}}",
                    "borderCell": "{{border_cell_switch.value}}",
                    "stripe": "{{strip_switch.value}}",
                    "size": "{{radio10.checkedValue}}",
                    "pagePosition": "{{page_position.checkedValue}}",
                    "rowSelectionType": "{{radio3.checkedValue}}",
                    "border": "{{border_switch.value}}",
                    "loading": "{{loading_switch.value}}"
                },
                "traits": [
                    {
                        "type": "core/v1/slot",
                        "properties": {
                            "container": {
                                "id": "space1",
                                "slot": "content"
                            }
                        }
                    },
                    {
                        "type": "core/v1/style",
                        "properties": {
                            "styles": [
                                {
                                    "styleSlot": "content",
                                    "style": "width:650px;"
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
}