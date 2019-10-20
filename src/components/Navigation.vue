<template>
    <nav>
    <el-menu
            :router="true"
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item :route="{name:'people'}" index="1">People</el-menu-item>
        <el-menu-item :route="{name:'planets'}" index="2">Planets</el-menu-item>
        <el-menu-item :route="{name:'starships'}" index="3">StarSips</el-menu-item>

    </el-menu>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>