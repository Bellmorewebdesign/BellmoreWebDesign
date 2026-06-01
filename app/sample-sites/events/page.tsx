import type { Metadata } from 'next';
import EventsSample from '@/components/samples/EventsSample';

export const metadata: Metadata = {
  title: 'Ever After Events - Event Styling Sample | Bellmore Web Design',
  description:
    'A polished sample website concept for an event styling, balloon design, and party setup business, built by Bellmore Web Design.',
};

export default function EventsDemo() {
  return <EventsSample />;
}
