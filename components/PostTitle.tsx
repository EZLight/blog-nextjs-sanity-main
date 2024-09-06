import React, {FC, ReactNode} from 'react'

interface Props {
  children?: ReactNode
}

export const PostTitle: FC<Props> = ({ children, ...props }) => {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl" {...props}>
      {children}
    </h1>
  )
}


export default PostTitle