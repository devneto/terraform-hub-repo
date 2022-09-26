import { useEffect, useState } from "react";
import { getCategories } from "../../services/get-categories";
import { CardGroup } from "../organisms/card-group"
import { SearchList } from "../organisms/search-list"

export const FindFiles: React.FC = () => {


    return (
        <div className="container mx-auto">
            <div className="flex gap-20">
                <SearchList />
                <CardGroup />
            </div>
        </div>
    )
}