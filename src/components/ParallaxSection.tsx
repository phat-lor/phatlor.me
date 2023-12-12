"use client";

import { SectionContainer } from "react-page-scroller";

export function ParallaxSection({
  children,
  sectionID,
}: {
  children: React.ReactNode;
  sectionID: string;
}) {
  return <section id={sectionID}>{children}</section>;
}
