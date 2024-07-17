<script>
  import * as m from "$lib/paraglide/messages";
  import Productcard from "./card.svelte";

  const products = [
    {
      imageURL: "/excitingpaddle.webp",
      title: m.noble_caring_dingo_chop(), // Anropa funktionen och tilldela resultatet
      description1: m.real_teal_camel_lend(),
      description2: m.quick_known_ocelot_compose(),
      price: m.born_antsy_lizard_slurp(), // Anropa funktionen och tilldela resultatet
    },
    {
      imageURL: "/pleasentjourney.webp",
      title: m.aware_fluffy_ray_charm(),
      description1: m.front_same_octopus_snip(),
      description2: m.clean_witty_guppy_clip(),
      price: m.alert_solid_jan_sing(),
    },
    {
      imageURL: "/challengingpaddle.webp",
      title: m.short_tame_mongoose_dance(),
      description1: m.whole_gray_yak_treasure(),
      description2: m.sweet_lazy_shrimp_prosper(),
      price: m.only_smart_mink_yell(),
    },
    {
      imageURL: "/teambuilding.webp",
      title: m.fun_male_anteater_dare(),
      description1:
        m.wide_green_marten_laugh(),
      description2: "",
      price: m.mellow_knotty_ibex_enrich(),
    },
    {
      imageURL: "/friluftsliv.webp",
      title: m.lazy_spare_fox_splash(),
      description1:
        m.bland_active_buzzard_fond(),
      description2: "",
      price: m.vexed_sad_turtle_sing(),
    },
    {
      imageURL: "/hjelmsjon.webp",
      title: m.away_teal_ostrich_play(),
      description1: m.grassy_actual_bullock_feel(),
      description2: m.orange_lucky_hound_zip(),
      price: m.warm_candid_toucan_lead(),
    },
    // Lägg till fler produkter om du vill
  ];
</script>

<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each products as product}
      <Productcard
        imageURL={product.imageURL}
        title={product.title}
        description1={product.description1}
        description2={product.description2}
        price={product.price}
      />
    {/each}
  </div>
</div>
