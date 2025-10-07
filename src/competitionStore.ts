import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TCompetition, MatchesByDate } from "@/types/types.ts";

export const useCompetitionStore = defineStore('competitionStore', () => {
    const matches = ref<MatchesByDate>({})
    const competition = ref<TCompetition>()

    function setMatches(newMatches: MatchesByDate){
        matches.value = newMatches
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