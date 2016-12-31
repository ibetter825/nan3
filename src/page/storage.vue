<template>
    <div>
      <div>
        <button class="btn" @click="setLs" type="button">设置 local storage</button>
      </div>
      <div>
        <button @click="getLs" type="button">获取 local storage</button>
      </div>
      <div>
        <button @click="delLs" type="button">删除 local storage</button>
      </div>
      <br/>
      <div>
        <button class="btn" @click="setSs" type="button">设置 session storage</button>
      </div>
      <div>
        <button @click="getSs" type="button">获取 session storage</button>
      </div>
      <div>
        <button @click="delSs" type="button">删除 session storage</button>
      </div>
      <br/>
      <div>
        <button class="btn" @click="setCk" type="button">设置 cookie</button>
      </div>
      <div>
        <button @click="getCk" type="button">获取 cookie</button>
      </div>
      <div>
        <button @click="delCk" type="button">删除 cookie</button>
      </div>
    </div>
</template>
<script>
    //layer弹出层
    module.exports = {
        data() {
            return {
                layer: {
                    show: false //初始化设置为false,可异步加载该组件
                }
            }
        },
        computed: {

        },
        methods: {
            setLs: function() {
                this.$local('test', 'local test')
            },
            getLs: function() {
                alert(this.$local('test'))
            },
            delLs: function() {
                this.$local('test', null)
            },
            setSs: function() {
                this.$session('test', 'session test')
            },
            getSs: function() {
                alert(this.$session('test'))
            },
            delSs: function() {
                this.$session('test', null)
            },
            setCk: function() {
                this.$cookie('test', 'cookie test', 1)
            },
            getCk: function() {
                alert(this.$cookie('test'))
            },
            delCk: function() {
                this.$cookie('test', null)
            }
        }
    }
</script>