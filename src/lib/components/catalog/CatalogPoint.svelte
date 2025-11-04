<script lang="ts">
	import type { CatalogPointType } from '$lib/enums';
	import { t } from 'svelte-i18n';

	export let type: CatalogPointType;
	export let number: number;

	function getIconForType(pointType: CatalogPointType): string {
		switch (pointType) {
			case 'area':
				return 'images/icons/planning.svg';
			case 'plot_count':
				return 'images/icons/blueprint.svg';
			case 'estate_count':
				return 'images/icons/plot.svg';
			default:
				return '';
		}
	}

	function getFormattedValue(pointType: CatalogPointType, value: number): string {
		switch (pointType) {
			case 'area':
				return `${value} m²`;
			case 'plot_count':
				return `${value} x`;
			case 'estate_count':
				return `${value} x`;
			default:
				return `${value}`;
		}
	}

	function getTypeLabel(pointType: CatalogPointType): string {
		switch (pointType) {
			case 'area':
				return $t('catalog.listings.area');
			case 'plot_count':
				return $t('catalog.listings.plot_count');
			case 'estate_count':
				return $t('catalog.listings.estate_count');
			default:
				return '';
		}
	}

	$: currentIcon = getIconForType(type);
	$: typeLabel = getTypeLabel(type);
	$: formattedValue = getFormattedValue(type, number);
</script>

<div class="flex flex-col items-start justify-center">
	<img src={currentIcon} alt={`${type} icon`} class="mb-2 h-12 w-12" />
	<span class="text-sm font-medium text-gray-800">{typeLabel}</span>
	<span class="text-lg font-bold text-gray-800">{formattedValue}</span>
</div>
