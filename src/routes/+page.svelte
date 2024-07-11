<script>
  import * as m from "$lib/paraglide/messages.js";
  import { page } from "$app/stores";
  import { i18n } from "$lib/i18n.js";

  $: currentPathWithoutLanguage = i18n.route($page.url.pathname);
</script>


