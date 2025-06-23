<script>
  import CaseCard from '$lib/components/CaseCard.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PromptForm from '$lib/components/PromptForm.svelte';
</script>

<section class="mt-8 grid gap-20 section bg-background text-main">
  <div class="container stack center-text">
    <h1 class="text-4xl font-heading text-primary mb-4">Case Studies</h1>
    <p class="text-soft text-lg max-w-2xl mx-auto">
      Real-world automation flows built with purpose — using <strong>n8n</strong>, <strong>GPT</strong>, <strong>Make.com</strong>, and <strong>Tally</strong>.
    </p>

    <div class="grid-two mt-12">
      <CaseCard
        title="Make.com Product Tagging System"
        summary="Automated metadata tagging workflow for a media client using GPT and Make.com. Reduced manual effort from hours to seconds."
        linkLabel="View Summary"
        linkHref="#tagging"
      />

      <CaseCard
        title="n8n AI Prompt Flow Demo"
        summary="Simulated GPT-like replies using a Tally form connected to an n8n webhook. Fully low-code, no API cost."
        linkLabel="Try It Live"
        linkHref="#prompt-demo"
      />
    </div>
  </div>

  <div class="container stack">
    <h1 class="text-4xl font-heading text-primary mb-6">Case Studies</h1>
    <p class="text-soft max-w-2xl">
      These aren’t just workflows — they’re working philosophies.  
      Each case study reveals how I bring clarity and elegance to automation chaos.
    </p>

    <div id="tagging" class="mt-12 border border-primary rounded-xl p-6 bg-surface text-soft">
      <h2 class="text-2xl font-heading text-primary mb-2">Make.com Product Tagging System</h2>
      <p class="leading-relaxed">
        A robust metadata tagging pipeline using Google Sheets + GPT via Make.com.  
        Enabled parallel tagging, intelligent fallback logic, and auto-sorting.  
        Scalable and designed to remove bottlenecks in high-volume content workflows.
      </p>
      <img src="/images/case-tagging1.png" alt="Tagging Case Study Screenshot 1" class="mt-6 rounded shadow" />
      <img src="/images/case-tagging2.png" alt="Tagging Case Study Screenshot 2" class="mt-6 rounded shadow" />
    </div>

    <div id="prompt-demo" class="mt-12 border border-primary rounded-xl p-6 bg-surface text-soft">
      <h2 class="text-2xl font-heading text-primary mb-2">n8n Prompt-to-Response Flow</h2>
      <p class="leading-relaxed">
        Connected a form to an n8n webhook to simulate real-time GPT responses.  
        Extracts user input, runs expression logic, and returns a styled reply instantly — no OpenAI cost.  
        Hosted via Render and demoed live with form + fake GPT output.
      </p>

      <!-- 🔗 Embed your form here -->
      <div class="mt-8">
        <PromptForm />
      </div>
    </div>

    <div class="mt-12">
      <a href="/" class="text-primary hover:underline font-medium">← Back to Home</a>
    </div>
  </div>
</section>

<Footer />