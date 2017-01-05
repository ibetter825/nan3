<template>
        <div class="advert">
            <a class="wrap-block" v-lazy="prop.img" :href="prop.url">
                <img>
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