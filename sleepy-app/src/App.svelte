<script lang="ts">
  import CanvasBackground from '../src/components/CanvasBackground.svelte';
  import DocPreview from './components/DocPreview.svelte';
  let message = "Welcome to Sleepy Docs!";
</script>

<main class="min-h-screen bg-gray-100 flex items-center justify-center">
  <h1 class="text-4xl font-bold text-blue-500">{message}</h1>
  <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Click Me</button>
</main>
<CanvasBackground/>
