const data = require("./data.json");



const meanEffByEmp = (projectName,team) => {
    const devRows = data.filter((row) => row.Team.includes(team));
    const devWorking = devRows.filter(row => row["Project Name"].includes(projectName));
    let hours = 0;
    devWorking.forEach(row => hours+=parseInt(row.Hours));
    const meanEffort = hours/devWorking.length;
    return meanEffort.toFixed(2);   
}


console.log(meanEffByEmp("AAA","Design"));
// console.log(meanEffByEmp("BBB","Dev"));
// console.log(meanEffByEmp("CCC","Dev"));
// console.log(meanEffByEmp("CCC","PM"));
// console.log(meanEffByEmp("CCC","QA"));
// console.log(meanEffByEmp("CCC","Design"));