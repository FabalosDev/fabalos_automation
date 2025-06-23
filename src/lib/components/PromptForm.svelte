<script>
  let name = '';
  let email = '';
  let prompt = '';
  let tunnelUrl = localStorage.getItem('fabaTunnel') || '';
  let response = '';
  let loading = false;
  let error = '';

  // Save tunnel to localStorage when changed
  $: localStorage.setItem('fabaTunnel', tunnelUrl);

  async function handleSubmit() {
    loading = true;
    error = '';
    response = '';

    try {
      const res = await fetch(tunnelUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, prompt }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      response = data.response || '✅ Submitted!';
    } catch (err) {
      console.error(err);
      error = 'Something went wrong — check the tunnel URL or webhook.';
    } finally {
      loading = false;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-heading text-primary">🦊 Fabaverse Prompt Form</h2>

  <input
    type="text"
    bind:value={tunnelUrl}
    placeholder="Paste your n8n webhook tunnel URL"
    required
    class="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-gray-500 rounded"
/>

  <input
    type="text"
    bind:value={name}
    placeholder="Your Name"
    required
    class="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-gray-500 rounded"
/>

  <input
    type="email"
    bind:value={email}
    placeholder="Email"
    required
    class="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-gray-500 rounded"
/>

  <textarea
    bind:value={prompt}
    placeholder="Your Prompt"
    required
    class="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-gray-500 rounded h-32">
  </textarea>

  <button
    type="submit"
    class="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
    disabled={loading}
  >
    {loading ? 'Sending...' : 'Submit'}
  </button>
</form>

{#if response}
  <div class="mt-6 max-w-xl mx-auto bg-white text-black border border-primary p-4 rounded-lg shadow">
    <p class="font-mono text-sm text-primary mb-2">🦊 FabaverseGPT says:</p>
    <p>{response}</p>
  </div>
{/if}

{#if error}
  <p class="mt-4 text-red-600 text-sm text-center">{error}</p>
{/if}

{#if response}
  <div class="fixed bottom-6 right-6 bg-white text-black border border-primary shadow-xl rounded-lg px-6 py-4 max-w-sm animate-fade-in-up z-50">
    <p class="font-heading text-primary mb-1">🦊 FabaverseGPT</p>
    <p class="text-sm leading-relaxed">{response}</p>
    <button on:click={() => response = ''} class="mt-3 text-xs text-primary hover:underline">Close</button>
  </div>
{/if}