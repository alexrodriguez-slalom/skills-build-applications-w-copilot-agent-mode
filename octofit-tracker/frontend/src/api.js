const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const codespacesApiBaseUrl = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
const localApiBaseUrl = 'http://localhost:8000/api'

export const apiBaseUrl = codespaceName ? codespacesApiBaseUrl : localApiBaseUrl

export function normalizeCollectionResponse(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.data?.results)) {
    return payload.data.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  return []
}

export async function fetchCollection(resource) {
  const response = await fetch(`${apiBaseUrl}/${resource}/`)

  if (!response.ok) {
    throw new Error(`Unable to load ${resource}: ${response.status}`)
  }

  return normalizeCollectionResponse(await response.json())
}

export async function fetchEndpoint(endpoint, resource) {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Unable to load ${resource}: ${response.status}`)
  }

  return normalizeCollectionResponse(await response.json())
}