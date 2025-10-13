import { MatchStatus } from "@/types/types.ts";
import type { TMatch, MatchesByDate } from "@/types/types.ts";

export function formatDate(date: Date): string {
    const FullYear = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${FullYear}-${month}-${day}`
}

export function formatReadableDate(dateString: string): string {
    const date = new Date(dateString);
    const formatted = date.toLocaleDateString('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatTime(isoString: string): string {
    const date = new Date(isoString)
    return date.toLocaleTimeString('ru-RU', {
        timeZone: 'Europe/Moscow',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
}

const MatchStatusText: Record<MatchStatus, string> = {
    [MatchStatus.SCHEDULED]: "Запланирован",
    [MatchStatus.TIMED]: "Назначен",
    [MatchStatus.IN_PLAY]: "Идёт",
    [MatchStatus.PAUSED]: "Перерыв",
    [MatchStatus.FINISHED]: "Завершён",
    [MatchStatus.SUSPENDED]: "Приостановлен",
    [MatchStatus.POSTPONED]: "Перенесён",
    [MatchStatus.CANCELLED]: "Отменён",
    [MatchStatus.AWARDED]: "Присужден",
};

export function formatStatus(status: MatchStatus): string {
    return MatchStatusText[status];
}

export function groupMatchesByDate(matches: TMatch[]): MatchesByDate {
    const groupedMatches: MatchesByDate = {};

    matches.forEach((match) => {
        const date = new Date(match.utcDate).toISOString().split("T")[0];
        if (!groupedMatches[date]) {
            groupedMatches[date] = [];
        }
        groupedMatches[date].push(match);
    });

    return groupedMatches;
}