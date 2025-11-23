<script>
	import LoginForm from './LoginForm.svelte';
	export let form;
</script>

{#if form?.message}
	<p>{form.message}</p>
{/if}

<LoginForm />
