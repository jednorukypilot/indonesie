/**
 * Highlights specific words in a title string
 * @param title - The original title text
 * @param highlights - Array of words/phrases to highlight
 * @returns Array of text parts with highlight information
 */
export function highlightText(
	title: string,
	highlights: string[]
): Array<{ text: string; highlighted: boolean }> {
	if (!highlights || highlights.length === 0) {
		return [{ text: title, highlighted: false }];
	}

	highlights.sort((a, b) => b.length - a.length);

	let result: Array<{ text: string; highlighted: boolean }> = [{ text: title, highlighted: false }];

	highlights.forEach((highlight) => {
		const newResult: Array<{ text: string; highlighted: boolean }> = [];
		result.forEach((part) => {
			if (part.highlighted) {
				newResult.push(part);
				return;
			}

			const regex = new RegExp(`(${highlight})`, 'gi');
			const splitText = part.text.split(regex);

			splitText.forEach((text, index) => {
				if (text) {
					const isHighlight = regex.test(text);
					newResult.push({ text, highlighted: isHighlight });
				}
			});
		});
		result = newResult;
	});

	return result;
}
