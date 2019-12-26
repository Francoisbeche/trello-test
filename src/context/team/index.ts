import { TeamProvider, useTeamState, useTeamDispatch } from './team';
import { setUserName } from './actions';

function useTeam() {
    return { Team: useTeamState(), dispatchTeam: useTeamDispatch(), TeamAction: { setUserName } }
}

export {
    TeamProvider,
    useTeamState,
    useTeamDispatch,
    useTeam
}