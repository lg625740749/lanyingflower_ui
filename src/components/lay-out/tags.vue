<template>
    <div class="tags-container">
        <div class="tags-box" ref="tagBox">
            <div ref="tagsList"
                 class="tags-list"
                 @mousewheel="handleMouseWheel"
                 @mouseup="handleMouseUp"
                 @mousemove="handleMouse"
                 @mousedown="handleMouseStart"
                 @touchup="handleMouseUp"
                 @touchmove="handleMouse"
                 @touchstart="handleMouseStart">
                <div ref="tag"
                     class="tag-item"
                     v-for="item in items"
                >
                    <span class="tag-text">{{item.label}}</span>
                    <i class="el-icon-close tag-close"
                       v-if="item.close"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tags",
        data() {
            return {
                visible: false,
                tagBodyLeft: 0,
                lock: false,
                startX: 0,
                startY: 0,
                endX: 0,
                endY: 0,
                top: 0,
                left: 0,
                selectedTag: {},

                items: [
                    {type: '', label: '标签一'},
                    {type: 'success', label: '标签二'},
                    {type: 'info', label: '标签三'},
                    {type: 'danger', label: '标签四'},
                    {type: 'warning', label: '标签五'}
                ]
            }
        },
        methods: {
            init(){

            },
            handleMouseWheel(e) {
                const step = 0.8 * 90; // 模拟一个tag长度,懒得一个个拿
                const boundarystart = 0,   //梦开始的地方
                    //外层包装减去后，给自己留100 余地
                    boundaryend = this.$refs.tagsList.offsetWidth - this.$refs.tagBox.offsetWidth + 100;
                //最少给自己留大概的存在tag位置显示出来，当然这里可以自定义更好的数值
                // Y>0向左滑动
                if (e.deltaY > 0 && this.tagBodyLeft >= -boundaryend) {
                    this.tagBodyLeft = this.tagBodyLeft - step;
                    // Y<0向右滑动
                } else if (e.deltaY < 0 && this.tagBodyLeft < boundarystart) {
                    this.tagBodyLeft = this.tagBodyLeft + step;
                }
            },
            handleMouseUp(e) {
                this.lock = false;
            },
            handleMouseStart(e) {
                this.lock = true;
                if (e.clientX && e.clientY) {
                    this.startX = e.clientX;
                    this.startY = e.clientY;
                } else {
                    this.startX = e.changedTouches[0].pageX;
                    this.startY = e.changedTouches[0].pageY;
                }
            },
            handleMouse(e) {
                const boundarystart = 0,
                    boundaryend =
                        this.$refs.tagsList.offsetWidth - this.$refs.tagBox.offsetWidth + 100;
                if (!this.lock) {
                    return;
                }
                //鼠标滑动
                if (e.clientX && e.clientY) {
                    this.endX = e.clientX;
                    this.endY = e.clientY;
                    //触摸屏滑动
                } else {
                    //获取滑动屏幕时的X,Y
                    this.endX = e.changedTouches[0].pageX;
                    this.endY = e.changedTouches[0].pageY;
                }
                //获取滑动距离
                let distanceX = this.endX - this.startX;
                //判断滑动方向——向右滑动
                distanceX = parseInt(distanceX * 0.8);
                if (distanceX > 0 && this.tagBodyLeft < boundarystart) {
                    this.tagBodyLeft = this.tagBodyLeft + distanceX;
                    //判断滑动方向——向左滑动
                } else if (distanceX < 0 && this.tagBodyLeft >= -boundaryend) {
                    this.tagBodyLeft = this.tagBodyLeft + distanceX;
                }
            },

        },
        watch: {
            tagBodyLeft(value) {
                this.$refs.tagsList.style.left = value + 'px'
            }
        }
    }
</script>

<style scoped lang="scss">
    .tags-container {
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

        .tags-box {
            position: relative;
            box-sizing: border-box;
            /*padding-right: 106px;*/
            width: 100%;
            height: 40px;
        }

        .tags-list {
            position: absolute;
            padding: 2px 10px;
            overflow: visible;
            white-space: nowrap;
            transition: left .3s ease;
        }


        .tag-item {
            position: relative;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            margin: 2px 4px 2px 0;
            padding: 0 10px;
            border: 1px solid #eee;
            border-radius: 3px;
            color: #495060 !important;
            font-size: 12px;
            vertical-align: middle;
            opacity: 1;
            overflow: hidden;
            cursor: pointer;

            &.is-active {
                border-color: #409eff;
            }

            &.is-not-active {
                border-color: #67C23A !important;
            }
        }

        .tag-text {
            margin-left: 8px;
        }

        .tag-close {
            margin-left: 8px;
        }

        .tag-item:hover {
            opacity: .5;
        }

    }
</style>