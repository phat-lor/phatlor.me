import { FaCode } from "react-icons/fa";
import { type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { SlidesPortfolio } from "./_renderer";
import { Suspense } from "react";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen w-full items-center justify-center flex-row">
            <h1 className="text-4xl md:text-6xl font-bold ml-4">Loading...</h1>
          </div>
        }
      >
        <SlidesPortfolio params={{ dictionary }} />
      </Suspense>
    </>
  );
}
