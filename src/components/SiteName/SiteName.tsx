import React from 'react'

interface SiteNameProps {
  name: string
}

function SiteName({ name }: SiteNameProps) {
  return <h1>{name}</h1>
}

export default SiteName
