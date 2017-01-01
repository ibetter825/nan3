<template>
        <div class="ad">
            <a class="wrap-block" :href="prop.url">
                <img :src="prop.img" :alt="prop.text">
            </a>
        </div>
    </template>

<script>
    module.exports = {
        props: ['prop']
    }
</script>