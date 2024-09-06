import React from 'react'

function Center(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined }) {
  return (
    <div style={{width:'50%', display:'block', marginLeft:'auto', marginRight:'auto'}}>{props.children}</div>
  )
}

export default Center