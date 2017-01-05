<template>
    <div class="detail">
        <n3-top></n3-top>
        <n3-advert :prop="advert[0]"></n3-advert>
        <n3-advert :prop="advert[1]"></n3-advert>
        <n3-advert :prop="advert[2]"></n3-advert>
        <n3-advert :prop="advert[0]"></n3-advert>
        <n3-advert :prop="advert[1]"></n3-advert>
        <n3-advert :prop="advert[2]"></n3-advert>
        <n3-advert :prop="advert[0]"></n3-advert>
        <n3-advert :prop="advert[1]"></n3-advert>
        <n3-advert :prop="advert[2]"></n3-advert>
        <n3-advert :prop="advert[0]"></n3-advert>
        <n3-advert :prop="advert[1]"></n3-advert>
        <n3-advert :prop="advert[2]"></n3-advert>
        <n3-advert :prop="advert[0]"></n3-advert>
        <n3-advert :prop="advert[1]"></n3-advert>
        <n3-advert :prop="advert[2]"></n3-advert>
    </div>    
</template>

<script>
    module.exports = {
computed: {
            advert() {
                return [{
                    url: '#',
                    img: '/static/images/slider.gif',
                    text: '卖水果了'
                }, {
                    url: '#',
                    img: '/static/images/slider.gif',
                    text: '卖酱油了'
                }, {
                    url: '#',
                    img: '/static/images/slider.gif',
                    text: '卖冬瓜了'
                }]
            }
        }
    }
</script>