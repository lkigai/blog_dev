<template>
    <div id="box">
        {{ msg }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '林善的小窝！'
        }
    }
}
</script>

<style lang="scss" scoped>
#box{
    font-size: 22px;
    color: #409EFF;
}
</style>