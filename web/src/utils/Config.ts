
export function getBackendUrl(): string {
	return import.meta.env.PROD ? "http": "http://localhost:3000"
}
