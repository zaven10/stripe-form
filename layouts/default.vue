<template>
  <main
    class="min-h-screen bg-app-background-page"
  >
    <div class="grid gap-3 lg:gap-10">
      <the-header />
      <div class="container mx-auto grid max-w-[1100px] p-4 lg:px-8">
        <slot />
      </div>
      <the-footer />
    </div>
  </main>
</template>
