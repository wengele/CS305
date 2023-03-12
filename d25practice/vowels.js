function vowelsCount(string) {
    let count = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const chr of string) {
        if (vowels.includes(chr)) {
            count[chr]++
        }
    }
    return count;

}

console.log(vowelsCount("what a day"));