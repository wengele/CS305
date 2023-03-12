const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];

function dailytotal(donations) {
    let totalAmount = 0;
    for (let i = 0; i < donations.length; i++) {
        totalAmount += donations[i].amount;
    }

    return totalAmount;
}

function totalDonationsReduce(dailyRecord) {
    return dailyRecord.reduce((acc, curr) => acc + curr.donations.length, 0);
}
function totalDonations(dailyrecord) {
    let sum = 0;
    for (let i = 0; i < dailyrecord.length; i++) {
        const day = dailyrecord[i];
        const dayTotal = dailyTotal(day.donations);
        sum += dayTotal;
    }
    return sum;
}
function daiyTotal(donations) {

    let sum = 0;

    for (let i = 0; i < donations.length; i++) {

        sum += donations[i].amount;

    }

    return sum;

}

/*function totalDonations(dailyRecord) {

    return dailyRecord.reduce((sum, current) => sum + current.donations, 0);
}*/

function averageDonation(dailyRecord) {
    const averages = {};
    for (let i = 0; i < dailyRecord.length; i++) {

        const day = dailyRecord[i];

        const dayTotal = dailyTotalReduce(day.donations);
        const average = dayTotal > 0 ? dayTotal / day.donations.length : 0;
        averages[day.date] = average;
    }

    return averages;
}
console.log("expect 55: ", averageDonation(day1));






