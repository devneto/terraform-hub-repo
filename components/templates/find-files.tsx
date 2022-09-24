import { SearchList } from "../organisms/search-list"

export const FindFiles: React.FC = () => {
    return (
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div>
                <SearchList />
            </div>
        </div>
    )
}