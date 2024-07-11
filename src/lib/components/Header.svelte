<script lang="ts">
  import LanguageSwitcher from "./languageswitcher.svelte";
  import { onMount } from "svelte";
  import * as m from "$lib/paraglide/messages.js";

  let paddlaOpen = false;
  let omOssOpen = false;
  let mobileMenuOpen = false;
  let mobilePaddlaOpen = false;
  let mobileOmOssOpen = false;

  function toggleDropdown(dropdown: "paddla" | "omOss", isOpen: boolean) {
    if (dropdown === "paddla") {
      paddlaOpen = isOpen;
      omOssOpen = false;
    } else if (dropdown === "omOss") {
      omOssOpen = isOpen;
      paddlaOpen = false;
    }
  }

  function toggleMobileDropdown(dropdown: "paddla" | "omOss") {
    if (dropdown === "paddla") {
      mobilePaddlaOpen = !mobilePaddlaOpen;
      mobileOmOssOpen = false;
    } else if (dropdown === "omOss") {
      mobileOmOssOpen = !mobileOmOssOpen;
      mobilePaddlaOpen = false;
    }
  }

  onMount(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !(event.target instanceof HTMLElement) ||
        !event.target.closest("nav")
      ) {
        paddlaOpen = false;
        omOssOpen = false;
        mobilePaddlaOpen = false;
        mobileOmOssOpen = false;
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<nav
  class="sticky top-0 z-50 bg-white flex justify-between items-center p-4 shadow"
>
  <a href="/" class="flex items-center">
    <img src="/Logga.svg" alt="Stisses Logo" class="h-15 w-20" />
  </a>

  <button
    class="md:hidden p-2"
    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>

  <ul class="hidden md:flex flex-wrap items-center font-medium text-sm">
    <li
      class="p-4 lg:px-8 relative flex items-center space-x-1"
      on:mouseenter={() => toggleDropdown("paddla", true)}
      on:mouseleave={() => toggleDropdown("paddla", false)}
    >
      <a
        class="text-slate-800 hover:text-slate-900 flex items-center"
        href="#0"
        aria-expanded={paddlaOpen}
        >{m.nav1()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-1 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      {#if paddlaOpen}
        <ul
          class="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        >
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.slow_quiet_crab_boost()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.teary_civil_lemming_glow()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.mild_flaky_nils_nudge()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.topical_lazy_lynx_win()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.extra_white_tadpole_fade()}</a
            >
          </li>
        </ul>
      {/if}
    </li>
    <li class="p-4 lg:px-8">
      <a class="text-slate-800 hover:text-slate-900" href="#"
        >{m.tiny_raw_penguin_zip()}</a
      >
    </li>
    <li
      class="p-4 lg:px-8 relative flex items-center space-x-1"
      on:mouseenter={() => toggleDropdown("omOss", true)}
      on:mouseleave={() => toggleDropdown("omOss", false)}
    >
      <a
        class="text-slate-800 hover:text-slate-900 flex items-center"
        href="#0"
        aria-expanded={omOssOpen}
        >{m.fun_crazy_maggot_succeed()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-1 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      {#if omOssOpen}
        <ul
          class="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        >
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.fair_wide_jurgen_treat()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.topical_weary_polecat_evoke()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.candid_neat_loris_enjoy()}</a
            >
          </li>
          <li>
            <a
              class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
              href="#">{m.light_gray_lamb_fade()}</a
            >
          </li>
        </ul>
      {/if}
    </li>
    <li class="p-4 lg:px-8">
      <a class="text-slate-800 hover:text-slate-900" href="#"
        >{m.moving_extra_tadpole_ask()}</a
      >
    </li>
    <li class="p-4 lg:px-8">
      <LanguageSwitcher />
    </li>
  </ul>

  {#if mobileMenuOpen}
    <ul
      class="absolute top-16 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center md:hidden"
    >
      <li class="w-full text-center border-b border-gray-200">
        <div
          class="p-4 relative flex items-center justify-center"
          on:click={() => toggleMobileDropdown("paddla")}
        >
          <a
            class="text-slate-800 hover:text-slate-900 flex items-center justify-center w-full font-bold"
            href="#0"
            aria-expanded={mobilePaddlaOpen}
            >{m.nav1()}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        {#if mobilePaddlaOpen}
          <ul class="bg-white w-full border-t border-gray-200">
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#">{m.slow_quiet_crab_boost()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#">{m.teary_civil_lemming_glow()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#">{m.mild_flaky_nils_nudge()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#">{m.topical_lazy_lynx_win()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#">{m.extra_white_tadpole_fade()}</a
              >
            </li>
          </ul>
        {/if}
      </li>
      <li class="p-4 w-full text-center border-b border-gray-200">
        <a class="text-slate-800 hover:text-slate-900" href="#"
          >{m.tiny_raw_penguin_zip()}</a
        >
      </li>
      <li class="w-full text-center border-b border-gray-200">
        <div
          class="p-4 relative flex items-center justify-center"
          on:click={() => toggleMobileDropdown("omOss")}
        >
          <a
            class="text-slate-800 hover:text-slate-900 flex items-center justify-center w-full font-bold"
            href="#0"
            aria-expanded={mobileOmOssOpen}
            >{m.fun_crazy_maggot_succeed()}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        {#if mobileOmOssOpen}
          <ul class="bg-white w-full border-t border-gray-200">
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center justify-center p-2"
                href="#">{m.fair_wide_jurgen_treat()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center justify-center p-2"
                href="#">{m.topical_weary_polecat_evoke()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center justify-center p-2"
                href="#">{m.candid_neat_loris_enjoy()}</a
              >
            </li>
            <li>
              <a
                class="text-slate-800 hover:bg-slate-50 flex items-center justify-center p-2"
                href="#">{m.light_gray_lamb_fade()}</a
              >
            </li>
          </ul>
        {/if}
      </li>
      <li class="p-4 w-full text-center border-b border-gray-200">
        <a class="text-slate-800 hover:text-slate-900" href="#"
          >{m.moving_extra_tadpole_ask()}</a
        >
      </li>
      <li class="p-4 w-full text-center">
        <LanguageSwitcher />
      </li>
    </ul>
  {/if}
</nav>

<style>
  nav {
    position: relative;
  }
</style>
