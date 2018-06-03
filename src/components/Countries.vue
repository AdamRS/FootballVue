<template>
<div class="countries">
    <li class="countryName" @click="leaguesListLoad()">{{ country.country_name }} </li>
    <leagues v-for="(league, index) in leaguesList" :key="index" :league="league" v-if="leagueShow"></leagues>
</div>
</template>
<script>
import axios from "axios";
import Leagues from "./Leagues.vue"
export default {
    name: 'Countries',
    components: {
        Leagues
    },
    props: [
    "index", "country", 'apiKey'
    ],
    data() {
        return  {
            leaguesList: [],
            countryIdent: 0,
            leagueShow: false,
        }
    },
    methods: {
        leaguesListLoad() {
            if (!this.leagueShow) {
                this.countryIdent= this.country.country_id;
                axios.get(`https://apifootball.com/api/?action=get_leagues&country_id=${this.countryIdent}&APIkey=${this.apiKey}`)
                .then (res => this.leaguesList = res.data)
                .catch (err => console.log(err));
                this.leagueShow = !this.leagueShow;
            }else {
                this.leagueShow = !this.leagueShow;

            }

        }
    },
    watch: {

    }
}
</script>
<style scoped>
.countries {
    list-style: none;
}
.countryName {
    cursor: pointer;
}
</style>
