import { useEffect, useState } from "react"
import { getFiles } from "../../services/get-files";
import { Card } from "../molecules/card"

export const CardGroup: React.FC = () => {

    const [files, setFiles] = useState([]);


    const handleGetCategories = async () => {
        const { data } = await getFiles();
        setFiles(data);
    }

    useEffect(() => {
        handleGetCategories();
    }, [])

    return (
        <div className="p-3 w-full flex gap-10">
            {
                files.length > 0 ? files.map(({ title, description, id, subcategories, author }) => (
                    <Card id={id} key={id} title={title} description={description} category={subcategories[0].subcategory.category.title} author={author} />
                )) :
                    <>
                        {Array.from(Array(3).keys()).map((skeleton => (
                            <div key={skeleton} role="status" className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6">
                                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="flex items-center mt-4 space-x-3">
                                    <svg className="w-14 h-14 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                    <div>
                                        <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                                        <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        )))}
                    </>
            }
        </div>
    )
}