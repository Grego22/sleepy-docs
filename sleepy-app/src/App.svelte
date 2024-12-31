<script>
  let url = '';
  let response = '';

  async function gatherInfo() {
    const res = await fetch(`/api/gather-info?url=${encodeURIComponent(url)}`);
    response = await res.text();
  }

  async function redirectToSite() {
    window.location.href = url;
  }
</script>

<main>
  <h1>Gather Info and Redirect</h1>
  <input bind:value={url} placeholder="Enter URL" />
  <button on:click={gatherInfo}>Gather Info</button>
  <button on:click={redirectToSite}>Redirect</button>
  <button on:click={randomDocs}>Random Docs</button>
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
