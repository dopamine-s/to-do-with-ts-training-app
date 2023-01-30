export default function loadState(key: string) {
	try {
		const storedState = localStorage.getItem(key);

		if (!storedState) return undefined;

		return JSON.parse(storedState);
	} catch (e) {}
}
