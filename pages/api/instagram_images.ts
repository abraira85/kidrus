import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
    src: string
    alt: string,
}[]

const data = [
    { id: 1, src: '/images/instagram/1.jpg', alt: 'instagram1'},
    { id: 2, src: '/images/instagram/2.jpg', alt: 'instagram2' },
    { id: 3, src: '/images/instagram/3.jpg', alt: 'instagram3' },
    { id: 4, src: '/images/instagram/4.jpg', alt: 'instagram4' },
    { id: 5, src: '/images/instagram/5.jpg', alt: 'instagram5' },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
