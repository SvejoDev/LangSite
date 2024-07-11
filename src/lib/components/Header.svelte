<script>
	import LanguageSwitcher from "./LanguageSwitcher.svelte"
    import { page } from "$app/stores";
    import * as m from "$lib/paraglide/messages.js"
	import { base } from "$app/paths"
</script>
<header>
   
    <span>{$page.url.pathname}</span>
    <LanguageSwitcher />
</header>


<style>
    header {
        display: flex;
        padding: 1em;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
    }

    nav {
        display: flex;
        gap : 1em;
    }

    a[aria-current="page"] {
        font-weight: bold;
    }
</style>