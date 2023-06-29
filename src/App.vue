<script setup lang="ts">
import { provide } from "vue";
import { breakPointKey, useBreakpointProvider } from "./hooks/use-breakpoint";
import Child from "./components/Child.vue";
import OverrideProvider from "./components/OverrideProvider.vue";

const provider = useBreakpointProvider();
provide(breakPointKey, provider);
</script>

<template>
  <Child />
  <OverrideProvider />
</template>
