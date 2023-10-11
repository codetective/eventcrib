'use client';
import { PropsWithChildren, createContext, useContext } from 'react';
import { events } from '@/utils/mockData';

export type EventType = {
  eventId: string;
  category: string;
  title: string;
  desc: string;
  image: string;
};

const AppContext = createContext<{ events: EventType[] | null }>({
  events: null,
});

export default function AppProvider({ children }: PropsWithChildren<{}>) {
  const mockEvents = events;
  return (
    <AppContext.Provider value={{ events: mockEvents }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  let ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside the AppProvider');
  }

  return ctx;
};
