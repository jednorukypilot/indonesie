<script lang="ts">
	import type { CatalogPointType } from '$lib/enums';
	import { t } from 'svelte-i18n';
	import { base } from '$app/paths';

	export let type: CatalogPointType;
	export let number: number;
	export let style: 'light' | 'dark' = 'dark';

	function getIconForType(pointType: CatalogPointType): string {
		if (style === 'light') {
			switch (pointType) {
				case 'area':
					return `${base}/images/icons/planning-white.svg`;
				case 'plot_count':
					return `${base}/images/icons/blueprint-white.svg`;
				case 'estate_count':
					return `${base}/images/icons/plot-white.svg`;
				default:
					return '';
			}
		}
		switch (pointType) {
			case 'area':
				return `${base}/images/icons/planning.svg`;
			case 'plot_count':
				return `${base}/images/icons/blueprint.svg`;
			case 'estate_count':
				return `${base}/images/icons/plot.svg`;
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

	function getTextColorClass(style: 'light' | 'dark'): string {
		return style === 'light' ? 'text-white' : 'text-gray-800';
	}

	$: currentIcon = getIconForType(type);
	$: typeLabel = getTypeLabel(type);
	$: formattedValue = getFormattedValue(type, number);
	$: textColorClass = getTextColorClass(style);
</script>

<div class="flex flex-col items-start justify-center">
	<img src={currentIcon} alt={`${type} icon`} class="mb-2 h-12 w-12" />
	<span class="text-sm font-medium {textColorClass}">{typeLabel}</span>
	<span class="text-lg font-bold {textColorClass}">{formattedValue}</span>
</div>