<script setup lang="ts">
import { inject } from "vue";
import { breakPointKey } from "../hooks/use-breakpoint";

const injected = inject(breakPointKey);
if (!injected) {
  throw new Error("No breakpoint provider found");
}
</script>

<template>
  {{ injected.bp }}
</template>
