
/*function bar(a1, a2, a3, a4) {
    if (a1 === true) {
        return a3(a2);
    } else {
        return a4(a2);
    }

}
function foo2() { }
console.log(bar(true, 1, fn1, fn2));
console.log(bar(false, 2, fn1, fn2));

function fn1(num) { return num + 100; }
function fn2(num) { return num * 10; }

foo2();*/
/*function foo(bat) {
    if (bat) {
        bat = console.log("bat");
        return bat;
    }
    const long = console.log("short");
    return long;
}
console.log(foo());
/*function myT(name, age) {
    this.name = name;
    this.age = age;
}
const tk = new myT("tk", 20);
console.log(tk);*/
/*const string = "1233 4345 3231";
const sortedString = string.split(" ").sort((a, b) => b - a).join(" ");
let st = "";
st + sortedString

what if we want to sort the 3rd elemt in asccdeing order.
console.log(st); // "1233 3231 4345"
*/

/*let bob = [{ fr: "t" }, { rt: "we" }]
let ned = [{ we: "t" }, { wr: "we" }]

function abc() {
    const arr = [];
    for (const elements of bob) {*/

const donation1 = { fund: 1, ammou: 100 };
const donation2 = { fund: 2, ammou: 10 };
const donation3 = { fund: 3, ammou: 1 };
const donation4 = { fund: 4, ammou: 5 };
const donation5 = { fund: 5, ammou: 15 };
const da1 = { donations: [donation1, donation2], date: "01/10/2022" };
const da2 = { donations: [donation3, donation4, donation5], date: "01/10/2022" };
const dailyrecord = [da1, da2];
//find the dailytotal



function dailytotal(donations) {
    let totalAmount = 0;
    for (let i = 0; i < donations.length; i++) {
        totalAmount += donations[i].ammou;
    }

    return totalAmount;
}




console.log(dailytotal(da1.donations));

/*function dailyTotalReduce(donations) {
    return { donations.reduce((total, current) => total + current.amount, 0); }
}*/

/*function totalDonations(dailyrecord) {
    let sum = 0;
    for (let i = 0; i < dailyrecord.length; i++) {
        const day = dailyrecord[i];
        const dayTotal = dailytotal(day.donations);
        sum += dayTotal;
    }
    return sum;
}*/

function averageDonation(day) {

    let total = 0;
    for (let i = 0; i < day.donations.length; i++) {
        total += day.donations[i].ammou;
    }
    return total / day.donations.length;
}



/*const numDonations = da1.donations.length;
const avgDonation = dailytotal(da1.donations) / numDonations;
return avgDonation;*/



console.log(averageDonation(da2));

/*function sortbyAverage(dailyrecord) {

    return dailyrecord.sort((a, b) => {
        const avgA = a.donations.reduce((total, current) => total + current.amount, 0);) / a.donations.length;
        const avgB=b.donations.reduce((total, current) => total + current.amount, 0);)/a.donations.length;
        return avgA - avgB;
    
}*/
function sortByAverage(arr) {

    return arr.sort((a, b) => {
        const A = averageDonation(a);
        const B = averageDonation(b);

        return A - B;
    });

}

console.log(sortByAverage(dailyrecord));




/*function findBigDonations(dailyRecord, maxAmount) {
    const bigDonations = [];
    for (let i = 0; i < dailyRecord.length; i++) {
        const day = dailyRecord[i];
        const dayTotal = dailytotal(day.donations);
        if (dayTotal > maxAmount) {
            bigDonations.push({ date: day.date, amount: dayTotal });
        }
    }
    return bigDonations;
}

console.log(findBigDonations(dailyrecord, 10));
let total = 0;
  for (const day of dailyRec) {
    for (const donation of day.donations) {
      if (donation.fund === funderId) {
        total += donation.ammou;
      }
    }
  }
  return total;
}
function funderTotals(dailyRec, funderId) {
  let total = 0;
  for (const day of dailyRec) {
    for (const donation of day.donations) {
      if (donation.fund === funderId) {
        total += donation.ammou;
      }
    }
  }
  return total;
}

*/
/**
 * 
 * @param {*array} dailyRecord 
 * @param {*number} funderId 
 * @returns{array} 
 */
function funderTotals(dailyrecord, funderId) {
    let result = [];
    for (let i = 0; i < dailyrecord.length; i++) {
        for (let j = 0; j < day.donations.length; j++) {
            if (donations.funderId === funderId)
                result.push(date.day.date, ammou: donation.ammou);
        }
        return result;

    }
}