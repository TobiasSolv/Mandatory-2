<script>
	import { goto } from '$app/navigation';
</script>

<form method="POST" class="auth-form">
	<h1>Create User</h1>

	<div class="input-group">
		<input name="email" type="email" placeholder="Email" required />
	</div>

	<div class="input-group">
		<input name="password" type="password" placeholder="Password" required />
	</div>

	<button type="submit">Create Account</button>

	<div class="links">
		<a on:click={() => goto('/login_form')}>Cancel</a>
	</div>
</form>
