<template>
    <el-menu
            style="height: 100%"
            :default-active="$route.path"
            :show-timeout="200"
            background-color="#00142a"
            text-color="hsla(0,0%,100%,.65)"
            active-text-color="#409eff"
            :collapse="isCollapse">
        <child-menu :menu="menu" :isCollapse="isCollapse"/>
    </el-menu>
</template>

<script>
    import childMenu from "@/components/lay-out/menu/child-menu"

    export default {
        name: "side-menu",
        components: {childMenu},
        // 路由只需设置最深一级菜单的即可
        data() {
            return {
                isCollapse: false,
                menu: []
            }
        },
        created() {
            this.menu = [
                {
                    "children": [
                        {
                            "children": [],
                            "href": "/task/home",
                            "id": "7",
                            "label": "1",
                            "parentId": "2"
                        },
                        {
                            "children": [],
                            "href": "/task/regulartask",
                            "id": "42",
                            "label": "2",
                            "parentId": "2"
                        },
                        {
                            "children": [],
                            "href": "/task/othertask",
                            "id": "43",
                            "label": "3",
                            "parentId": "2"
                        },
                        {
                            "children": [],
                            "href": "/task/taskaware",
                            "id": "8",
                            "label": "4",
                            "parentId": "2"
                        }
                    ],
                    "icon": "el-icon-document-checked",
                    "id": "2",
                    "label": "5",
                    "parentId": "0"
                },
                {
                    "children": [],
                    "href": "/task/dailymsg",
                    "icon": "el-icon-star-off",
                    "id": "9",
                    "label": "6",
                    "parentId": "0"
                },

            ]
        }
    }
</script>

<style scoped>

</style>