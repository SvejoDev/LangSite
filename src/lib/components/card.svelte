<script>
  export let imageURL;
  export let title;
  export let description;
  export let price;
  import * as m from "$lib/paraglide/messages";
</script>

<div
  class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-90"
>
  <div
    class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-48 sm:h-96"
  >
    <img src={imageURL} alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <div class="flex flex-col items-start justify-between mb-2">
      <p
        class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 w-full"
      >
        {title}
      </p>
      <p
        class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
      >
        {description}
      </p>
    </div>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 w-full text-right"
    >
      {price}
    </p>
  </div>
  <div class="p-6 pt-0">
  </div>
</div>
