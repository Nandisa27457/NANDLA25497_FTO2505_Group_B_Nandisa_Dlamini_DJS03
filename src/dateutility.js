// Formats a date string to 'Month Day, Year' (e.g., September 21, 2025)
export function formatDate(dateString) {
	if (!dateString) return '';
	const date = new Date(dateString);
	if (isNaN(date)) return dateString;
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
 