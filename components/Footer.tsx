import React from 'react'

export default function Footer(props: { settings: string | undefined }) {
  return (
<footer style={{position: "fixed", left: 0, bottom: 0, width: "100%" }} className={props.settings}>&copy; AntiBlasphemy Studios 2024</footer>
  )
}
