import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, categoryId } = req.body
        try{
            const subcategory = await prisma.subcategory.create({
                data: {
                    title,
                    categoryId
                },
            })
            return res.status(200).json(subcategory)
        }catch(e){
            console.log(e)
            return res.status(400).json({ message: 'Bad request.' })
        }
       
    }

    return res.status(404).json({ message: 'Route not found.' })


}

