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
  const [page, setPage] = useState(0);
  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }

  const SectionIndicator = () => {
    return (
      <div className="flex flex-col justify-center fixed top-0 left-0 h-screen w-8">
        <div className="flex flex-col justify-center h-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={
                "h-2 w-2 rounded-xl my-2 ml-1 " +
                (i === page ? "bg-white" : "bg-gray-600")
              }
            ></div>
          ))}
        </div>
      </div>
    );
  };

  const isMobile = window.innerWidth <= 768; // Adjust this threshold for mobile devices
  const isVerticallyTooSmall = window.innerHeight <= 600; // Adjust this threshold for mobile devices
  if (isMobile || isVerticallyTooSmall || forceScroll) {
    return <>{children}</>;
  } else {
    return (
      <>
        <SectionIndicator />

        <ReactPageScroller
          pageOnChange={(page) => {
            console.log(page);
            setPage(page);
          }}
        >
          {children}
        </ReactPageScroller>
      </>
    );
  }
}
