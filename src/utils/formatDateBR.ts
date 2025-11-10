// src/utils/formatDateBR.ts
export function formatDateBR(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
    });
}