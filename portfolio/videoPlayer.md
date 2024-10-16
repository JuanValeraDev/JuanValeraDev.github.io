<img class="hidden dark:block rounded-lg" src="/assets/vp_picture_2.png" alt="VideoPlayer">
<img class="block dark:hidden rounded-lg" src="/assets/vp_picture_3.png" alt="VideoPlayer">

This project is an exercise to practice Next.js, utilizing tRPC for client-server communication and server actions to
interact with a Supabase database. The application is styled with TailwindCSS and Shadcn, featuring a fully responsive
design. It allows users to view a collection of videos uploaded to AWS and play them in a video player. The application
manages the state of likes and watches for each video, uses the App Router for navigation, and shares information
between pages through the URL. It also supports light and dark modes and displays loading skeletons while data is being
fetched.


 <div class="slider dark:hidden">
        <input type="checkbox" id="pause-control">
        <div class="slides">
            <div> <img class="carousel-slide" src="/assets/vp_picture_1.png" alt="VideoPlayer"></div>
            <div ><img class="carousel-slide" src="/assets/vp_picture_4.png" alt="VideoPlayer"></div>
            <div ><img class="carousel-slide" src="/assets/vp_picture_5.png" alt="VideoPlayer"></div>
           <div> <img class="carousel-slide" src="/assets/vp_picture_1.png" alt="VideoPlayer"></div>
            <div ><img class="carousel-slide" src="/assets/vp_picture_4.png" alt="VideoPlayer"></div>
        </div>
        <div class="slider-control">
            <label for="pause-control" class="pause-label"><img src="/assets/pause.png" alt="Play Icon" width="40" height="40"></label>
            <label for="pause-control" class="play-label"><img src="/assets/play.png" alt="Play Icon" width="37" height="37"></label>     
        </div>
</div>
 <div class="slider hidden dark:block">
        <input type="checkbox" id="pause-control">
        <div class="slides">
            <div> <img class="carousel-slide" src="/assets/vp_picture_6.png" alt="VideoPlayer"></div>
            <div ><img class="carousel-slide" src="/assets/vp_picture_9.png" alt="VideoPlayer"></div>
            <div ><img class="carousel-slide" src="/assets/vp_picture_6.png" alt="VideoPlayer"></div>
            <div> <img class="carousel-slide" src="/assets/vp_picture_6.png" alt="VideoPlayer"></div>
            <div ><img class="carousel-slide" src="/assets/vp_picture_9.png" alt="VideoPlayer"></div>
        </div>
        <div class="slider-control-dark">
            <label for="pause-control-dark" class="pause-label-dark"><img src="/assets/pause.png" alt="Play Icon" width="40" height="40"></label>
            <label for="pause-control-dark" class="play-label-dark"><img src="/assets/play.png" alt="Play Icon" width="37" height="37"></label>     
        </div>
</div>





