<script>
  import * as m from "$lib/paraglide/messages";
  import Productcard from "./card.svelte";

  const products = [
    {
      imageURL: "/excitingpaddle.webp",
      title: m.noble_caring_dingo_chop(), // Anropa funktionen och tilldela resultatet
      description: m.ideal_awake_grizzly_care(), // Anropa funktionen och tilldela resultatet
      price: m.born_antsy_lizard_slurp(), // Anropa funktionen och tilldela resultatet
    },
    {
      imageURL: "/pleasentjourney.webp",
      title: m.aware_fluffy_ray_charm(),
      description: m.game_loud_raven_tend(),
      price: "från 590SEK/person",
    },
    {
      imageURL: "/challengingpaddle.webp",
      title: m.short_tame_mongoose_dance(),
      description:
        "Paddla med dina bästa vänner för skratt och äventyr på Rönne å. Perfekt för att skapa minnen tillsammans!",
      price: "från 990SEK/person",
    },
    {
      imageURL: "/teambuilding.webp",
      title: "Minnesvärd teambuilding",
      description:
        "Hållbar personalaktivitet på Rönne å. Perfekt för minnesvärda upplevelser för ert företag!",
      price: "från 290SEK/person",
    },
    {
      imageURL: "/friluftsliv.webp",
      title: "Lärande friluftsliv",
      description:
        "Ge dina elever friluftsliv, paddlingskunskap och samarbetsinsikt. Perfekt för skolor och fritidsgårdar!",
      price: "från 160kr/elev",
    },
    {
      imageURL: "/hjelmsjon.webp",
      title: "Mysiga Hjelmsjön",
      description:
        "Upplev paddling på Hjelmsjön och njut av naturen. Perfekt för alla nivåer och familjer!",
      price: "från 250SEK/person",
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
        description={product.description}
        price={product.price}
      />
    {/each}
  </div>
</div>
