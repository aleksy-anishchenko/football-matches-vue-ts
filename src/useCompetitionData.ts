import { ref } from 'vue';
import { useCompetitionStore } from "@/competitionStore.ts";
import { formatDate } from "@/utils.ts";
import type { Filters, TCompetitionData, TMatch } from "@/types/types.ts";

export const useCompetitionData = () => {
    const store = useCompetitionStore()
    const currentMatch = ref<TMatch | null>(null)

    async function fetchCompetitionData(filters: Filters) {
        try {
            let url = `/api/v4/competitions/${filters.competition}/matches`

            const params = new URLSearchParams()

            if (filters.date) {
                const formatted = formatDate(filters.date)
                params.append("dateFrom", formatted)
                params.append("dateTo", formatted)
            }

            const query = params.toString()
            if (query) {
                url += `?${query}`
            }

            const response = await fetch(url, {
                headers: {
                    "X-Auth-Token": "35a54fdd83344a17bdf1a99dfc384df8",
                },
            })

            const data: TCompetitionData = await response.json()
            store.setCompetition(data.competition)
            store.setMatches(data.matches)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchMatchById(matchId: number) {
        try {
            const response = await fetch(`/api/v4/matches/${matchId}`, {
                headers: {
                    'X-Auth-Token': '35a54fdd83344a17bdf1a99dfc384df8',
                }
            })
            const data: TMatch = await response.json()
            currentMatch.value = data;
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        matches: store.matches,
        competition: store.competition,
        currentMatch,
        fetchCompetitionData,
        fetchMatchById,
    }
}