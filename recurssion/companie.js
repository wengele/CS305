let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: {
            sitessubdep1: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
            sitessubdep2: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }]
        },
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};



/*function sumSalaries(company) {
    let sum = 0;
    for (let depart in company) {
        let department = company[depart];
        if (Array.isArray(department)) {
            sum += department.reduce((value, emp) => {
                return value + emp.salary
            }, 0);

        } else {
            sum += sumSalaries(department);
        }
    }
    return sum;
}
*/
function sumSalaries(company) {
    let sum = 0;

    // If obj is an array, iterate over it
    for (let depart in company) {
        let department = company[depart];
        if (Array.isArray(department)) {
            for (let i = 0; i < department.length; i++) {
                // If the current item has a name of 'John', add its salary to the sum
                if (department[i].name === 'John') {
                    sum += department[i].salary;
                }
            }
        }
        // If obj is an object, recurse over its properties

        else {
            sum += sumSalaries(department);
        }
    }


    return sum;
}

//console.log(sumSal(company));


console.log(sumSalaries(company));
//Get all the employee names;


function nameofemelployye(company) {

    if (Array.isArray(company)) {
        return company.map(item => item.name)
    }
    else {
        let array = [];
        for (let dep in company) {

            array.push(...nameofemelployye(company[dep]));

        }
        return array;
    }


}
console.log(nameofemelployye(company));

function nameofEmpgre(company) {
    if (Array.isArray(company)) {
        return company.filter(item => item.salary > 1000)
    }
    else {
        let array = [];
        for (let dep in company) {

            array.push(...nameofEmpgre(company[dep]));

        }
        return array;
    }
}
console.log(nameofEmpgre(company));
/*function empNames(company) {

    if (Array.isArray(company)) {

        return company.map(elem => elem.name);



    } else {

        // let sum = 0;

        let arr = [];

        for (let key in company) {

            arr.push(...empNames(company[key]));

        }




        return arr;

    }

}*/

function departmesalary(company, depname) {
    for (let depart in company) {

        if (depart === depname) {
            let dep = company[depart];
            if (Array.isArray(dep)) {
                return dep.filter(item => item > 500);
            }
            else {
                let sum = 0;
                for (let prop in dep) {
                    sum += departmentSalary(dep[prop], depname);
                }
                return sum;


            }
            return array;
        }

    }
}
console.log(departmesalary(company, 'development'));
function departmentSalary(company, depname) {
    for (let depart in company) {
        if (depart === depname) {
            let department = company[depart];
            if (Array.isArray(department)) {
                return department.reduce((sum, employee) => sum + employee.salary, 0);
            } else {
                let sum = 0;
                for (let prop in department) {
                    sum += departmentSalary(department[prop], depname);
                }
                return sum;
            }
        }
    }
}


//console.log(empNames(company));

