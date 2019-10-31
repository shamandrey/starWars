<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <Table :loading="loadingTable" :columns="
                [
                    {
                        type: 'index',
                        width:'50'
                    },
                    {
                        label: 'Planet Name',
                        property: 'name'
                    }
                ]"
                           :tableData="tableData">

                    </Table>
                </div>
            </el-col>

            <el-col :span="12">
                <el-row v-for="(personConfig, index) in people" :key="index">
                    <div class="grid-content bg-purple-light">
                        <Card class="card"  :config="personConfig"></Card>
                    </div>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    import Table from "../list/Table"
    import Card from "../card/Card"
    import {eventTableBus} from "../list/Table"

    export default {
        name: "Planets",
        components: {Card, Table},

        data() {
            return {
                tableData: [],
                people: [],
                errored: false,
                loadingTable: false,
                loadingCards: false
            }
        },

        created() {
            eventTableBus.$on('selectrow', this.onSelect)
        },

        mounted() {
            this.loadingTable = true
            this.axios
                .get('https://swapi.co/api/planets/')
                .then(response => {
                    this.tableData = response.data.results
                    this.errored = true
                    this.loadingTable = false
                })
                .catch(this.onError)
        },

        methods: {
            onSelect(select) {
                const data = select[0]

                this.loadingCards = true

                this.axios.all(data.residents.map(v => {
                    return this.axios.get(v)
                }))
                    .then(response => {
                        this.loadingCards = false
                        this.people = response.map(v => {
                            const idPers = v.data.url.split('/').filter(v => v).pop()
                            return {
                                url: `https://starwars-visualguide.com/assets/img/characters/${idPers}.jpg`,
                                title: v.data.name,
                                data: v.data,
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
                        })
                    })
                    .catch(e => {
                        this.loadingCards = false
                        console.log(e)
                    })
            },
            onError(error) {
                console.log(error)
                this.errored = true
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
    .card {
        margin-top: 10px;
    }

    .el-col {
        border-radius: 4px;
    }
</style>
