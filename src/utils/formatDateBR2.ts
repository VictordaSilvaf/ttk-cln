// src/utils/formatDateBR.ts
export function formatDateBR(iso: string): string {
    const date = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Hoje";
    if (days === 1) return "Ontem";
    if (days < 7) return `Há ${days} dias`;
    return date.toLocaleDateString("pt-BR");
}