export enum MatchStatus {
    SCHEDULED = "SCHEDULED",
    TIMED = "TIMED",
    IN_PLAY = "IN_PLAY",
    PAUSED = "PAUSED",
    FINISHED = "FINISHED",
    SUSPENDED = "SUSPENDED",
    POSTPONED = "POSTPONED",
    CANCELLED = "CANCELLED",
    AWARDED = "AWARDED",
}

export type FilterOption = {
    id: number
    name: string
    code: string
}

export type FilterOptionList = FilterOption[]

export type TTeam = {
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string
}

export type TCompetition = {
    id: number,
    name: string,
    code: string,
    type: string,
    emblem: string
}

export type TScore = {
    winner: string | null,
    duration: string,
    fullTime: {
        home: number | null,
        away: number | null
    }
}

export type TMatch = {
    id: number,
    utcDate: string,
    lastUpdate: string,
    status: MatchStatus,
    matchday: number,
    stage: string,
    group: string | null,
    homeTeam: TTeam,
    awayTeam: TTeam,
    competition: TCompetition,
    score: TScore
}

export type TCompetitionData = {
    competition: TCompetition,
    matches: TMatch[],
}