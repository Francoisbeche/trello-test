import Payload from '../../models/Payload';

export type State = { error: any, teams: Array<any>, list: Array<{ listName: string, id: string, cards: Array<any> }> };
export type Action = { type: string, payload: Payload, error: any };
export type Dispatch = (action: Action) => void;
export type StoreProviderProps = { children: React.ReactNode };



