<template>
    <tr>
        <td>{{ leagueTableTeam.overall_league_position }}</td>
        <td>{{ leagueTableTeam.team_name }}</td>
        <td>{{ leagueTableTeam.overall_league_payed }}</td>
        <td>{{ leagueTableTeam.overall_league_W }}</td>
        <td>{{ leagueTableTeam.overall_league_D }}</td>
        <td>{{ leagueTableTeam.overall_league_L }}</td>
        <td>{{ leagueTableTeam.overall_league_GF }}</td>
        <td>{{ leagueTableTeam.overall_league_GA }}</td>
        <td>{{ leagueTableTeam.overall_league_PTS }}</td>
    </tr>
</template>
<script>
export default {
    name: "LeagueTable" ,
    props: [
        "leagueTableTeam",
    ]
    
}
</script>
<style scoped>
td  {
  padding: 5px 20px;
  text-align: center;
}
 th, td {
    border-bottom: 1px solid #ddd;
}
</style>
