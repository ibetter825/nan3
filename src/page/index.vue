<template>
  <div class="index">
        <ul class="top pd10 bg-white">
          <li class="logo f18">南山网</li>
          <li>
              <a class="wrap-block" href="">
                  <i class="iconfont icon-36"></i>
              </a>
          </li>
          <li class="search-container relative">
              <p class="f12">
                  <i class="iconfont icon-sousuo f12"></i>
                  <span>搜索</span>
              </p>
          </li>
      </ul>
        <div class="divider divider5"></div>
        
          <n3-slider :slider="slider"></n3-slider>
          <n3-nav></n3-nav>
          <div class="divider"></div>
          <n3-ad></n3-ad>
          <div class="divider"></div>
          <n3-widget-list></n3-widget-list>
          <div class="divider"></div>
          <n3-widget-card></n3-widget-card>
          <n3-widget-bulk></n3-widget-bulk>
        
        <div class="divider"></div>
        <div class="divider divider5"></div>
        <n3-footer></n3-footer>
  </div>
</template>

<script>
    import slider from '../components/slider.vue'
    import nav from '../components/nav.vue'
    import ad from '../components/ad.vue'
    import widgetList from '../components/widgetList.vue'
    import widgetCard from '../components/widgetCard.vue'
    import widgetBulk from '../components/widgetBulk.vue'
    import footer from '../components/footer.vue'
    module.exports = {
        data() {
            return {

            }
        },
        components: {
            'n3-slider': slider,
            'n3-nav': nav,
            'n3-ad': ad,
            'n3-widget-list': widgetList,
            'n3-widget-card': widgetCard,
            'n3-widget-bulk': widgetBulk,
            'n3-footer': footer
        },
        computed: {
            slider() {
                return {
                    data: [{
                        url: '#',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '#',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '#',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '#',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '#',
                        img: '/static/images/slider.gif'
                    }]
                }
            }
        }
    }
</script>