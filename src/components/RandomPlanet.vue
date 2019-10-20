<template>
    <div v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </div>
    <Card v-else :config="paramsPlanet"></Card>
</template>

<script>
    import Card from "./card/Card";
    import {randomInteger} from "../util/random"

    export default {
        name: "RandomPlanet",

        components: {Card},

        data(){
            return {
                paramsPlanet: {},
                countPlanet: 0,
                errored: false
            }
        },

        mounted() {
            this.queryRandomPlanet();
            this.startInterval();
        },

        beforeDestroy () {
            clearInterval(this.interval)
        },

        methods: {
            startInterval() {
                this.interval = setInterval(this.queryRandomPlanet, 10000);
            },

            queryRandomPlanet(){
                this.axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
                if (this.countPlanet) {
                    const randomIndex = randomInteger(0, this.countPlanet)
                    this.axios.get(`https://swapi.co/api/planets/${randomIndex}/`)
                        .then(response => {
                            this.paramsPlanet = {
                                url: `https://starwars-visualguide.com/assets/img/planets/${randomIndex}.jpg`,
                                title: response.data.name,
                                data: response.data,
                                rowConfig: [
                                    {
                                        text: 'Population',
                                        dataIndex: 'population'
                                    },
                                    {
                                        text: 'Rotation Period',
                                        dataIndex: 'rotation_period'
                                    },
                                    {
                                        text: 'Diameter',
                                        dataIndex: 'diameter'
                                    }
                                ]
                            }
                            this.errored = false;
                        })
                       .catch(this.onError)

                } else {
                    this.axios
                        .get(' https://swapi.co/api/planets')
                        .then(response => {
                            this.countPlanet = response.data.count
                        })
                        .catch(this.onError)
                }
            },

            onError(error) {
                console.log(error);
                this.errored = true;
            }
        }
    }
</script>

<style scoped>

</style>