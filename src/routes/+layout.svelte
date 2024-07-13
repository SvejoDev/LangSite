<!-- src/routes/+layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import { i18n } from "$lib/i18n.js";
  import "../app.css";
  import "tailwindcss/tailwind.css";
  import Hero from "$lib/components/Hero.svelte";
</script>

<ParaglideJS {i18n}>
  <Header />

  <slot />
</ParaglideJS>
