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
            filter: true

        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            sorter: true
        },
        {
            title: 'Time',
            dataIndex: 'time',
            sorter: true
        },
        {
            title: 'Link',
            dataIndex: 'link',
            type: 'link',
            filter: true
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        // },
        // {
        //     title: 'Email',
        //     dataIndex: 'email',
        // },
        // {
        //     title: 'Operation',
        //     dataIndex: 'operation',
        //     type: 'button',
        //     btnCfg: {
        //         text: 'delete',
        //         handlers: [
        //             {
        //                 componentId: 'Table1',
        //                 method: {
        //                     name: 'deleteRows',
        //                 }
        //             }
        //         ]
        //     }
        // },
        // {
        //     title: 'MutiOperation',
        //     dataIndex: 'mutiOperation',
        //     type: 'module',
        //     module: {
        //         id: 'clistItemName-{{$listItem.id}}',
        //         handlers: [
        //             {
        //                 type: 'onClick',
        //                 componentId: 'Table1',
        //                 method: {
        //                     name: 'print',
        //                     parameters: {}
        //                 }
        //             }
        //         ],
        //         properties: [],
        //         type: 'core/v1/text'
        //     }
        // },
    ],
    data: Array(200)
        .fill('')
        .map((_, index) => ({
            key: `${index}`,
            name: `${Math.random() > 0.5 ? 'Kevin Sandra' : 'xzdry'}${index}`,
            link: `link${Math.random() > 0.5 ? '-A' : '-B'}`,
            salary: Math.floor(Math.random() * 1000),
            // salary: Math.random()>0.5?Math.floor(Math.random()*1000):'2a',
            // address: `${index} Park Road, London`,
            // email: `kevin.sandra_${index}@example.com`,
            time: `2021-${Math.floor(Math.random() * 11)}-11T${Math.floor(Math.random() * 23)}:10:45.437Z`
        })),
    pagination: {
        pageSize: 6,
        current: 0
    },
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