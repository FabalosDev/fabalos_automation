<script>
  export let title;
  export let summary;
  export let linkLabel;
  export let linkHref;
</script>

<div class="p-6 bg-white dark:bg-surface rounded-xl border border-primary shadow hover:shadow-lg transition">
  <h3 class="text-xl font-heading text-primary mb-2">{title}</h3>
  <p class="text-soft leading-relaxed mb-4">{summary}</p>
  <a href={linkHref} class="text-primary font-medium hover:underline">{linkLabel}</a>
</div>