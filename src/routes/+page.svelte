<script>
	let value = $state('');

	/**
	 * @param {number} n
	 */
	function blockMainThread(n) {
		const ms = n * (100 / 9);
		const end = performance.now() + ms;
		while (performance.now() < end) {
			// busy-wait
		}
	}
</script>

<h1>Hello World!</h1>

<p>
	Clicking on the below numpad should update the input field and show up as an interaction. The
	larger the number, the longer the main thread block.
</p>

<div class="numpad">
	<input type="text" bind:value readonly />
	<div class="grid">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as n}
			<button
				onclick={() => {
					value += n;
					blockMainThread(n);
				}}>{n}</button
			>
		{/each}
	</div>
</div>

<p>
	Click this link for a soft navigation to <a href="/about"><code>/about</code></a>
</p>

<p>
	Click this link for a hard navigation to <a href="https://example.com"
		><code>https://example.com</code></a
	>
</p>

<style>
	.numpad {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: fit-content;
		margin-top: 1.5rem;
	}

	input {
		font-size: 1.5rem;
		padding: 0.5rem 0.75rem;
		width: 100%;
		box-sizing: border-box;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
	}

	button {
		font-size: 2rem;
		padding: 1rem 1.5rem;
		cursor: pointer;
	}
</style>
