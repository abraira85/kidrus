import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
    src: string
    text: string
    description: string
    buttonText?: string
    buttonLink?: string
    primary: boolean
}[]

const data = [
    { id: 1, primary: true, src: '/images/banners/banner1.jpg', text: 'Jumpsuits', description: 'Comfortable clothes for your little babies', buttonText: 'Discover', buttonLink: '#' },
    { id: 2, primary: false, src: '/images/banners/banner2.jpg', text: 'Girl Power', description: 'For a colorful summer', },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
