<template>
  <div class="index">
      <n3-top></n3-top>
      <div class="divider divider5"></div>
      <section class="main">
        <n3-slider></n3-slider>
        <n3-nav></n3-nav>
        <div class="divider"></div>
        <n3-ad></n3-ad>
        <div class="divider"></div>
        <n3-widget-list></n3-widget-list>
        <div class="divider"></div>
        <n3-widget-card></n3-widget-card>
        <n3-widget-bulk></n3-widget-bulk>
      </section>
      <div class="divider"></div>
      <div class="divider divider5"></div>
      <n3-footer></n3-footer>
  </div>
</template>

<script>
    import top from '../components/top.vue'
    import slider from '../components/slider.vue'
    import nav from '../components/nav.vue'
    import ad from '../components/ad.vue'
    import widgetList from '../components/widgetList.vue'
    import widgetCard from '../components/widgetCard.vue'
    import widgetBulk from '../components/widgetBulk.vue'
    import footer from '../components/footer.vue'
    module.exports = {
        data(){
            return {}
        },
        components: {
          'n3-top': top,
          'n3-slider': slider,
          'n3-nav': nav,
          'n3-ad': ad,
          'n3-widget-list': widgetList,
          'n3-widget-card': widgetCard,
          'n3-widget-bulk': widgetBulk,
          'n3-footer': footer
        }
    }
</script>