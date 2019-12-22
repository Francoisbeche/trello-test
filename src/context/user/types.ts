export type State = { isConnected: boolean, userName: string };
export type Action = { type: string, isConnected: boolean, userName: string };
export type Dispatch = (action: Action) => void;
export type StoreProviderProps = { children: React.ReactNode };



