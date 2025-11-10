// src/utils/formatNumber.ts
export function formatNumber(num: number): string {
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1).replace(".", ",")} mil`;
    }
    return num.toString();
}