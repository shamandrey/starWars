<template>
    <List :columns="columns" :table-data="tableData" :loading="loading"></List>
<!--    Компонент будет объеденять в себе таблицу и пагинатор есле заморочусь)-->
</template>

<script>
    import Vue from 'vue'
    export const eventTableBus = new Vue();
    import List from "./List";
    export default {
        name: "Table",
        components: {List},
        comments: {
            List: List
        },
        props: [
            'columns',
            'tableData',
            'loading'
        ]
    }
</script>

<style scoped>

</style>