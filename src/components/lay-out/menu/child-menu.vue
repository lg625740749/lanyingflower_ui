<template>
    <div class="menu-wrapper">
        <template v-for="(item,index) in menu">
            <el-menu-item v-if="item.children.length==0"
                          :index="item.label"
                          @click="open(item)"
                          :key="item.label">
                <i :class="item.icon"/>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
            <el-submenu v-else
                        :index="item.label"
                        :key="item.label">
                <!-- 侧边栏标题 -->
                <template slot="title">
                  <span slot="title" >
                    <i :class="item.icon"/>{{item.label}}
                  </span>
                </template>
                <!-- 侧边栏子项目 -->
                <template v-for="(child,cindex) in item.children">
                    <el-menu-item
                                  :index="child.id"
                                  @click="open(child)"
                                  v-if="child.children.length==0"
                                  :key="child.label">
                        <span slot="title"> <i :class="child.icon"/>{{child.label}}</span>
                    </el-menu-item>
                    <child-menu v-else
                                  :menu="[child]"
                                  :key="cindex"
                                  :isCollapse="isCollapse"/>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default {
        name: "childMenu",
        props: {
            menu: {
                type: Array
            },
            isCollapse: {
                type: Boolean
            }
        }
    }
</script>

<style scoped>

</style>