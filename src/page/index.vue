<template>
  <div class="index">
      <n3-top></n3-top>
      <div class="divider divider5"></div>
      <n3-slider :slider="slider"></n3-slider>
      <n3-nav></n3-nav>
  </div>
</template>

<script>
    module.exports = {
        data() {
            return {

            }
        },
        computed: {
            slider() { //传递给slider组件的数据，如果url === null, 则直接填充数据data，反之则通过url地址以及param去请求后台获取
                return {
                    url: null,
                    param: null,
                    data: [{
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }]
                }
            }
        }
    }
</script>