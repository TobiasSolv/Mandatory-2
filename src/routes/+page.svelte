<script>
	export let type = 'login';
	export let onSubmit;

	let email = '';
	let password = '';
</script>

<form on:submit|preventDefault={() => onSubmit(email, password)} class="auth-form">
	<h1>
		{#if type === 'login'}Login{/if}
	</h1>

	<div class="input-group">
		<input type="email" placeholder="Email" bind:value={email} required />
	</div>

	<div class="input-group">
		<input type="password" placeholder="Password" bind:value={password} required />
	</div>

	<button type="submit">
		{#if type === 'login'}Login{/if}
	</button>

	<div class="links">
		{#if type === 'login'}
			<a href="/signup">Create an account</a>
			<a href="/forgot-password">Forgot password?</a>
		{/if}
	</div>
</form>
