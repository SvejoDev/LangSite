<script>
  import { onMount } from "svelte";

  /**
   * @type {HTMLVideoElement}
   */
  let videoElement;

  onMount(() => {
    videoElement.play();
  });
  import * as m from "$lib/paraglide/messages";
</script>

<div class="hero min-h-screen relative overflow-hidden">
  <video
    bind:this={videoElement}
    class="absolute top-0 left-0 w-full h-full object-cover z-10"
    autoplay
    loop
    muted
    playsinline
  >
    <source src="/src/assets/bgfilmwebmcompressed.webm" type="video/webm" />
    <source src="/src/assets/bgfilmcompresseed.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="hero-overlay bg-black bg-opacity-60 z-20"></div>
  <div class="hero-content text-neutral-content text-center relative z-30">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">{m.spicy_plain_buzzard_sway()}</h1>
      <p class="mb-5">
        {m.fresh_such_fox_swim()}
      </p>
      <button
        class="btn btn-primary bg-yellow-400 text-blue-900 outline-none border-none hover:bg-white hover:text-black"
        >{m.cute_cool_tuna_peel()}</button
      >
    </div>
  </div>
</div>

<style>
  .hero {
    position: relative;
    z-index: 0; /* Ensures the hero section itself is below other elements */
  }
  .hero video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10; /* Video behind overlay and content */
  }
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20; /* Overlay above video */
  }
  .hero-content {
    position: relative;
    z-index: 30; /* Content above overlay and video */
  }
</style>
