//Valid anagram
/**
 * @param {s} string
 * @param {t} string
 * @return {boolean}
 */
{
    const case1 = { s: "anagram", t: "margana" };
    function isAnagram(params) {
        const s = params.s;
        const t = params.t;
        if (s.length !== t.length) {
            return false;
        }
        let sArr = s.split('');
        let tArr = t.split('');
        sArr.sort();
        tArr.sort();
        return sArr.join('') === tArr.join('');
    }
    console.log(isAnagram(case1));
}
