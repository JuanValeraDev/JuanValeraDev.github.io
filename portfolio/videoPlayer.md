  <img class="hidden dark:block rounded-lg" src="/assets/vp_picture_7.png" alt="VideoPlayer">
<img class="block dark:hidden rounded-lg" src="/assets/vp_picture_8.png" alt="VideoPlayer">

This project is an exercise to practice Next.js, utilizing tRPC for client-server communication and server actions to
interact with a Supabase database. The application is styled with TailwindCSS and Shadcn, featuring a fully responsive
design. It allows users to view a collection of videos uploaded to AWS and play them in a video player. The application
manages the state of likes and watches for each video, uses the App Router for navigation, and shares information
between pages through the URL. It also supports light and dark modes and displays loading skeletons while data is being
fetched.

  <div class="carousel-container">
        <div class="carousel-slides">
        <img class="carousel-slide dark:hidden" src="/assets/vp_picture_1.png" alt="VideoPlayer">
        <img class="carousel-slide dark:hidden" src="/assets/vp_picture_4.png" alt="VideoPlayer">
        <img class="carousel-slide dark:hidden" src="/assets/vp_picture_5.png" alt="VideoPlayer">
        <img class="carousel-slide dark:hidden" src="/assets/vp_picture_5.png" alt="VideoPlayer">
        <img class="carousel-slide dark:hidden" src="/assets/vp_picture_5.png" alt="VideoPlayer">
        <img class="carousel-slide hidden dark:block" src="/assets/vp_picture_6.png" alt="VideoPlayer">
        <img class="carousel-slide  hidden dark:block" src="/assets/vp_picture_9.png" alt="VideoPlayer">
        <img class="carousel-slide  hidden dark:block" src="/assets/vp_picture_9.png" alt="VideoPlayer">
        </div>
        <button class="carousel-btn carousel-btn-prev">&lt;</button>
        <button class="carousel-btn carousel-btn-next">&gt;</button>
        <div class="carousel-indicators"></div>
    </div>

