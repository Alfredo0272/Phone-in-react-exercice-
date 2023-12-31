import { usePhone } from '../hooks/phoneHook';
import { AppContext } from './context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  return (
    <AppContext.Provider value={usePhone()}>{children}</AppContext.Provider>
  );
}
