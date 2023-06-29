<script setup lang="ts">
import { inject } from "vue";
import { textKey } from "../hooks/use-text";

const injected = inject(textKey);
if (!injected) {
  throw new Error("No breakpoint provider found");
}
</script>

<template>
  {{ injected.text }}
</template>
