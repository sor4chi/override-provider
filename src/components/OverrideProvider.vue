<script setup lang="ts">
import { provide } from "vue";
import { textKey, useTextProvider } from "../hooks/use-text";
import OverrideProviderChild from "./OverrideProviderChild.vue";

const provider = useTextProvider("World");
provide(textKey, provider);
</script>

<template>
  <OverrideProviderChild />
</template>
