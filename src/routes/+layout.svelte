<script lang="ts">
	import '../app.css';
	import logo from '../../static/veterina_logo.svg';

	let { children } = $props();
</script>

<div id="bg-layout">
	<div class="">
		{@render children()}
	</div>
</div>

<style>
	#bg-layout {
		height: 100%;
		width: 100%;
		min-height: 100vh;
		background-color: #0b6e4d;
		background-image: url('../../static/veterina_logo.svg');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
