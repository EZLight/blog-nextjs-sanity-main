import React from 'react'


export default function Desktop(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined , title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined }) {
  return (
    <div className=''>


<section className='w3-padding-16' >
 
{props.children}
</section>
    </div>
  )
}

