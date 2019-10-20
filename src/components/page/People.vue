<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <Table :loading="loading" :columns="
                [
                    {
                        type: 'index',
                        width:'50'
                    },
                    {
                        label: 'Peron Name',
                        property: 'name'
                    }
                ]"
                           :tableData="tableData"></Table>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <Card :config="paramsPeople"></Card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Table from "../list/Table"
    import Card from "../card/Card"
    import {eventTableBus} from "../list/Table"

    export default {
        name: "People",
        components: {Card, Table},

        data() {
            return {
                tableData: [],
                paramsPeople: {},
                errored: false,
                loading: false
            }
        },

        created() {
            eventTableBus.$on('selectrow', this.onSelect)
        },

        mounted() {
            this.loading = true
            this.axios
                .get('https://swapi.co/api/people/')
                .then(response => {
                    this.tableData = response.data.results
                    this.errored = true
                    this.loading = false
                })
                .catch(this.onError)
        },

        methods: {
            onSelect(select) {
                const idPers = select[0].url.split('/').filter(v => v).pop()
                this.paramsPeople = {
                    url: `https://starwars-visualguide.com/assets/img/characters/${idPers}.jpg`,
                    title: select[0].name,
                    data: select[0],
                    rowConfig: [
                        {
                            text: 'Gender',
                            dataIndex: 'gender'
                        },
                        {
                            text: 'Eye Color',
                            dataIndex: 'eye_color'
                        }
                    ]
                }
            },
            onError(error) {
                console.log(error)
                this.errored = true
                this.loading = false
            }
        },

        beforeDestroy() {
            eventTableBus.$off('selectrow', this.onSelect)
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>
