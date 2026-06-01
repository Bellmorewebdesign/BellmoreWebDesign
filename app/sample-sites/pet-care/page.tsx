import type { Metadata } from 'next';
import PetCareSample from '@/components/samples/PetCareSample';

export const metadata: Metadata = {
  title: 'Harbor Paws Pet Care - Pet Care Sample | Bellmore Web Design',
  description:
    'A polished sample website concept for a dog boarding, walking, and pet care business, built by Bellmore Web Design.',
};

export default function PetCareDemo() {
  return <PetCareSample />;
}
