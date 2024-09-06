import { NextResponse } from 'next/server'
import { client } from '../../../lib/sanity.client'

export async function POST(request: Request) {
  try {
    const { _id, name, email, commentPost } = await request.json()

    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      commentPost,
      approved: false,
    })

    return NextResponse.json({ message: 'Comment submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json({ message: 'Error creating comment' }, { status: 500 })
  }
}