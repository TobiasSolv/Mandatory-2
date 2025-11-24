<script>
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';
</script>

<form method="POST" class="auth-form">
	<h1>Login</h1>

	<div class="input-group">
		<input name="email" type="email" placeholder="Email" bind:value={email} required />
	</div>

	<div class="input-group">
		<input name="password" type="password" placeholder="Password" bind:value={password} required />
	</div>

	<button type="submit"> Login </button>

	<div class="links">
		<a on:click={() => goto('/signup')}>Create an account</a>
		<a on:click={() => goto('/forgot_password')}>Forgot password?</a>
	</div>
</form>
