import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'
import ResourceTable from './ResourceTable'

function ResourcePage({ title, eyebrow, resource, columns }) {
  const [rows, setRows] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadRows() {
      try {
        setStatus('loading')
        const collection = await fetchCollection(resource)

        if (isActive) {
          setRows(collection)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isActive) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadRows()

    return () => {
      isActive = false
    }
  }, [resource])

  return (
    <section className="resource-page">
      <div className="section-kicker">{eyebrow}</div>
      <div className="section-heading">
        <h1>{title}</h1>
        <span className="record-count">{rows.length} records</span>
      </div>

      {status === 'loading' && <div className="state-panel">Loading {resource}...</div>}
      {status === 'error' && <div className="state-panel error">{error}</div>}
      {status === 'ready' && <ResourceTable columns={columns} rows={rows} />}
    </section>
  )
}

export default ResourcePage