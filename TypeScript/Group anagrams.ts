//Group anagrams
/**
 * @param {strs} string[]
 * @return {string[][]} 
 */
{
    const case1: string[] = ["eat","tea","tan","ate","nat","bat"];

/**    
 * function groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sortedStr = str.split('').sort().join('');
            if (result[sortedStr]) {
                result[sortedStr].push(str);
            } else {
                result[sortedStr] = [str];
            }
        }
        return [...Object.keys(result).map(key => result[key])];
    } */ 
    function groupAnagrams(strs: string[]): string[][] {
        let result: Map<string,string[]> = new Map();
        strs.forEach(str => {
            let sortedStr = str.split('').sort().join('');
            if (result.has(sortedStr)) {
                result.get(sortedStr).push(str);
            } else {
                result.set(sortedStr, [str]);
            }
        });
        return Array.from(result.values());
    }
    console.log(groupAnagrams(case1));
}