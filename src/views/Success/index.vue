<template>
  <main class="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-5 text-center">
    <div class="flex flex-col items-center gap-8 max-w-xl">
      <div class="text-9xl">🎉</div>
      <h1 class="text-black font-bold text-3xl lg:text-4xl">You're All Set!</h1>
      <p class="text-gray-600 text-base lg:text-lg leading-relaxed">
        Your subscription is now active! You’ve chosen a newsletter plan that delivers a personalized, professionally designed monthly email newsletter tailored specifically to your city.
        <br /><br />
        Along with smart automation and insightful reporting, you now have everything you need to connect with your audience and grow.
        <br /><br />
        Welcome aboard — we’re excited to help you succeed.
      </p>
      <router-link
        to="/"
        class="bg-[#1d49a6] hover:bg-[#1d49a6]/80 text-white px-8 py-3 rounded-full font-semibold text-base lg:text-lg transition-all"
      >
        Go Back Home
      </router-link>
    </div>
  </main>
</template>
