import React, {FC, ReactNode} from 'react'

interface Props {
children?: ReactNode
}


export const BlogContainer: FC<Props> = ({ children, ...props }) => (
  <div className="container mx-auto px-5" {...props}>{children}</div>
)

export default BlogContainer