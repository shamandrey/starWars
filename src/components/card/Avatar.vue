<template>
    <el-image fit="scale-down" class="err"  :src="url" @error="onLoadImgErr" @load="onLoadImg">
        <div v-if="loadImageError" slot="error">
            <el-image  src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg"></el-image>
        </div>
    </el-image>
</template>

<script>
    export default {
        name: "Avatar",
        props: ['url'],
        data () {
            return {
                loadImageError: undefined
            }
        },
        methods: {
            onLoadImgErr() {this.loadImageError = true} ,
            onLoadImg() {this.loadImageError = false}
        }
    }
</script>

<style scoped>

    .el-image {
        border-radius: 10px;
        margin: 10px;
    }
    .err {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>