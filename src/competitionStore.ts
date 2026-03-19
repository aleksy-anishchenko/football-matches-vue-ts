import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TCompetition, MatchesByDate } from "@/types/types.ts";

export const useCompetitionStore = defineStore('competitionStore', () => {
    const matches = ref<MatchesByDate>({})
    const competition = ref<TCompetition | null>(null)

    const hasMatches = computed(() =>
        Object.values(matches.value).some(day => day.length)
    )

    const hasCompetition = computed(() =>
        !!competition.value && !!competition.value.id
    )

    function setMatches(newMatches: MatchesByDate){
        matches.value = newMatches
    }

    function setCompetition(newCompetition: TCompetition | null) {
        competition.value = newCompetition
    }

    return {
        matches,
        competition,
        hasMatches,
        hasCompetition,
        setMatches,
        setCompetition,
    }
})