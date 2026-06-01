import type { Metadata } from 'next';
import HighEndTechSample from '@/components/samples/HighEndTechSample';

export const metadata: Metadata = {
  title: 'NovaStack Labs - High-End Tech Sample | Bellmore Web Design',
  description:
    'A premium, animated sample concept for a fictional AI platform, showing advanced motion and 3D visuals by Bellmore Web Design.',
};

export default function HighEndTechDemo() {
  return <HighEndTechSample />;
}
