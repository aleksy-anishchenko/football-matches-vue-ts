import { ref } from 'vue';
import { useCompetitionStore } from "@/competitionStore.ts";
import type { TCompetitionData } from "@/types/types.ts";


export const useCompetitionData = () => {
    const store = useCompetitionStore()
    const currentMatch = ref(null);

    async function fetchCompetitionData() {
        try {
            const response = await fetch('/api/v4/competitions/CL/matches', {
                headers: {
                    'X-Auth-Token': '35a54fdd83344a17bdf1a99dfc384df8',
                }
            })
            const data: TCompetitionData = await response.json()
            store.setCompetition(data.competition)
            store.setMatches<string>(data.matches)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchMatchById(id: string) {
        try {
            const response = await fetch(`/api/v4/matches/${id}`, {
                headers: {
                    'X-Auth-Token': '35a54fdd83344a17bdf1a99dfc384df8',
                }
            })
            const data = await response.json()
            currentMatch.value = data;
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        matches: store.matches,
        competition: store.competition,
        currentMatch: currentMatch,
        fetchCompetitionData,
        fetchMatchById,
    }
}