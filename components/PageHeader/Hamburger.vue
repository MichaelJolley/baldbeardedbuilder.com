<template>
  <button
    class="hamburger"
    type="button"
    :class="{ open: mobileMenuExpanded }"
    @click="toggleMobileMenu"
  ></button>
</template>
<script lang="ts" setup>
import { useMobileMenu } from "@/composables/useMobileMenu";
const { mobileMenuExpanded, toggleMobileMenu } = useMobileMenu();
</script>
<style lang="scss" scoped>
button {
  @apply block;
  @apply w-10;
  @apply outline-none;
  @apply p-0;
  @apply border-0;
  @apply bg-transparent;
  @apply md:hidden;
  @apply mr-8;

  &:before,
  &:after {
    @apply bg-darkPurple dark:bg-gray-100;
    @apply block;
    @apply h-1;
    content: "";
    transition: all 200ms ease-in-out;
  }
  &:before {
    @apply mb-4;

    box-shadow: 0 10px 0 rgb(20, 5, 28);
  }
  &.open:before {
    box-shadow: 0 0 0 rgb(20, 5, 28);
    transform: translateY(10px) rotate(45deg);
  }
  &.open:after {
    transform: translateY(-10px) rotate(-45deg);
  }
}
.dark button {
  &:before {
    box-shadow: 0 10px 0 rgb(243, 244, 246);
  }
  &.open:before {
    box-shadow: 0 0 0 rgb(243, 244, 246);
  }
}
</style>
