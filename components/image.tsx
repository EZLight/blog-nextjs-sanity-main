import React from 'react'

export default function Image(props: { imgSrc: string | undefined; style: React.CSSProperties | undefined }) {
  return (
    <div><img className="w3-image" src={props.imgSrc} style={props.style} />
</div>
  )
}


