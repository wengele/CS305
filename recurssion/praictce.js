
let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


function sumsalary(depratment) {
    //let avg;
    let sum = 0;
    if (Array.isArray(depratment)) {
        for (let i = 0; i < depratment.length; i++)
            sum += depratment[i].salary;
    } else {
        for (let dep in depratment) {
            sum += sumsalary(depratment[dep]);

        }

    }
    return sum;
}
console.log(sumsalary(company));

function avgdepatrment(company) {
    let sum = 0;
    let result = {}
    for (let department in company) {
        let departm = company[department];
        if (Array.isArray(departm)) {
            for (let value of departm) {
                sum += value.salary;
            }
            result[department] = sum / departm.length;
        } else {
            let subsumt = avgdepatrment(departm);
            result = { ...result, ...subsumt };
        }

    }
    return result;
}
console.log(avgdepatrment(company));

function maxdep(company) {
    let result = {};
    for (let department in company) {
        let dept = company[department];
        if (Array.isArray(dept)) {

            let maxsalary = Math.min(...dept.map(item => item.salary));
            result[department] = maxsalary;

        } else {
            let sumsrub = maxdep(dept);
            result = { ...result, ...sumsrub };
            // Object.assign(result,sumsrub);
        }
    }
    return result;
}

console.log(maxdep(company));