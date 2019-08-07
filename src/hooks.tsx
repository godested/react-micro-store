import { useContext, Context } from 'react';
import { MicroStoreContext, DefaultContextProvider } from './MicroStore';

export function useMicroStore<
  P extends Function,
  D extends Function,
  C extends Context<DefaultContextProvider>
>(
  mapStateToProps?: P,
  mapDispatchToProps?: D,
  context?: C
): Record<string, any> {
  const { state, dispatch } = useContext(context || MicroStoreContext);

  const mappedState = mapStateToProps ? mapStateToProps(state) : state;
  const mappedDispatch = mapDispatchToProps ? mapDispatchToProps(dispatch) : {};

  return {
    ...mappedState,
    ...mappedDispatch,
  };
}
