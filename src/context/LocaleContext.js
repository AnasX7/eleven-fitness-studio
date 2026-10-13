import { createContext } from 'react';

// English is the fallback only when a component has no matching provider above it.
export const LocaleContext = createContext('en');
