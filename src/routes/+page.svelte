<script>
  import * as m from "$lib/paraglide/messages.js";
  import { page } from "$app/stores";
  import { i18n } from "$lib/i18n.js";

  $: currentPathWithoutLanguage = i18n.route($page.url.pathname);
</script>


<h1 class=" text-red-600">{m.WelcomeMessage()}</h1>
<p>
  {m.less_only_larva_earn()}
</p>
