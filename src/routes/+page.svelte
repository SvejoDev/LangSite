<script>
  import Hero from "$lib/components/Hero.svelte";
  import Productsection from "$lib/components/ProductSection.svelte";
  import Review from "$lib/components/review.svelte";
</script>

<main>
  <Hero />
  <h1 class="text-4xl font-bold text-center my-10">Våra upplevelser</h1>

  <Productsection />

  <div class="reviews-container">
    <Review
      quote="Bra läge och trevligt bemötande. Fint att paddla både upp och nerströms."
      image="https://lh3.googleusercontent.com/a-/ALV-UjV5GeGLMig_dSamGL0DIwIkQlNyAd2h9qaHdh9Kb2A8uOgiWwcM_w=s64-c-rp-mo-ba4-br100"
      name="Karsten Lyby  "
      title="Local guide"
    />

    <Review
      quote="Suverän upplevelse, speciellt sista delen ut mot havet i Skånes Amazonas. Rekommenderas varmt."
      image="https://lh3.googleusercontent.com/a-/ALV-UjUAYk6tCxzvYEd0hlnZpR2V-4Kz8Wj4hlAj9EkoC0wduYUEvffW=s64-c-rp-mo-br100"
      name="Ulf Örnhag"
      title=""
    />

    <Review
      quote="Mycket trevlig kontakt med personalen, ordning och reda, fick tips på sträckor och upplägg. Hit återkommer vi!"
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
