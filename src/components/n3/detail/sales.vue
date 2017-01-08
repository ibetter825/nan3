<template>
    <transition name="fade">
        <div>
            <ul v-if="prop.type === 0" class="sales f12 rtive" @click="click">
                <li class="fl">
                    <p><span class="type red">促销</span><span class="cnt">nisdedede</span></p>
                    <p><span class="type red">积分</span><span class="cnt">sdsdsds</span></p>
                </li>
                <li class="abte">
                    <i class="iconfont icon-xiangyoujiantou"></i>
                </li>
                <div class="clear"></div>
            </ul>
            <div v-if="prop.type === 1" class="shade shade-darker" @click.self="hide">
                <section class="sales modal abte tran03" :style="style">
                    <ul class="modal-btn white abte">
                        <li class="confirm bg-red" @click.self="hide">完成</li>
                    </ul>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                y: 100
            }
        },
        computed: {
            style() {
                let dis = 'translateY(' + this.y + '%)'
                return {
                    'transform': dis,
                    '-webkit-transform': dis,
                    '-moz-transform': dis,
                    '-ms-transform': dis,
                    '-o-transform': dis
                }
            }
        },
        methods: {
            hide: function() {
                let _this = this
                _this.y = 100
                setTimeout(function() {
                    _this.prop.show = false
                }, 200);

            },
            click: function() { //当为缩略版时点击事件
                let click = this.prop.methods.click
                if (click) click()
            }
        },
        watch: {
            'prop.show': function(n, o) {
                n ? this.y = 0 : this.y = 100
            }
        },
        created() {
            let _this = this
            setTimeout(function() {
                _this.y = 0
            }, 16);
        }
    }
</script>