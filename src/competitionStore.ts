import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TCompetition, TMatch } from "@/types/types.ts";

export const useCompetitionStore = defineStore('competitionStore', () => {
    const matches = ref<TMatch[]>([])
    const competition = ref<TCompetition>()

    function setMatches(newMatches: TMatch[]){
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