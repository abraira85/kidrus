import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number
    keys: string[]
    src: string
    name: string
}[]

const data = [
    { id: 1, keys: ['babies'], src: '/images/categories/baby.png', name: 'Baby & Toddler' },
    { id: 2, keys: ['girls'], src: '/images/categories/girl.png', name: 'For Girls'},
    { id: 3, keys: ['boys'], src: '/images/categories/boy.png', name: 'For Boys' },
    { id: 4, keys: ['home', 'play'], src: '/images/categories/toys.png', name: 'Home & Toys' },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
