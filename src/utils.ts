import { MatchStatus } from "@/types/types.ts";

export function formatDate(date: Date): string {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
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