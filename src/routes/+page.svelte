<div class="flex min-h-screen w-full flex-col">
	<h1 class="text-center text-4xl font-bold">Veterina Radotín</h1>
	<div class="grid grow grid-cols-2 content-center gap-24 p-16">
		<div class="flex h-128 items-center justify-center">
			<div
				id="bg-tile-kone"
				class="flex h-128 w-full max-w-175 items-center justify-center rounded-md px-10"
			>
				<h2 class="text-center text-5xl font-medium text-white">Koně</h2>
			</div>
		</div>
		<div class=" flex h-128 items-center justify-center">
			<div
				id="bg-tile-ordinace"
				class="flex h-128 w-full max-w-175 items-center justify-center rounded-md px-10"
			>
				<h2 class="font-figtree text-center text-5xl font-medium text-white">
					Ordinace malých zvířat
				</h2>
			</div>
		</div>
	</div>
</div>

<style>
	#bg-tile-kone {
		height: 100%;
		background:
			linear-gradient(
				to bottom,
				#005e3e,
				rgba(0, 94, 62, 0.9),
				rgba(0, 94, 62, 0.9),
				rgba(0, 94, 62, 1)
			),
			url('kone_bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	#bg-tile-ordinace {
		height: 100%;
		background:
			linear-gradient(
				to bottom,
				#003e5e,
				rgba(0, 62, 94, 0.85),
				rgba(0, 62, 94, 0.85),
				rgba(0, 62, 94, 1)
			),
			url('ordinace_bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
