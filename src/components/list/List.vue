<template>
    <el-table
            v-loading="loading"
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @row-click="onSelect"
            @current-change="handleCurrentChange"
            style="width: 100%">
        <el-table-column v-for="(column, index) in columns" :key="index"
                :type="column.type"
                :width="column.width"
                :property="column.property ? column.property : ''"
                :label="column.label ">
        </el-table-column>
    </el-table>
</template>

<script>
    import {eventTableBus} from "./Table";

    export default {
        name: "List",
        props: [
            'columns',
            'tableData',
            'loading'
        ],
        data() {
            return {
                currentRow: null
            }
        },

        methods: {
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            onSelect () {
                eventTableBus.$emit('selectrow', arguments);
            }
        }
    }
</script>

<style scoped>

</style>