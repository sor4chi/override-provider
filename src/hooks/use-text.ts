import { InjectionKey } from "vue";

export const useTextProvider = (text: string) => {
  return { text };
};

export const textKey: InjectionKey<ReturnType<typeof useTextProvider>> =
  Symbol("TextProvider");
