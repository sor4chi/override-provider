import { InjectionKey, onBeforeMount, onMounted, ref } from "vue";

const BREAKPOINTS = ["sm", "md", "lg"] as const;

export type BreakpointVariant = (typeof BREAKPOINTS)[number];

export type Breakpoint = Record<BreakpointVariant, number>;

const DEFAULT_BREAKPOINT: Breakpoint = {
  sm: 480,
  md: 768,
  lg: 1024,
};

const getBreakpoint = (breakpoint: Breakpoint) => {
  const viewportWidth = window.innerWidth;
  const keys = Object.keys(breakpoint) as BreakpointVariant[];
  const currentBreakpoint = keys.find((key) => {
    return viewportWidth <= breakpoint[key];
  });
  return currentBreakpoint ?? BREAKPOINTS[BREAKPOINTS.length - 1];
};

export const useBreakpointProvider = (breakpoint = DEFAULT_BREAKPOINT) => {
  const currentBreakpoint = ref<BreakpointVariant>(
    BREAKPOINTS[BREAKPOINTS.length - 1]
  );
  onMounted(() => {
    const observer = new ResizeObserver(() => {
      currentBreakpoint.value = getBreakpoint(breakpoint);
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  });
  onBeforeMount(() => {
    currentBreakpoint.value = getBreakpoint(breakpoint);
  });
  return { bp: currentBreakpoint };
};

export const breakPointKey: InjectionKey<
  ReturnType<typeof useBreakpointProvider>
> = Symbol("BreakpointProvider");
