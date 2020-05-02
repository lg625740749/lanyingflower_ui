import layout from '@/components/page/index'

export default [
    {
        path: '/base',
        component: layout,
        children:[
            {
                path: 'hi',
                name: 'hi你好',
                component: (resolve) => require(['@/views/hello'], resolve)
            },
        ]
    }
]