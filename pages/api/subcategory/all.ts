import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try{
            const categories = await prisma.subcategory.findMany()
            return res.status(200).json(categories)
        }catch(e){
            console.log(e)
            return res.status(400).json({ message: 'Bad request.' })
        }
       
    }

    return res.status(404).json({ message: 'Route not found.' })


}

