import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number
    keys: string[]
    name: string
}[]

const data = [
    { id: 1, keys: ['babies'], name: 'For Babies' },
    { id: 2, keys: ['boys'], name: 'For Boys' },
    { id: 3, keys: ['girls'], name: 'For Girls' },
    { id: 4, keys: ['home'], name: 'For Home' },
    { id: 5, keys: ['play'], name: 'For Play' },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
