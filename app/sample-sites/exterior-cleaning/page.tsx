import type { Metadata } from 'next';
import PressureWashingSample from '@/components/samples/PressureWashingSample';

export const metadata: Metadata = {
  title: 'South Shore Shine - Pressure Washing Sample | Bellmore Web Design',
  description:
    'A polished sample website concept for a pressure washing and exterior cleaning business, built by Bellmore Web Design.',
};

export default function ExteriorCleaningDemo() {
  return <PressureWashingSample />;
}
