"use client";
import { ReactPageScroller } from "@/lib/scroller/ReactPageScroller";
import { useEffect, useState } from "react";

export function PageScrollHandler({
  children,
  forceScroll,
}: {
  children: React.ReactNode;
  forceScroll?: boolean;
}) {
  const [showChild, setShowChild] = useState(false);
  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }

  const isMobile = window.innerWidth <= 768; // Adjust this threshold for mobile devices
  const isVerticallyTooSmall = window.innerHeight <= 600; // Adjust this threshold for mobile devices
  if (isMobile || isVerticallyTooSmall || forceScroll) {
    return <>{children}</>;
  } else {
    return (
      <ReactPageScroller
        pageOnChange={(page) => {
          console.log(page);
        }}
      >
        {children}
      </ReactPageScroller>
    );
  }
}
