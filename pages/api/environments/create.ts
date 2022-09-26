import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, src, authorId, subcategoryId } = req.body
        try{
            const environment = await prisma.environment.create({
                data: {
                    title, description, src, authorId, subcategories: {
                        create: [
                            { subcategory : { connect: { id: subcategoryId }}}
                        ]
                    }
                },
            })
            return res.status(200).json(environment)
        }catch(e){
            return res.status(400).json({ message: 'Bad request.' })
        }
       
    }

    return res.status(404).json({ message: 'Route not found.' })


}

