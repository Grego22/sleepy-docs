<script>
    console.log("App mounted!");
  let url = '';
  let response = '';

  async function gatherInfo() {
    try {
      const res = await fetch(`/api/gather-info?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      response = await res.text();
    } catch (err) {
      response = `Failed to fetch data: ${err.message}`;
      console.error(err);
    }
  }

  async function redirectToSite() {
    if (url) {
      window.location.href = url;
    } else {
      response = "Please enter a valid URL!";
    }
  }
  
</script>

<main>
  <h1>Gather Info and Redirect</h1>
  <input bind:value={url} placeholder="Enter URL" />
  <button on:click={gatherInfo}>Gather Info</button>
  <button on:click={redirectToSite}>Redirect</button>
  <button class="btn btn-primary">Primary Button</button>
  <pre>{response}</pre>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }
  input {
    width: 80%;
    padding: 0.5em;
    margin: 1em 0;
  }
</style>
