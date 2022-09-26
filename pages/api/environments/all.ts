import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try{
            const environments = await prisma.environment.findMany({
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
            return res.status(200).json(environments)
        }catch(e){
            return res.status(400).json({ message: 'Bad request.' })
        }
       
    }

    return res.status(404).json({ message: 'Route not found.' })


}

