<script>
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import { page } from "$app/stores";
  import * as m from "$lib/paraglide/messages.js";
  import { base } from "$app/paths";
</script>

<header class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <button tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li tabindex="0">
          <a class="justify-between"
            >{m.nav1()}<svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg
            ></a
          >
          <ul class="p-2 bg-base-100">
            <li><a href="{base}/ronne-a">{m.slow_quiet_crab_boost()}</a></li>
            <li>
              <a href="{base}/hjalmsjon">{m.teary_civil_lemming_glow()}</a>
            </li>
            <li>
              <a href="{base}/kanadensare">{m.mild_flaky_nils_nudge()}</a>
            </li>
            <li><a href="{base}/kartor">{m.topical_lazy_lynx_win()}</a></li>
            <li>
              <a href="{base}/presentkort">{m.extra_white_tadpole_fade()}</a>
            </li>
          </ul>
        </li>
        <li><a href="{base}/faq">{m.tiny_raw_penguin_zip()}</a></li>
        <li tabindex="0">
          <a class="justify-between"
            >{m.fun_crazy_maggot_succeed()}<svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg
            ></a
          >
          <ul class="p-2 bg-base-100">
            <li>
              <a href="{base}/vi-som-driver-stisses"
                >{m.fair_wide_jurgen_treat()}</a
              >
            </li>
            <li>
              <a href="{base}/viktigt-for-oss"
                >{m.topical_weary_polecat_evoke()}</a
              >
            </li>
            <li>
              <a href="{base}/vara-partners">{m.candid_neat_loris_enjoy()}</a>
            </li>
            <li><a href="{base}/hitta-hit">{m.light_gray_lamb_fade()}</a></li>
          </ul>
        </li>
        <li><a href="{base}/upptack-mer">{m.moving_extra_tadpole_ask()}</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li tabindex="0">
        <details>
          <summary>{m.nav1()}</summary>
          <ul class="p-2 bg-base-100">
            <li>
              <a
                href="{base}/ronne-a"
                aria-current={$page.route.id === "/ronne-a"
                  ? "page"
                  : undefined}>{m.slow_quiet_crab_boost()}</a
              >
            </li>
            <li>
              <a
                href="{base}/hjalmsjon"
                aria-current={$page.route.id === "/hjalmsjon"
                  ? "page"
                  : undefined}>{m.teary_civil_lemming_glow()}</a
              >
            </li>
            <li>
              <a
                href="{base}/kanadensare"
                aria-current={$page.route.id === "/kanadensare"
                  ? "page"
                  : undefined}>{m.mild_flaky_nils_nudge()}</a
              >
            </li>
            <li>
              <a
                href="{base}/kartor"
                aria-current={$page.route.id === "/kartor" ? "page" : undefined}
                >{m.topical_lazy_lynx_win()}</a
              >
            </li>
            <li>
              <a
                href="{base}/presentkort"
                aria-current={$page.route.id === "/presentkort"
                  ? "page"
                  : undefined}>{m.extra_white_tadpole_fade()}</a
              >
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a
          href="{base}/faq"
          aria-current={$page.route.id === "/faq" ? "page" : undefined}
          >{m.tiny_raw_penguin_zip()}</a
        >
      </li>
      <li tabindex="0">
        <details>
          <summary>{m.fun_crazy_maggot_succeed()}</summary>
          <ul class="p-2 bg-base-100">
            <li>
              <a
                href="{base}/vi-som-driver-stisses"
                aria-current={$page.route.id === "/vi-som-driver-stisses"
                  ? "page"
                  : undefined}>{m.fair_wide_jurgen_treat()}</a
              >
            </li>
            <li>
              <a
                href="{base}/viktigt-for-oss"
                aria-current={$page.route.id === "/viktigt-for-oss"
                  ? "page"
                  : undefined}>{m.topical_weary_polecat_evoke()}</a
              >
            </li>
            <li>
              <a
                href="{base}/vara-partners"
                aria-current={$page.route.id === "/vara-partners"
                  ? "page"
                  : undefined}>{m.candid_neat_loris_enjoy()}</a
              >
            </li>
            <li>
              <a
                href="{base}/hitta-hit"
                aria-current={$page.route.id === "/hitta-hit"
                  ? "page"
                  : undefined}>{m.light_gray_lamb_fade()}</a
              >
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a
          href="{base}/upptack-mer"
          aria-current={$page.route.id === "/upptack-mer" ? "page" : undefined}
          >{m.moving_extra_tadpole_ask()}</a
        >
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <LanguageSwitcher />
    <img src="path-to-your-logo.png" alt="Logo" class="h-8 ml-4" />
  </div>
</header>

<style>
  .dropdown:hover .dropdown-content {
    display: block;
  }

  header {
    display: flex;
    padding: 1em;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
  }

  nav {
    display: flex;
    gap: 1em;
  }

  a[aria-current="page"] {
    font-weight: bold;
  }
</style>
