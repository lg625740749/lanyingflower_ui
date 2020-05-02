<template>
    <div>
        ssssscccccccccccccccccccccccc
        <input v-model="sval">
    </div>
</template>

<script>
    import {test} from "@/api/hi"

    export default {
        name: "hello",
        data() {
            return {
                sval: null
            }
        },
        created() {
            let arr = [1, 3, 5, 'abc', true];
            console.log(arr)
            let [, , a, b] = arr // 5 "abc"
            console.log(b)
            // test().then(res => {
            //     console.log(res)
            // })
        },
        beforeRouteLeave(to, from, next) {
            if (this.sval != null) {
                this.$route.meta.keepAlive = true
                const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
                if (answer) {
                    next()
                } else {
                    next(false)
                }
            } else {
                this.$route.meta.keepAlive = false
                next()
            }
        }
    }
</script>

<style scoped>

</style>