<script>
	import { goto } from '$app/navigation';
	import toastr from 'toastr';

	let email = '';

	function handleLogin(event) {
		event.preventDefault();
		if (email) {
			toastr.success('Success');
			return;
		}
	}
</script>

<form on:submit={handleLogin} method="POST" class="auth-form">
	<h1>Forgot password</h1>

	<div class="input-group">
		<input name="email" type="email" placeholder="Email" required />
	</div>

	<button type="submit">Enter</button>

	<div class="links">
		<a on:click={() => goto('/login_form')}>Cancel</a>
	</div>
</form>
