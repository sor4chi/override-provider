<script setup lang="ts">
import { provide } from "vue";
import { textKey, useTextProvider } from "./hooks/use-text";
import Child from "./components/Child.vue";
import OverrideProvider from "./components/OverrideProvider.vue";

const provider = useTextProvider("Hello");
provide(textKey, provider);
</script>

<template>
  <Child />
  <OverrideProvider />
</template>
