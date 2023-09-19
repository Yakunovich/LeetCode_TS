//Valid anagram
/**
 * @param {s} string
 * @param {t} string
 * @return {boolean}
 */
{
type params = {s: string, t: string}

const case1: params = {s: "anagram", t: "margana"}

function isAnagram(params: params): boolean {
    const s = params.s
    const t = params.t
    if (s.length!== t.length) {
        return false;
    }
    let sArr = s.split('');
    let tArr = t.split('');
    sArr.sort();
    tArr.sort();
    return sArr.join('') === tArr.join('');

}
console.log(isAnagram(case1))
}

