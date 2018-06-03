<template>
    <li class="league" @click="leagueTableLoad()">{{ league.league_name }}</li>
</template>
<script>
import axios from "axios";
import Bus from "../Bus";
export default {
    name: 'Leagues',
    props: [
        'league'
    ],
    data() {
        return {
            leagueIdent : 0,
            leagueTableList: []
        }
    },
    methods: {
        leagueTableLoad() {
            this.leagueIdent = this.league.league_id;
            Bus.$emit("leagueTeableId", this.leagueIdent)
        }     
    }
    
}
</script>
<style>
.league {
    padding-left: 13px;
    font-size: 80%;
    cursor: pointer;
}
</style>
