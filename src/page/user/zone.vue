<template>
    <div class="zone">
        <n3-top :prop="top">
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="block white" href="">
                    <i class="iconfont icon-xiaoxizhongxin"></i>
                </a>
                <a class="block white" href="">
                    <i class="iconfont icon-shezhi"></i>
                </a>
            </li>
            <li class="title" slot="center">会员中心</li>
        </n3-top>
        <section class="main">
            <header class="header bg-orange pd10-0">
                <ul class="user-info">
                    <li>
                        <img class="user-avatar" src="/static/images/avatar.gif" alt="">
                    </li>
                    <li class="white">
                        <p class="pd10-0">唐僧从不用飘柔</p>
                        <p>13409887772</p>
                    </li>
                </ul>
            </header>
            <n3-sect :prop="sect[0]"></n3-sect>
        </section>
        <div class="divider"></div>
        <div class="divider divider5"></div>
        <n3-footer :prop="footer"></n3-footer>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                top: {
                    clz: 'bg-orange white'
                },
                sect: [
                    {
                        type: 4,
                        url: '/static/data/zone_sect_4.json',
                        title: {
                            icon: 'icon-wodedingdan',
                            text: '我的订单',
                            more: {
                                link: {
                                    path: '#'
                                },
                                text: '全部订单'
                            }
                        }
                    }
                ],
                footer: {
                    selected: 'zone'
                }
            }
        },
        methods: {
            back: function () {
                window.history.back()
            }
        },
        created () {
            console.log(this.$route.query.id)
        }
    }
</script>