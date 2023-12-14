import "server-only";
import type { Locale } from "@/i18n.config";

export interface LanguageDictionary {
  home: {
    title: string;
    subtitle: string;
    contentTexts: string[];
  };
  about: {
    name: string;
    city: string;
    links: {
      name: string;
      url: string;
      icon: string;
    }[];
    background: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      description: string;
      items: {
        programming_languages: [string, string][];
        frameworks: [string, string][];
        tools: [string, string][];
        todo: [string, string][];
      };
    };
    projects: {
      title: string;
      description: string;
      items: {
        name: string;
        description: string;
        image?: string;
        links: {
          name: string;
          url: string;
          icon: string;
        }[];
        tools: [string, string][];
      }[];
    };
  };

  metadata: {
    title: string;
    description: string;
    twitter: {
      images: string[];
    };
    openGraph: {
      locale: string;
    };
  };
}

const dictionaries = {
  en: () =>
    import("@/dictionaries/en.json").then(
      (module) => module.default as LanguageDictionary
    ),
  // th: () =>
  //   import("@/dictionaries/th.json").then(
  //     (module) => module.default as LanguageDictionary
  //   ),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
