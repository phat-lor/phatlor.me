"use client";

export function ParallaxSection({
  children,
  sectionID,
}: {
  children: React.ReactNode;
  sectionID: string;
}) {
  return <section id={sectionID}>{children}</section>;
}
