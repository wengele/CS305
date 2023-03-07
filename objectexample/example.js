
/*let student1 = {
    studentID: "s101",
    quizanswer: [1, 1, 2, 4]


};
let student2 = {
    studentID: "s102",
    quizanswer: [2, 1, 2, 2]


};
let student3 = {
    studentID: "s103",
    quizAnswers: [4, 1, 1, 4]


};
const quiz = [student1, student2, student3];
function gradequiz(quizArr, correctAnswer) {
    const score = [];
    for (let i = 0; i < quizArr; i++) {
        score.push(i.quizAnswers, correctAnswer);
    }
    return score;
}

function scorestudent(stud, correct) {
    const numCorrect = 0;
    for (let i = 0; i < correct.length; i++) {
        if (stud[i] === correct[i]) {
            numCorrect++;
        }
    }
    return numCorrect;
}*/
const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
}
const properties = ["one", "two", "three", "four"];

for (let element of properties) {

    console.log(numbers[element]);//

}