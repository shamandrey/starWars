<template>
    <el-container>
        <el-aside style="width: 200px; height: 200px;">
            <Avatar class="avatar" :url="url"></Avatar>
        </el-aside>
        <el-container>
            <el-header>{{textHeader}}</el-header>
            <el-main>
                <Property :dataConfig="dataConfig" :rowConfig="rowConfig"></Property>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Property from "./Property";
    import Avatar from "./Avatar";

    export default {
        name: "Card",
        components: {
            Avatar: Avatar,
            Property: Property
        },
        props: ['config'],

        computed: {
            url: function(){
                return this.config ? this.config.url : ''
            },
            textHeader: function(){
                return this.config ? this.config.title : ''
            },
            dataConfig: function(){
                return this.config ? this.config.data : {};
            },
            rowConfig: function(){
                return this.config ? this.config.rowConfig : {};
            },

        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: left;
        line-height: 60px;
        font-size: 20pt;
        font-weight: bold;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        display: flex;
        text-align: center;
        justify-content: center;
    }

    .avatar {

        width: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: left;
        line-height: 30px;
    }
</style>