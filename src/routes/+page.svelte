<script>
	export let type = 'login'; // 'login' | 'signup' | 'forgot'
	export let onSubmit;

	let email = '';
	let password = '';
</script>

<form on:submit|preventDefault={() => onSubmit(email, password)} class="auth-form">
	<h1>
		{#if type === 'login'}Login{/if}
		{#if type === 'signup'}Create Account{/if}
		{#if type === 'forgot'}Reset Password{/if}
	</h1>

	<div class="input-group">
		<input type="email" placeholder="Email" bind:value={email} required />
	</div>

	{#if type !== 'forgot'}
		<div class="input-group">
			<input type="password" placeholder="Password" bind:value={password} required />
		</div>
	{/if}

	<button type="submit">
		{#if type === 'login'}Login{/if}
		{#if type === 'signup'}Sign Up{/if}
		{#if type === 'forgot'}Send Reset Link{/if}
	</button>

	<div class="links">
		{#if type === 'login'}
			<a href="/signup">Create an account</a>
			<a href="/forgot-password">Forgot password?</a>
		{/if}

		{#if type === 'signup'}
			<a href="/login">Already have an account?</a>
		{/if}

		{#if type === 'forgot'}
			<a href="/login">Back to login</a>
		{/if}
	</div>
</form>

<style>
	:global(body) {
		font-family: 'Inter', system-ui, sans-serif;
		background: linear-gradient(135deg, #f0f4ff, #e0eaff);
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.auth-form {
		background: #fff;
		padding: 3rem;
		width: 100%;
		max-width: 400px;
		border-radius: 1.2rem;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		animation: fadeIn 0.5s ease-out;
	}

	h1 {
		text-align: center;
		margin-bottom: 1.5rem;
		color: #1e293b;
		font-size: 1.8rem;
		font-weight: 600;
	}

	.input-group {
		position: relative;
		margin-bottom: 1.2rem;
	}

	input {
		width: 92%;
		padding: 0.9rem 1rem;
		border: 1px solid #cbd5e1;
		border-radius: 0.8rem;
		font-size: 1rem;
		outline: none;
		transition:
			border 0.2s,
			box-shadow 0.2s;
	}

	input:focus {
		border-color: #2563eb;
		box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
	}

	button {
		width: 100%;
		background: linear-gradient(135deg, #2563eb, #3b82f6);
		color: white;
		border: none;
		padding: 1rem;
		font-size: 1rem;
		border-radius: 0.8rem;
		cursor: pointer;
		transition:
			background 0.3s ease,
			transform 0.2s ease;
	}

	button:hover {
		background: linear-gradient(135deg, #1d4ed8, #2563eb);
		transform: translateY(-1px);
	}

	.links {
		text-align: center;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
