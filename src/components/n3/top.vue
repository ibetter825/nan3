<template>
    <ul :class="'top pd10 '+ clz">
        <slot name="left"></slot>
        <slot name="right"></slot>
        <slot name="center"></slot>
    </ul>
</template>

<script>
    module.exports = {
        props: ['prop'],
        computed: {
            clz(){
                let c = 'bg-white'
                if(this.prop && this.prop.clz)
                    c = this.prop.clz
                return c
            }
        }
    }
</script>