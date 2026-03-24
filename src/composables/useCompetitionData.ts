import { ref } from 'vue';
import { useCompetitionStore } from "@/stores/competitionStore.ts";
import { formatDate, groupMatchesByDate } from "@/utils.ts";
import type { MatchSearchFilters, TCompetitionData, TMatch } from "@/types/types.ts";
import { refreshTokenRequest } from "@/api/authApi.ts";
import { useAuthStore } from '@/stores/authStore.ts';

export const useCompetitionData = () => {
    const store = useCompetitionStore()
    const authStore = useAuthStore()
    const currentMatch = ref<TMatch | null>(null)

    async function fetchCompetitionData(filters: MatchSearchFilters) {
        try {
            const refreshData = await refreshTokenRequest(authStore.refreshToken!);

            authStore.setAccessToken(refreshData.data.accessToken);

            let url = `/api/v4/competitions/${filters.competition}/matches`

            const params = new URLSearchParams()

            if (filters.dateFrom) {
                params.append("dateFrom", formatDate(filters.dateFrom));
                params.append(
                    "dateTo",
                    filters.dateTo ? formatDate(filters.dateTo) : formatDate(filters.dateFrom)
                );
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

            const groupedMatches = groupMatchesByDate(data.matches)

            store.setCompetition(data.competition)
            store.setMatches(groupedMatches)
        } catch (e) {
            console.log(e)
            authStore.logout();
        }
    }

    async function fetchMatchById(matchId: number) {
        try {
            const refreshData = await refreshTokenRequest(authStore.refreshToken!);

            authStore.setAccessToken(refreshData.data.accessToken);

            const response = await fetch(`/api/v4/matches/${matchId}`, {
                headers: {
                    'X-Auth-Token': '35a54fdd83344a17bdf1a99dfc384df8',
                }
            })
            currentMatch.value = await response.json() as TMatch
        } catch (e) {
            console.log(e)
            authStore.logout();
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