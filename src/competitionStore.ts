import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TCompetition, TMatch } from "@/types/types.ts";

export const useCompetitionStore = defineStore('competitionStore', () => {
    const matches = ref<TMatch[]>([])
    const competition = ref<TCompetition>()

    function setMatches<T>(newMatches: TMatch[]) :T {
        matches.value = newMatches
        return '' as T;
    }

    function setCompetition(newCompetition: TCompetition) {
        competition.value = newCompetition
    }

    return {
        matches,
        competition,
        setMatches,
        setCompetition,
    }
})