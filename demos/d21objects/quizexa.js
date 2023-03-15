const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];

/*function flater(dailyRecord) {
    let result = [];
    for (const day of dailyRecord) {
        for (const donate of day.donations) {
            result.push([{ Date: day.date, Id: donate.funderId, amount: donate.amount }]);
        }
    }
    return result;
}
console.log(flater(dailyRecord));*/
/*function dailytotal(day) {
    let sum = 0;
    for (const elemnt of day.donations) {
        sum += elemnt.amount;
    }
    return sum;

}
console.log(dailytotal(day2));*/
function dailytotal(x) {

    return x.reduce((sum, current) => sum + current.amount, 0)
}
console.log(dailytotal(day1.donations));

/*function totalDonation(dailyRecord) {
    let sum = 0;

    for (const day of dailyRecord) {
        sum += dailytotal(day.donations);
    }
    return sum;

}
console.log(totalDonation(dailyRecord));
*/
/*function totalDonation(dailyRecord) {
    return dailyRecord.reduce((sum, day) => sum + day.donations.amount);
}
console.log(totalDonation(dailyRecord));*/

function averdon(day1) {
    let sum = 0;
    for (const elemnt of day1.donations) {
        sum += elemnt.amount;
    }
    let avg = sum / day1.donations.length;
    return avg;
}
console.log(averdon(day1));

function findBigDonatiss(dailyRecord, max) {
    let result = [];

    for (const day of dailyRecord) {
        for (const donate of day.donations) {
            if (max < donate.amount) {
                max = donate.amount;

            }
        }
        result.push({ Date: day.date, amount: max });
    }
    return result;
}
console.log(findBigDonatiss(dailyRecord, 10));


