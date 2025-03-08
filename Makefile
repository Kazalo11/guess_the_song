include .env
export

.PHONY: openapi_http
openapi_http:
	@./scripts/openapi-backend.sh spotify internal/routes/spotify routes
	