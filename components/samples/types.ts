export interface SampleTheme {
  /** primary brand color */
  accent: string;
  /** darker shade of the brand color */
  accentDark: string;
  /** light tint used for soft backgrounds and chips */
  accentSoft: string;
  /** readable text color for the accent chip */
  accentChipText: string;
  /** main dark text color */
  ink: string;
  /** muted text color */
  muted: string;
  /** page background */
  pageBg: string;
  /** hero gradient scrim colors (over the photo) */
  heroFrom: string;
  heroTo: string;
}

export interface CtaLink {
  label: string;
  href: string;
}
