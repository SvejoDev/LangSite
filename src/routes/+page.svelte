<script>
  import Hero from "$lib/components/Hero.svelte";
  import Productsection from "$lib/components/ProductSection.svelte";
  import Review from "$lib/components/review.svelte";
  import * as m from "$lib/paraglide/messages";
</script>

<main>
  <Hero />
  <h1 class="text-4xl font-bold text-center my-10">{m.front_tough_fly_propel()}</h1>

  <Productsection />

  <div class="reviews-container">
    <Review
      quote=m.stock_best_nuthatch_dig()
      image="https://lh3.googleusercontent.com/a-/ALV-UjV5GeGLMig_dSamGL0DIwIkQlNyAd2h9qaHdh9Kb2A8uOgiWwcM_w=s64-c-rp-mo-ba4-br100"
      name="Karsten Lyby  "
      title="Local guide"
    />

    <Review
      quote=m.that_many_lobster_clap()
      image="https://lh3.googleusercontent.com/a-/ALV-UjUAYk6tCxzvYEd0hlnZpR2V-4Kz8Wj4hlAj9EkoC0wduYUEvffW=s64-c-rp-mo-br100"
      name="Ulf Örnhag"
      title=""
    />

    <Review
      quote=m.equal_silly_hornet_trim()
      image="https://lh3.googleusercontent.com/a-/ALV-UjXYEuFkwDr3gWB6Eoy8U_ctSLqil9zzFVuJURqi7tri6m4xUcSf=s64-c-rp-mo-ba4-br100"
      name="Hampus Edström"
      title="Local guide"
    />
  </div>

  <style>
    .reviews-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
      justify-content: center;
      padding: 20px;
    }
    @media (min-width: 768px) {
      .reviews-container {
        grid-template-columns: repeat(3, auto);
      }
    }
  </style>
</main>
