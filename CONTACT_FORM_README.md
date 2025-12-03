# Contact Form Integration Guide

## Overview

The contact form is built using `svelte-forms-lib` with `yup` validation. It includes proper TypeScript types, validation, and internationalization support.

## Files Created/Modified

### New Files

- `src/lib/utils/contactForm.ts` - Contains form logic, validation schema, and service interface
- This documentation file

### Modified Files

- `src/lib/components/ContactForm.svelte` - Complete contact form component with validation
- `src/lib/i18n/dictionaries/cs.json` - Added form labels and validation messages

## Form Features

✅ **Form Fields:**

- Name (Jméno a příjmení) - Required, 2-50 characters
- Email - Required, valid email format
- Phone (Telefon) - Required, Czech phone number format (+420 XXX XXX XXX)
- Message (Zpráva) - Required, 10-1000 characters

✅ **Validation:**

- Real-time validation with error messages
- Form submission disabled until all fields are valid
- Czech phone number formatting with auto-formatting
- All validation messages in Czech from i18n dictionary

✅ **Internationalization:**

- All labels and messages from i18n dictionary
- Easy to extend to other languages

## Backend Integration

To connect the form to your backend service, modify the `ContactService.submitContactForm` method in `src/lib/utils/contactForm.ts`:

```typescript
export class ContactService {
	static async submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
			return {
				success: true,
				message: 'Zpráva byla úspěšně odeslána. Brzy se vám ozveme!',
				data: result
			};
		} catch (error) {
			console.error('Error submitting contact form:', error);
			return {
				success: false,
				message: 'Chyba při odesílání zprávy. Zkuste to prosím znovu.'
			};
		}
	}
}
```

## API Endpoint Example

Your backend should expect a POST request to `/api/contact` with this structure:

```typescript
interface ContactFormData {
	name: string; // e.g., "Jan Novák"
	email: string; // e.g., "jan@example.com"
	phone: string; // e.g., "+420 123 456 789"
	message: string; // e.g., "Mám zájem o více informací..."
}
```

## Form Usage

The form is already integrated into the contact page at `/contact`. It's used in:

- `src/routes/contact/+page.svelte`

## Dependencies Added

- `svelte-forms-lib` - Form handling library for Svelte
- `yup` - Schema validation library

## Phone Number Formatting

The form automatically formats Czech phone numbers:

- Input: "123456789" → Output: "+420 123 456 789"
- Input: "00420123456789" → Output: "+420 123 456 789"
- Input: "+420123456789" → Output: "+420 123 456 789"

## Validation Rules

### Name

- Required
- Minimum 2 characters
- Maximum 50 characters

### Email

- Required
- Valid email format

### Phone

- Required
- Czech phone number format
- Regex pattern: `/^(\+420|00420)?\s?[1-9][0-9]{2}\s?[0-9]{3}\s?[0-9]{3}$/`

### Message

- Required
- Minimum 10 characters
- Maximum 1000 characters

## Customization

To modify validation rules, edit the `createValidationSchema` function in `src/lib/utils/contactForm.ts`.

To add new form fields:

1. Update the `ContactFormData` interface
2. Add validation rules to the schema
3. Add form field to the Svelte component
4. Add translations to the i18n dictionary

