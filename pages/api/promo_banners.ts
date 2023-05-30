import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
    text: string
}[]

const data = [
    { id: 1, text: '10% off all kidswear + free shipping when you spend $60 or more' },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
