<template>
  <div>
      <NuxtLoadingIndicator />
      <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
