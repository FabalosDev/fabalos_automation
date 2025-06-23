<svelte:head>

  <title>Automation Case Studies | Fabalos</title>
  <meta name="description" content="Real automation systems built by Fabalos. Explore intelligent workflows using Make.com, n8n, GPT, and low-code tools." />
  <meta property="og:title" content="Automation Case Studies | Fabalos" />
  <meta property="og:description" content="Discover how Fabalos builds resilient, smart automations — from tagging systems to AI-enhanced workflows." />
  <meta property="og:image" content="/og-automation.png" />
  <meta name="author" content="Fabalos" />
</svelte:head><script>
  const caseStudies = [
    {
      title: "Case Study 1: Make.com Tagging Automation",
      summary: "Built for a media company to automate their product and article tagging workflow using Make.com, GPT, and Google Sheets.",
      features: [
        "✔️ Auto-collects data via Google Sheets",
        "✔️ GPT-based sorting and fallback for edge cases",
        "✔️ Conditional routing for parallel logic",
        "✔️ Reduced tagging time from hours to seconds"
      ],
      feedback: "\u201cWhat used to take 2 people half a day now runs in the background \u2014 clean and reliable.\u201d",
      ctaText: "View Screenshot",
      ctaHref: "/images/case-tagging.png"
    },
    {
      title: "Case Study 2: n8n Prompt Response Flow",
      summary: "Simulated a real-time AI response using a Tally form connected to an n8n webhook. The form input is parsed, a GPT-style reply is generated via expression logic, and the result is returned instantly.",
      features: [
        "✔️ Tally form as input frontend",
        "✔️ Webhook triggers n8n automation",
        "✔️ No GPT API needed — fake response is clean and instant",
        "✔️ Runs locally via tunnel or can be deployed to Railway"
      ],
      feedback: "\u201cFeels like a real AI — but it's all smart automation logic.\u201d",
      ctaText: "Try the Demo Form",
      ctaHref: "https://tally.so/r/your-form-id"
    }
  ];
</script><section class="section bg-background text-main">
  <div class="container stack center-text">
    <h2 class="text-3xl font-heading text-primary">Automation Case Studies</h2>
    <p class="text-lg text-soft max-w-2xl mx-auto">
      A behind-the-scenes look at how I build intelligent automation systems that save time, reduce errors, and scale with grace.
    </p>{#each caseStudies as cs}
  <div class="mt-12 space-y-6 text-left">
    <h3 class="text-2xl font-heading text-primary">🧠 {cs.title}</h3>
    <p class="text-soft leading-relaxed">{cs.summary}</p>
    <ul class="list-disc list-inside text-soft">
      {#each cs.features as feature}
        <li>{feature}</li>
      {/each}
    </ul>
    <p class="italic text-sm text-soft mt-4">{cs.feedback}</p>

    <a href={cs.ctaHref} class="inline-block mt-6 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition" target="_blank">
      <span>{cs.ctaText}</span>
    </a>
  </div>
{/each}

  </div>
</section>