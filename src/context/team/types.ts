export type State = { teams: any, error: string | undefined };
export type Action = { type: string, teams: any, error: string | undefined };
export type Dispatch = (action: Action) => void;
export type StoreProviderProps = { children: React.ReactNode };



