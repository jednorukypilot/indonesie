import { createForm } from 'svelte-forms-lib';
import * as yup from 'yup';

export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export interface ContactFormResponse {
	success: boolean;
	message: string;
	data?: ContactFormData;
}

// Create validation schema with Czech messages
export const createValidationSchema = () =>
	yup.object().shape({
		name: yup
			.string()
			.min(2, 'Jméno musí mít alespoň 2 znaky')
			.max(50, 'Jméno může mít maximálně 50 znaků')
			.required('Jméno je povinné'),
		email: yup.string().email('Neplatná emailová adresa').required('Email je povinný'),
		phone: yup
			.string()
			.matches(
				/^(\+420|00420)?\s?[1-9][0-9]{2}\s?[0-9]{3}\s?[0-9]{3}$/,
				'Neplatné telefonní číslo (použijte formát: +420 XXX XXX XXX)'
			)
			.required('Telefon je povinný'),
		message: yup
			.string()
			.min(10, 'Zpráva musí mít alespoň 10 znaků')
			.max(1000, 'Zpráva může mít maximálně 1000 znaků')
			.required('Zpráva je povinná')
	});

// Initial form values
const initialValues: ContactFormData = {
	name: '',
	email: '',
	phone: '',
	message: ''
};

// Submit handler placeholder - you can connect this to your service later
const handleSubmit = async (values: ContactFormData): Promise<ContactFormResponse> => {
	try {
		// TODO: Replace this with your actual API call
		console.log('Form submitted with values:', values);

		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// For now, just simulate a successful response
		return {
			success: true,
			message: 'Zpráva byla úspěšně odeslána. Brzy se vám ozveme!',
			data: values
		};
	} catch (error) {
		return {
			success: false,
			message: 'Chyba při odesílání zprávy. Zkuste to prosím znovu.'
		};
	}
};

// Create and export the form
export const createContactForm = () => {
	return createForm({
		initialValues,
		validationSchema: createValidationSchema(),
		onSubmit: handleSubmit
	});
};

// Utility function to format phone number
export const formatPhoneNumber = (value: string): string => {
	// Remove all non-digit characters except +
	let cleaned = value.replace(/[^\d+]/g, '');

	// If starts with +420, format as +420 XXX XXX XXX
	if (cleaned.startsWith('+420')) {
		const digits = cleaned.slice(4);
		if (digits.length <= 3) return `+420 ${digits}`;
		if (digits.length <= 6) return `+420 ${digits.slice(0, 3)} ${digits.slice(3)}`;
		return `+420 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
	}

	// If starts with 00420, convert to +420 format
	if (cleaned.startsWith('00420')) {
		const digits = cleaned.slice(5);
		if (digits.length <= 3) return `+420 ${digits}`;
		if (digits.length <= 6) return `+420 ${digits.slice(0, 3)} ${digits.slice(3)}`;
		return `+420 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
	}

	// If starts with just digits (Czech number without country code)
	if (/^[1-9]/.test(cleaned)) {
		if (cleaned.length <= 3) return `+420 ${cleaned}`;
		if (cleaned.length <= 6) return `+420 ${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
		return `+420 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)}`;
	}

	return value;
};

// API service placeholder
export class ContactService {
	static async submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
		// TODO: Implement your actual API call here
		// Example:
		// const response = await fetch('/api/contact', {
		//   method: 'POST',
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		//   body: JSON.stringify(data),
		// });
		// return await response.json();

		return handleSubmit(data);
	}
}
