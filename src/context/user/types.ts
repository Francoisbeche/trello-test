export type State = { isConnected: boolean, session: any, error: string | undefined, user:any };
export type Action = { type: string, error: string | undefined, payload:any };
export type Dispatch = (action: Action) => void;
export type StoreProviderProps = { children: React.ReactNode };



