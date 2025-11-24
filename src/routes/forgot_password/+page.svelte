<script>
	import { goto } from '$app/navigation';
</script>

<form method="POST" class="auth-form">
	<h1>Forgot password</h1>

	<div class="input-group">
		<input name="email" type="email" placeholder="Email" required />
	</div>

	<button type="submit">Enter</button>

	<div class="links">
		<a on:click={() => goto('/login_form')}>Cancel</a>
	</div>
</form>
