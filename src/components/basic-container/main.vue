<template>
    <div class="basic-container">
        <el-card>
            <slot/>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "baseContainer"
    }
</script>


<style scoped lang="scss">
    .basic-container {
        padding: 20px;
        border-radius: 6px;
    }
</style>
