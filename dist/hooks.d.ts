import { Context } from 'react';
import { DefaultContextProvider } from './MicroStore';
export declare function useMicroStore<P extends Function, D extends Function, C extends Context<DefaultContextProvider>>(mapStateToProps?: P, mapDispatchToProps?: D, context?: C): Record<string, any>;
