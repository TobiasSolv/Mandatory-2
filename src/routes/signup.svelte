<script>
	export let form;
</script>

<h1>Create User</h1>

<form method="POST">
	<label>
		Email:
		<input type="email" name="email" required />
	</label>

	<label>
		Password:
		<input type="password" name="password" required />
	</label>

	<button type="submit">Create Account</button>

	{#if form?.error}
		<p style="color:red;">{form.error}</p>
	{/if}

	{#if form?.success}
		<p style="color:green;">User created!</p>
	{/if}
</form>
