<template>
    <div>
        <Card :config="paramsShip"></Card>
    </div>
</template>
<script>

    import Card from "../card/Card"
    export default {
        name: "StarShip",
        components: {Card},

        data() {
            return {
                paramsShip: {},
                errored: false
            }
        },
        mounted() {
            const id = this.$route.params.id
            this.axios
                .get(`https://swapi.co/api/starships/${id}`)
                .then(response => {
                    this.paramsShip = {
                        url: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
                        title: response.data.name,
                        data: response.data,
                        rowConfig: [
                            {
                                text: 'Model',
                                dataIndex: 'model'
                            },
                            {
                                text: 'Length',
                                dataIndex: 'length'
                            },
                            {
                                text: 'Cost',
                                dataIndex: 'cost_in_credits'
                            }
                        ]
                    }
                    this.errored = true
                })
                .catch(this.onError)
        },

        methods: {
            onError(error) {
                console.log(error)
                this.errored = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
