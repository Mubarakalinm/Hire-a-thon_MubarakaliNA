const data = require("./data.json");

const lowEffi = () => {

    const empList = [];

    data.forEach(row => {
        if(!empList.includes(row.Owner)){
            empList.push(row.Owner);
        }
    });

    const empHours = [];
    empList.forEach(row => {
        empHours.push({
            EmployeeName : row,
            Efficiency: noOfWorkingHours(row),
        });
    });

    return empHours;

}

const noOfWorkingHours = (employee) => {

    let hours = 0;
    const empHours = data.filter(row => row.Owner.includes(employee));
    empHours.forEach(row => hours+=parseInt(row.Hours));
    return hours;

};

const compare = ( a, b ) => {
    if ( a.efficiency < b.efficiency ){
      return -1;
    }
    if ( a.efficiency > b.efficiency ){
      return 1;
    }
    return 0;
}

const lowestUtil = (noOfRows) => {
    
    const empHours = lowEffi();
    const temp = empHours.sort(compare);
    const lowesteff = temp.slice(1,noOfRows);
    return lowesteff;

}

console.log(lowestUtil(6));