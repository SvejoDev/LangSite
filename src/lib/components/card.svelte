<script>
  export let imageURL;
  export let title;
  export let description1;
  export let description2;
  export let price;
  export let link;
</script>

<a href={link}>
  <div
    class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-90 h-[28rem]"
  >
    <div
      class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-48 sm:h-64"
    >
      <img src={imageURL} alt="card-image" class="object-cover w-full h-full" />
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex flex-col items-start justify-between mb-2 flex-grow">
        <p
          class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 w-full"
        >
          {title}
        </p>
        <p
          class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
        >
          {description1}
        </p>
        <p
          class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
        >
          {description2}
        </p>
      </div>
      <div class="mt-auto">
        <p
          class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 w-full text-right"
        >
          {price}
        </p>
      </div>
    </div>
  </div>
</a>
