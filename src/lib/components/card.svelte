<script>
  export let imageURL;
  export let title;
  export let description;
  export let price;
</script>

<div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img src={imageURL} alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{price}</button>
    </div>
  </div>
</div>
