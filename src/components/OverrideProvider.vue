<script setup lang="ts">
import { provide } from "vue";
import { breakPointKey, useBreakpointProvider } from "../hooks/use-breakpoint";
import OverrideProviderChild from "./OverrideProviderChild.vue";

const provider = useBreakpointProvider({
  sm: 9999,
  md: 9999,
  lg: 9999,
});
provide(breakPointKey, provider);
</script>

<template>
  <OverrideProviderChild />
</template>
