<template>
        <div class="advert">
            <a class="wrap-block" :href="prop.url">
                <img v-lazy="prop.img">
            </a>
        </div>
    </template>

<script>
    module.exports = {
        props: ['prop'],
        data(){
            return {
            }
        },
        created () {
            let _this = this
            // setTimeout(function() {
            //     _this.src = _this.prop.img
            // }, 5000);
        }
    }
</script>