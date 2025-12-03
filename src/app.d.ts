// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

/// <reference types="./lib/types/modules" />

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: import('$lib/i18n').Lang;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
