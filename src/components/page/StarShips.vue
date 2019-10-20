<template>
    <div>
        <Table :columns="
                [
                    {
                        type: 'index',
                        width:'50'
                    },
                    {
                        label: 'StarShip Name',
                        property: 'name'
                    }
                ]"
               :tableData="tableData"
                :loading="loading">

        </Table>
    </div>
</template>


<script>
    import Table from "../list/Table"
    import {eventTableBus} from "../list/Table"

    export default {
        name: "StarShips",
        components: {Table},
        data() {
            return {
                tableData: [],
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
                .get('https://swapi.co/api/starships/')
                .then(response => {
                    this.tableData = response.data.results
                    this.errored = true
                    this.loading = false
                })
                .catch(this.onError)
        },

        methods: {
            onSelect(select) {
                const idShip = select[0].url.split('/').filter(v => v).pop()
                console.log( this)
                this.$router.push({
                    name: 'starship',
                    params: {id: idShip}
                }).catch(this.onError);
            },
            onError(error) {
                console.log(error)
                this.errored = true
                this.loading = false
            }
        },

        beforeDestroy() {
            eventTableBus.$off('selectrow', this.onSelect)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
