<template>
  <div class="flex flex-col items-center gap-10 max-w-xl mx-auto">
    <img
      src="/logo.png"
      alt="logo"
      class="w-24 h-24"
    >
    <div class="text-gray-700 text-justify text-sm lg:text-lg leading-relaxed grid gap-7">
      <h1 class="text-black font-extrabold text-3xl lg:text-3xl text-center">
        Thank You & Welcome Aboard!
      </h1>
      <div>
        Your subscription is now confirmed, you’re officially on your way to
        delivering a powerful, customized monthly newsletter designed to keep you
        top of mind in your local market.
      </div>
      <div class="grid gap-1">
        <h3 class="text-black font-bold text-lg lg:text-xl">
          What Happens Next
        </h3>
        <span>
          We’ll begin setting up your personalized email campaign tailored to your
          selected city. You’ll receive professionally written content, local market
          insights, and a ready-to-send newsletter every single month.
          Our team will contact you within one business day to begin the onboarding process.
        </span>
      </div>
      <div class="grid gap-1.5">
        <h3 class="text-black font-bold text-lg lg:text-xl">
          Have questions or need support?
        </h3>
        <a href="tel:+14039090582" class="text-app-primary text-base font-semibold">
          📞 (403) 909-0582
        </a>
        <a href="mailto:info@realinfobox.com" class="text-app-primary text-base font-semibold">
          ✉ info@realinfobox.com
        </a>
        <span class="text-xl text-gray-800 font-bold">We’re here to help!</span>
      </div>
    </div>
    <nuxt-link
      to="/"
      class="bg-app-primary hover:bg-app-primary/80 text-white px-8 py-3 rounded-full font-bold text-lg lg:text-xl transition-all"
    >
      Go Back Home
    </nuxt-link>
  </div>
</template>
