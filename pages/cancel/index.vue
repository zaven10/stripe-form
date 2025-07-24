<template>
  <div class="flex flex-col items-center gap-8 max-w-xl mx-auto text-center">
    <div class="text-[100px]">
      😕
    </div>
    <h1 class="text-black font-bold text-3xl lg:text-4xl">
      Subscription Canceled
    </h1>
    <p class="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto">
      It looks like your subscription process was canceled. No worries — you can return to the homepage and start again whenever you’re ready.
      <br><br>
      We’re here to support you whenever you’re ready to take the next step.
    </p>
    <router-link
      to="/"
      class="bg-app-primary hover:bg-app-primary/80 text-white px-8 py-3 rounded-full font-semibold text-base lg:text-lg transition-all"
    >
      Go Back Home
    </router-link>
  </div>
</template>
