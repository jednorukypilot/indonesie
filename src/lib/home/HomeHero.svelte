<script>
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
	<Hero
		images={{
			small: {
				'1x': 'images/pages/homepage/hero-sm.jpg',
				'2x': 'images/pages/homepage/hero-sm@2x.jpg'
			},
			large: {
				'1x': 'images/pages/homepage/hero.jpg',
				'2x': 'images/pages/homepage/hero@2x.jpg'
			}
		}}
	/>
	<div class="absolute inset-0 block h-full w-full bg-[#212529]/60 p-4">
		<div class="flex h-full w-full flex-col items-center justify-center text-center text-white">
			<div class="max-w-4xl text-center">
				<h2 class="mb-4 font-serif text-3xl leading-tight font-bold text-white md:text-5xl">
					Investujte do pozemků v
					<span class="text-secondary">Indonésii</span>
				</h2>
				<p class="mb-6 text-xl text-gray-100 md:text-2xl">
					Váš kousek ráje, který roste na hodnotě
				</p>
				<p class="mx-auto mb-8 max-w-2xl text-base text-gray-100 md:text-lg">
					Objevte jedinečnou příležitost vlastnit pozemek v Indonésii – destinaci s rostoucí
					hodnotou a obrovským potenciálem pro pronájem. Spojte exotický životní styl s bezpečnou a
					výnosnou investicí.
				</p>

				<div class="flex flex-col items-center justify-center gap-12 sm:flex-row">
					<a href="#" class="bg-primary px-6 py-3 font-semibold text-gray-100 hover:bg-[#1b742f]">
						Více informací
					</a>
					<a href="#" class="bg-secondary px-6 py-3 font-semibold text-gray-900 hover:bg-[#cc9b38]">
						Katalog pozemků
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
