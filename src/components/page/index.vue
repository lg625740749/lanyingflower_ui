<template>
    <el-container class="page-container">
        <el-aside :style="{'width':asideWidth}">
            <side-menu/>
        </el-aside>
        <el-container>
            <el-header class="page-tabs">
                <tags/>
            </el-header>
            <el-main class="page-main">
                <router-view class="avue-view"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import SideMenu from "@/components/lay-out/menu"
    import tags from "@/components/lay-out/tags"

    export default {
        name: "index",
        components: {SideMenu,tags},
        data() {
            return {
                // [侧边栏宽度] 正常状态
                asideWidth: 'auto',
                // [侧边栏宽度] 折叠状态
                asideWidthCollapse: 'auto',
                //刷新token锁
                refreshLock: false,
                //刷新token的时间
                refreshTime: null,
            }
        },

    }
</script>

<style scoped>
    .page-container {
        height: 100%;
    }

    .page-tabs {
        padding: 0;
    }

    .page-main {
        position: relative;
        padding: 0;
    }
</style>