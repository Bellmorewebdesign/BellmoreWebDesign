// General content gallery, shared across all clients (not tied to one project).
// Add real photos and video stills here as they are shot. While this is empty,
// the gallery shows an intentional placeholder state instead of stock photos.

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional short caption shown on hover and in the lightbox. */
  caption?: string;
  /** Optional business name, if you want to credit the client. */
  business?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/projects/peak-auto-collision/truck-before-after.png',
    alt: 'Before and after comparison of a pickup truck body repair and refinishing project',
    caption: 'Pickup truck bodywork — before and after',
    business: 'Peak Auto Collision',
  },
];
