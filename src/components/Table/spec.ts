import { Static } from '@sinclair/typebox'
import { TablePropsSchema } from "../../generated/types/Table";

export const exampleProperties: Static<typeof TablePropsSchema> = {
    columns: [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            sortDirections: ['ascend'],
            defaultSortOrder: 'ascend',
            type: 'text',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            sorter: true
            // sorter:(a,b)=>a.salary-b.salary,
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            type: 'button',
            btnCfg: {
                text: 'delete'
            }
        },
        {
            title: 'MutiOperation',
            dataIndex: 'mutiOperation',
            type: 'module',
            module: {
                id: 'clistItemName-{{$listItem.id}}',
                handlers: [
                    {
                        type: 'onClick',
                        componentId: 'Table1',
                        method: {
                            name: 'print',
                            parameters: {}
                        }
                    }
                ],
                properties: [],
                type: 'core/v1/text'
            }
        },
    ],
    defaultData: [
        {
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
            operation: 'delete'
        },
        {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
        },
        {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
        },
        {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
        },
        {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
        },
    ],
    className: '',
    tableLayoutFixed: false,
    borderCell: false,
    hover: true,
    defaultExpandAllRows: false,
    showHeader: true,
    stripe: false,
    size: 'default',
    pagePosition: 'bottomCenter',
    indentSize: 15,
    virtualized: false,
    rowSelectionType: 'default'
}