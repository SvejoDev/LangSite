<script>
  import * as m from "$lib/paraglide/messages";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import Logo from "./logo.svelte";
</script>

<div class="navbar bg-base-100 sticky top-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow"
      >
        <li>
          <details>
            <summary>{m.nav1()}</summary>
            <ul class="p-2 w-30">
              <li><a>{m.slow_quiet_crab_boost()}</a></li>
              <li><a>{m.teary_civil_lemming_glow()}</a></li>
              <li><a>{m.mild_flaky_nils_nudge()}</a></li>
              <li><a>{m.topical_lazy_lynx_win()}</a></li>
              <li><a>{m.extra_white_tadpole_fade()}</a></li>
            </ul>
          </details>
        </li>
        <li>
          <a href="src/routes/FAQ/+page.svelte">{m.tiny_raw_penguin_zip()}</a>
        </li>
        <li>
          <details>
            <summary>{m.fun_crazy_maggot_succeed()}</summary>
            <ul class="p-2 w-72">
              <li><a>{m.fair_wide_jurgen_treat()}</a></li>
              <li><a>{m.topical_weary_polecat_evoke()}</a></li>
              <li><a>{m.candid_neat_loris_enjoy()}</a></li>
              <li><a>{m.light_gray_lamb_fade()}</a></li>
            </ul>
          </details>
        </li>
        <li><a>{m.moving_extra_tadpole_ask()}</a></li>
      </ul>
    </div>
    <div class=" ml-10">
      <Logo />
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>{m.nav1()}</summary>
          <ul class="p-2 w-52">
            <li><a>{m.slow_quiet_crab_boost()}</a></li>
            <li><a>{m.teary_civil_lemming_glow()}</a></li>
            <li><a>{m.mild_flaky_nils_nudge()}</a></li>
            <li><a>{m.topical_lazy_lynx_win()}</a></li>
            <li><a>{m.extra_white_tadpole_fade()}</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/FAQ/">{m.tiny_raw_penguin_zip()}</a></li>
      <li>
        <details>
          <summary>{m.fun_crazy_maggot_succeed()}</summary>
          <ul class="p-2 w-72">
            <li><a>{m.fair_wide_jurgen_treat()}</a></li>
            <li><a>{m.topical_weary_polecat_evoke()}</a></li>
            <li><a>{m.candid_neat_loris_enjoy()}</a></li>
            <li><a>{m.light_gray_lamb_fade()}</a></li>
          </ul>
        </details>
      </li>
      <li><a>{m.moving_extra_tadpole_ask()}</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <LanguageSwitcher />
  </div>
</div>
