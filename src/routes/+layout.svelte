<script lang="ts">
  import '$styles/global.css';
  import '$styles/app.css';
  // If Header component isn't strictly necessary for this layout file,
  // consider moving it to specific pages/components where it's used.
  // import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
  <title>Fabalos Automation — Smart Systems, Seamless Flows</title>
  <meta name="description" content="Fabalos Automation builds resilient workflows with Make.com, GPT, and n8n. Turn chaos into scalable systems with soul." />
  <meta name="keywords" content="automation, make.com, GPT, n8n, workflow automation, product tagging, systems design, Fabalos Automation, AI workflow" />
  <meta name="author" content="Fabalos" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fabalos.com" />
  <meta property="og:title" content="Fabalos Automation — Smart Systems, Seamless Flows" />
  <meta property="og:description" content="I build resilient systems using Make, GPT, and n8n. Automation with clarity, purpose, and soul." />
  <meta property="og:image" content="https://fabalos.com/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://fabalos.com" />
  <meta name="twitter:title" content="Fabalos Automation — Smart Systems, Seamless Flows" />
  <meta name="twitter:description" content="I build resilient systems using Make, GPT, and n8n. Automation with clarity, purpose, and soul." />
  <meta name="twitter:image" content="https://fabalos.com/og-image.png" />

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0F172A" />

  <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/512x512.png">
</svelte:head>

<div class="min-h-screen text-main font-sans" style="background-color: var(--background);">
  <slot />
</div>