include .env
export

.PHONY: openapi
openapi: openapi_backend openapi_frontend

.PHONY: openapi_backend
openapi_backend:
	@./scripts/openapi-backend.sh spotify internal/spotify spotify

.PHONY: openapi_frontend
openapi_frontend:
	@./scripts/openapi-frontend.sh spotify