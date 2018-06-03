<template>
<div class="container">
  <div class="area-left"></div>
  <div class="site-header">Football Scores</div>
  <div class="area-rights"></div>
  <div class="site-menu">
    <ul>
      <Countries v-for="(country, index)  in countriesList" :key="index" :country="country" :index="index" :apiKey="apiKey"></Countries>
    </ul>
  </div>
  <div class="site-wrapper">
    <table class="leagueTable" >
      <thead>
        <tr v-if="tableShow">
          <th></th>
          <th>Druzyna</th>
          <th>M</th>
          <th>Z</th>
          <th>R</th>
          <th>P</th>
          <th>BZ</th>
          <th>BS</th>
          <th>P</th>
        </tr>
      </thead>
      <tbody>
        <LeagueTable  v-for="(leagueTableTeam, index) in leagueTableList" :key="index" :leagueTableTeam="leagueTableTeam">
        </LeagueTable>
      </tbody>
    </table>
  </div>
  <div class="site-footer">site-footer</div>
</div>

</template>

<script>
import axios from "axios";
import Countries from "./components/Countries.vue"
import LeagueTable from "./components/LeagueTable.vue"
import Bus from "./Bus";

export default {
  name: 'App',
  components: {
    Countries,
    LeagueTable,
  },
  props: {
    apiKey : String
  },
  data() {
    return {
      countriesList: [],
      leagueTableList: [],
      leagueIdent: 0,
      tableShow: false,
    }
  },
  created() {
    axios.get(`https://apifootball.com/api/?action=get_countries&APIkey=${this.apiKey}`)
    .then (res => this.countriesList = res.data)
    .catch (err => console.log(err))

    Bus.$on("leagueTeableId", this.leagueTebleID );
  },
  methods: {
    leagueTebleID(value) {
      this.leagueIdent = value;
      this.tableShow= true;
      axios.get(`https://apifootball.com/api/?action=get_standings&league_id=${this.leagueIdent}&APIkey=${this.apiKey}`)
      .then (res => this.leagueTableList = res.data)
      .catch (err => console.log(err));

    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-column-gap: 0px;
  grid-template-columns: auto 300px 900px auto;
  font-family: 'Titillium Web', sans-serif;
}
.area-left {
  grid-column: 1;
  grid-row: 2/ span 3;
}
.site-header {
  grid-column: 1 / span 4;
  grid-row: 1;
  background: linear-gradient(#083c5d 95% , white );  
  height: 100px;
  padding: 25px 25%;
  color: white;
  font-size: 50px;
  font-weight: bolder
}
.area-rights {
grid-column: 4;
grid-row: 2/ span 3;
}
.site-menu {
  grid-column: 2;
  grid-row: 2;
  height: 700px;
  padding: 15px;
}
.site-wrapper {
  grid-column: 3;
  grid-row: 2;
  padding: 15px;
}
.site-footer {
  grid-column: 2;
  grid-row: 3
}
tabela, td, th  {
  text-align: center;
    padding: 5px 20px;
    border-collapse: collapse
}
tr:hover {
  background-color: #f5f5f5;
  }
</style>
