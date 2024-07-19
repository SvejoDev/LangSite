<script>
  import { onMount } from "svelte";

  onMount(() => {
    document.querySelectorAll("[data-collapse-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = document.querySelector(
          `[data-collapse="${button.getAttribute("data-collapse-target")}"]`
        );
        if (target) {
          target.classList.toggle("h-0");
          target.classList.toggle("overflow-hidden");
          target.classList.toggle("h-auto");
        }
        // @ts-ignore
        button.querySelector('svg').classList.toggle("rotate-180");
      });
    });
  });
</script>

<div class="container mx-auto p-6">
  <div
    class="flex flex-col md:flex-row items-center md:items-start justify-center space-y-6 md:space-y-0 md:space-x-6"
  >
    <div class="image-container">
      <img src="/1.webp" alt="Description of image" class="w-full rounded-lg" />
    </div>

    <div class="accordion-container bg-white shadow-lg rounded-lg p-6">
      <div class="relative mb-3">
        <h6 class="mb-0">
          <button
            class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
            data-collapse-target="collapse-1"
          >
            <span class="flex-1">Nöjda kunder… - inget som vi strävar mot</span>
            <svg
              class="h-5 w-5 text-gray-400 transition-transform transform"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </h6>
        <div
          data-collapse="collapse-1"
          class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
            Många aktörer inom upplevelse och turism fokuserar på att sätta
            kunden i fokus och på att få nöjda kunder. Ärligt talat, finns det
            någon aktör som inte gör det ? Vi vill ta det ett steg längre. För
            oss räcker det inte med nöjda kunder. Vi vill överträffa kundens
            förväntningar. Vi vill ha begeistrade kunder. Kunder som vill paddla
            igen och som dessutom berättar för vänner och bekanta hur
            begeistrade de är!
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .image-container {
    max-width: 300px;
    border-radius: 0.75rem;
    overflow: hidden;
  }
  .accordion-container {
    max-width: 600px;
    margin: 0 auto;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>
