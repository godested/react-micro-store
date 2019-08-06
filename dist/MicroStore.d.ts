import React, { ReactNode, Reducer, Context } from 'react';
export interface DefaultContextProvider {
    state: unknown;
    dispatch: Function;
}
export interface MicroStoreProviderProps {
    initialState?: Record<string, any>;
    reducer: Reducer<unknown, unknown>;
    children: ReactNode;
    context?: Context<DefaultContextProvider>;
}
export declare const MicroStoreContext: React.Context<DefaultContextProvider>;
export declare function MicroStoreProvider(props: MicroStoreProviderProps): JSX.Element;
