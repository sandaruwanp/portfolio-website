const NUMERALS: [number, string][] = [
    [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"],
];

export function toRoman(n: number): string {
    let value = n;
    let result = "";
    for (const [num, symbol] of NUMERALS) {
        while (value >= num) {
            result += symbol;
            value -= num;
        }
    }
    return result + ".";
}
