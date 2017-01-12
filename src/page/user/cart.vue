<template>
    <div class="cart">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-xiaoxizhongxin"></i>
                </a>
            </li>
            <li class="title" slot="center">购物车</li>
        </n3-top>
        <section class="main">
            <ul class="cart-list f12 gray">
                <li class="cart-item pd5-10" v-for="(shop, index) in data" v-if="shop !== null">
                    <ul class="cart-item-header">
                        <li class="left fl" @click.stop="check(shop)">
                            <span v-if="shop.checked === false"><i class="iconfont icon-square"></i></span>
                            <span v-if="shop.checked === null"><i class="iconfont icon-squareban"></i></span>
                            <span v-if="shop.checked === true"><i class="iconfont icon-squarecheck"></i></span>
                        </li>
                        <li class="right fr" @click.stop="edit($event, index)">编辑</li>
                        <li class="center">
                            <i class="iconfont icon-shichang f14 orange"></i>
                            <span class="f14"> {{ shop.name }}</span>
                            <i class="iconfont icon-xiangyoujiantou f12"></i>
                        </li>
                    </ul>
                    <ul class="cart-item-cnt clear">
                        <li v-for="(item, i) in shop.list">
                            <div class="left fl" @click.stop="check(item, shop)">
                                <span v-if="item.checked === false"><i class="iconfont icon-square"></i></span>
                                <span v-if="item.checked === true"><i class="iconfont icon-squarecheck"></i></span>
                            </div>
                            <div class="right fr"></div>
                            <div class="center">
                                <div class="cart-item-img">
                                    <img :src="item.img">
                                </div>
                                <div class="cart-item-info rtive">
                                    <ul class="i-edit bg-white abte" v-if="shop.editable">
                                        <li class="fl"></li>
                                        <li class="fr bg-red white" @click.stop="remove(index, i)">
                                            <i class="iconfont icon-lajixiang"></i>
                                        </li>
                                        <li>
                                            <p class="i-edit-count">
                                                <span class="fl block"><i class="iconfont icon-jianhao light-gray"></i></span>
                                                <span class="fr block"><i class="iconfont icon-jiahao1 light-gray"></i></span>
                                                <span class="block"><i class="buy-num">{{ item.num }}</i></span>
                                            </p>
                                            <p class="i-edit-info rtive">
                                                <span>{{ item.info }}</span>
                                                <span class="fr abte"><i class="iconfont icon-xiangxiajiantou"></i></span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="i-info" v-if="!shop.editable">
                                        <p>{{ item.name }}</p>
                                        <p class="light-gray">购买类别</p>
                                        <p>
                                            <span class="f10 orange">￥</span>
                                            <span class="f16 orange">{{ item.price }}</span>
                                            <span class="fr f14">× {{ item.num }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="divider divider2 bg-white"></div>
            <div class="divider divider5 bg-white"></div>
            <div class="divider divider5 bg-white"></div>
            <ul class="settle fixed bg-white">
                <li class="fl f16" @click.stop="checkAll">
                    <span v-if="!checkedAll"><i class="iconfont icon-square"></i></span>
                    <span v-if="checkedAll"><i class="iconfont icon-squarecheck"></i></span>
                    <span>全选</span>
                </li>
                <li class="fr bg-red white f16">
                    结 算
                </li>
                <li>
                    <p class="settle-p-60"><span class="f12">合计: </span><span class="orange f12">￥</span><span class="orange f24">{{ total }}</span></p>
                    <p class="hide">ss</p>
                </li>
            </ul>
        </section>
        <n3-footer :prop="footer"></n3-footer>
    </div>
</template>
<script>
    //跳动的小球，用于添加购物车的动画效果
    module.exports = {
        data() {
            return {
                checkedAll: false,
                total: 0,
                data: [],
                footer: {
                    selected: 'cart'
                }
            }
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            },
            edit: function (e, index) {
                this.data[index].editable = !this.data[index].editable
                if (this.data[index].editable)
                    e.currentTarget.innerHTML = '完成'
                else
                    e.currentTarget.innerHTML = '编辑'
            },
            remove: function (index, i) {
                let _this = this
                _this.$layer({
                    content: '确定要移除该商品吗？',
                    btn: ['取消', '确定'],
                    //skin: 'footer',
                    yes: function () {
                        _this.data[index].list.splice(i, 1)
                        if (_this.data[index].list.length === 0)
                            _this.data.splice(index, 1, null)
                    }
                })
            },
            check: function (obj, parent) {
                if (obj.checked === true || obj.checked === null) {
                    obj.checked = false
                    this.checkedAll = false
                } else
                    obj.checked = true
                let list = obj.list
                if (list) {
                    list.forEach(function (item) {
                        item.checked = obj.checked
                    })
                } else {
                    if (obj.checked) { //查看parentlist是否全选中
                        if (this.isAllChecked(parent.list))
                            parent.checked = true
                        else
                            parent.checked = null
                    } else {
                        if (this.isAllUnChecked(parent.list))
                            parent.checked = false
                        else
                            parent.checked = null
                    }
                }
                //重新合计
                this.count()
            },
            checkAll: function () {
                let _this = this
                _this.checkedAll = !_this.checkedAll
                _this.data.forEach(function (shop) {
                    if (shop.checked !== _this.checkedAll) {
                        _this.check(shop)
                    }
                })
                _this.count()
            },
            count: function(){
                let count = 0
                let _this = this
                let list = []
                _this.data.forEach(function (shop) {
                    if(shop.checked !== false) {
                        list = shop.list
                        list.forEach(function(item){
                            if(item.checked)
                                count += Number(item.price)
                        })
                    }
                })
                _this.total = count
            },
            isAllChecked: function (list) {
                let flg = true
                for (let i = 0, l = list.length; i < l; i++) {
                    if (!list[i].checked) {
                        flg = false
                        break
                    }
                }
                return flg
            },
            isAllUnChecked: function (list) {
                let flg = true
                for (let i = 0, l = list.length; i < l; i++) {
                    if (list[i].checked) {
                        flg = false
                        break
                    }
                }
                return flg
            }
        },
        created() {
            let _this = this
            _this.$layer({
                type: 2,
                shade: false
            })
            //组件创建完成以后，查询当前登录用户的购物车记录
            //当前登录用户的id存在sessionStorage中
            let user = _this.$session('CURRENT_USER')
            if (user) {
                user = JSON.parse(user)
                let id = user.id
                //请求后台数据
                _this.$http.post('/static/data/cart.json').then(function (response) {
                    _this.data = response.body
                }, function (response) {
                    console.error(response.body)
                })
            } else {
                //跳转到登录页面
                //this.$router.push({ path: '/user/zone' })
            }
            _this.$http.get('/static/data/cart.json').then(function (response) {
                _this.data = response.body
                setTimeout(function () {
                    _this.$layer(false)
                }, 1000)
            }, function (response) {
                console.error(response.body)
            })
        }
    }
</script>