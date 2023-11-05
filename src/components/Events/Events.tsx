import { Link, Outlet } from 'react-router-dom';

import Header from '../Header.tsx';
import EventsIntroSection from './EventsIntroSection.tsx';
import FindEventSection from './FindEventSection.tsx';
import NewEventsSection from './NewEventsSection.tsx';

export default function Events() {
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}
