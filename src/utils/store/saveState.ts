export default function saveState<T>(state: T, key: string) {
	try {
		const storedState = JSON.stringify(state);
		localStorage.setItem(key, storedState);
	} catch (e) {}
}
