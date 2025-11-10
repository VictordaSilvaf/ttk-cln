// src/utils/formatInstallment.ts
import { priceFormt } from "./priceFormat";

export function formatInstallment(count: number, value: number, interestFree: boolean): string {
    const formatted = priceFormt(value);
    const juros = interestFree ? "sem juros" : "com juros";
    return `${count}x ${formatted} ${juros}`;
}