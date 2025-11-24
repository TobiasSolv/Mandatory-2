<script>
	import { goto } from '$app/navigation';
</script>

<form class="auth">
	<h1>You have logged in</h1>

	<div class="links">
		<a on:click={() => goto('/login_form')}>Log out</a>
	</div>
</form>
