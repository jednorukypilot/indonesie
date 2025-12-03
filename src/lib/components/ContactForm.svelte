<script lang="ts">
	import {
		createContactForm,
		formatPhoneNumber,
		type ContactFormData
	} from '$lib/utils/contactForm';
	import { _ } from 'svelte-i18n';

	// Create form instance
	const { form, errors, state, handleChange, handleSubmit } = createContactForm();

	// State for form submission
	let isSubmitting = false;
	let submitMessage = '';
	let submitSuccess = false;

	// Handle phone number formatting
	const handlePhoneInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const formatted = formatPhoneNumber(target.value);
		form.update((values: ContactFormData) => ({ ...values, phone: formatted }));
		target.value = formatted;
	};

	// Custom submit handler with UI feedback
	const onSubmit = async (e: Event) => {
		e.preventDefault();
		isSubmitting = true;
		submitMessage = '';

		try {
			await handleSubmit(e);
			submitSuccess = true;
			submitMessage = $_('contact.form.success_message');
			// Reset form after successful submission
			form.set({
				name: '',
				email: '',
				phone: '',
				message: ''
			});
		} catch (error) {
			submitSuccess = false;
			submitMessage = $_('contact.form.error_message');
		} finally {
			isSubmitting = false;
		}
	};
</script>

<div class="mx-auto w-full max-w-lg p-6">
	<form on:submit={onSubmit} class="space-y-6">
		<!-- Name Field -->
		<div class="space-y-2">
			<input
				id="name"
				type="text"
				bind:value={$form.name}
				on:input={handleChange}
				placeholder={$_('contact.form.name_label')}
				class="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-4 placeholder-gray-400 shadow-sm transition-colors duration-200 focus:ring-2 focus:outline-none"
				class:border-red-300={$errors.name}
				class:focus:ring-red-500={$errors.name}
				class:focus:border-red-500={$errors.name}
			/>
			{#if $errors.name}
				<p class="text-sm text-red-600">{$errors.name}</p>
			{/if}
		</div>

		<!-- Email Field -->
		<div class="space-y-2">
			<input
				id="email"
				type="email"
				bind:value={$form.email}
				on:input={handleChange}
				placeholder={$_('contact.form.email_label')}
				class="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-4 placeholder-gray-400 shadow-sm transition-colors duration-200 focus:ring-2 focus:outline-none"
				class:border-red-300={$errors.email}
				class:focus:ring-red-500={$errors.email}
				class:focus:border-red-500={$errors.email}
			/>
			{#if $errors.email}
				<p class="text-sm text-red-600">{$errors.email}</p>
			{/if}
		</div>

		<!-- Phone Field -->
		<div class="space-y-2">
			<input
				id="phone"
				type="tel"
				bind:value={$form.phone}
				on:input={handlePhoneInput}
				placeholder={$_('contact.form.phone_label')}
				class="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-4 placeholder-gray-400 shadow-sm transition-colors duration-200 focus:ring-2 focus:outline-none"
				class:border-red-300={$errors.phone}
				class:focus:ring-red-500={$errors.phone}
				class:focus:border-red-500={$errors.phone}
			/>
			{#if $errors.phone}
				<p class="text-sm text-red-600">{$errors.phone}</p>
			{/if}
		</div>

		<!-- Message Field -->
		<div class="space-y-2">
			<textarea
				id="message"
				rows="4"
				bind:value={$form.message}
				on:input={handleChange}
				placeholder={$_('contact.form.message_label')}
				class="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-900 bg-gray-50 px-3 py-4 placeholder-gray-400 shadow-sm transition-colors duration-200 focus:ring-2 focus:outline-none"
				class:border-red-300={$errors.message}
				class:focus:ring-red-500={$errors.message}
				class:focus:border-red-500={$errors.message}
			></textarea>
			{#if $errors.message}
				<p class="text-sm text-red-600">{$errors.message}</p>
			{/if}
		</div>

		<!-- GDPR Agreement -->
		<div class="text-sm text-gray-600">
			<a
				class="my-2 text-sm text-gray-300 hover:text-gray-100"
				href="/privacy-policy"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="inline"
					>{$_('contact.form.agree_label_p1')}<span class="underline"
						>{$_('contact.form.agree_label_p2')}</span
					></span
				>
			</a>
		</div>
		<!-- Submit Button -->
		<button
			type="submit"
			disabled={isSubmitting || !$state.isValid}
			class=" border-primary bg-primary w-full border-2 px-6 py-3 font-semibold text-gray-100 hover:bg-[#1b742f]"
		>
			{isSubmitting ? $_('contact.form.button_sending') : $_('contact.form.button_label')}
		</button>

		<!-- Submit Feedback Message -->
		{#if submitMessage}
			<div class="text-center">
				<p class="text-sm" class:text-green-600={submitSuccess} class:text-red-600={!submitSuccess}>
					{submitMessage}
				</p>
			</div>
		{/if}
	</form>
</div>
