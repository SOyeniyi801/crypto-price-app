import React from 'react'
import showStore from '../stores/showStore'
import { useParams } from 'react-router-dom'

export default function Show() {
const store = showStore()
const params = useParams()

  React.useEffect(() => {
    console.log(params)
    store.fetchData(params.id)
    // eslint-disable-next-line
  }, [])
  return (
    <div>Show</div>
  )
}
