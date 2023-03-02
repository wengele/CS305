



export function isVowel(chr) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === chr) {
            return true;
        }
    }
}
