import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query
        try{
            const environment = await prisma.environment.findUnique({
                where: {
                    id: id
                },
                include: {
                    author: true,
                    subcategories: {
                        include: {
                            subcategory: {
                                include: {
                                    category: true
                                }
                            }
                        }
                    }
                }
            })
            return res.status(200).json(environment)
        }catch(e){
            return res.status(400).json({ message: 'Bad request.' })
        }
       
    }

    return res.status(404).json({ message: 'Route not found.' })


}

