import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title } = req.body
        try{
            const category = await prisma.category.create({
                data: {
                    title
                },
            })
            return res.status(200).json(category)
        }catch(e){
            return res.status(400).json({ message: 'Bad request.' })
        }
       
    }

    return res.status(404).json({ message: 'Route not found.' })


}

