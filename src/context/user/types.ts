export type State = { userName: string };
export type Action = { type: string, userName:string };
export type Dispatch = (action: Action) => void;
export type StoreProviderProps = { children: React.ReactNode };



