import type { Metadata } from 'next';
import RestaurantSample from '@/components/samples/RestaurantSample';

export const metadata: Metadata = {
  title: 'Main Street Chicken Co. - Restaurant Sample | Bellmore Web Design',
  description:
    'A polished sample website concept for a fried chicken restaurant and food truck, built by Bellmore Web Design.',
};

export default function RestaurantDemo() {
  return <RestaurantSample />;
}
