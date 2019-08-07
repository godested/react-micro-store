import React, {
  createContext,
  useReducer,
  ReactNode,
  Reducer,
  Context,
} from 'react';
import { noop, identity } from './utils';

export interface DefaultContextProvider {
  state: unknown;
  dispatch: Function;
}

export interface MicroStoreProviderProps {
  initialState?: Record<string, any>;
  reducer?: Reducer<unknown, unknown>;
  context?: Context<DefaultContextProvider>;
  children: ReactNode;
}

export const MicroStoreContext = createContext<DefaultContextProvider>({
  state: {},
  dispatch: noop,
});

export function MicroStoreProvider(props: MicroStoreProviderProps) {
  const {
    initialState = {},
    reducer = identity,
    children,
    context,
    ...restProps
  } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const StoreContext = context || MicroStoreContext;

  return (
    <StoreContext.Provider value={{ state, dispatch }} {...restProps}>
      {children}
    </StoreContext.Provider>
  );
}
