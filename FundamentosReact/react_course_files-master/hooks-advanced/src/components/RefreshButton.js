import React from 'react'

export default function RefreshButton({ cb }) {
  return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
}