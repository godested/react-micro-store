import React, {
  createContext,
  useReducer,
  ReactNode,
  Reducer,
  Context,
} from 'react';

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

export const MicroStoreContext = createContext<DefaultContextProvider>({
  state: {},
  dispatch: () => {},
});

export function MicroStoreProvider(props: MicroStoreProviderProps) {
  const { initialState = {}, children, reducer, context, ...restProps } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const StoreContext = context || MicroStoreContext;

  return (
    <StoreContext.Provider value={{ state, dispatch }} {...restProps}>
      {children}
    </StoreContext.Provider>
  );
}
