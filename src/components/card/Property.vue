<template>
    <div >
        <div v-for="(item, index) in rowConfig" :key="index" class="text item">
            <span class="key">{{item.text}}</span>:
            <span class="property">{{dataConfig[item.dataIndex]}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Property",
        props: [
            'rowConfig',
            'dataConfig'
        ]
    }
</script>

<style scoped>
    .key {
        font-size: 14pt;
    }
    .property {

    }
    .text {
        font-size: 14px;
    }
</style>