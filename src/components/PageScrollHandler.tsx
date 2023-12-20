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
    return <>        <SectionIndicator />

    {children}</>;
  } else {
    return (
      <>
              <SectionIndicator />

      <ReactPageScroller
        pageOnChange={(page) => {
          console.log(page);
        }}
      >
        {children}
      </ReactPageScroller>
      </>
    );
  }
}


const SectionIndicator = () => {
  return (
    <div className="flex flex-col justify-center fixed top-0 left-0 h-screen w-8">
      <div className="flex flex-col justify-center h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-4 bg-gray-400 rounded-full my-2"
          ></div>
        ))}
      </div>

    </div>
  )
}