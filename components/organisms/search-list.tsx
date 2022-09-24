import { Accordion } from "../molecules/accordion"
import { List } from "../molecules/list"


export const SearchList: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">Filter templates</span>
            <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 
                    rounded-lg border border-gray-300 
                    outline-0
                    focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Ex: Amazon S3 Bucket" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Accordion title="Services">
                    <List items={[{name: 'Azure', slug: 'azure'}, { name: 'Amazon', 'slug': 'amazon'}]}/>
                </Accordion>
                <Accordion title="Use cases">
                    <List items={[{name: 'Azure', slug: 'azure'}, { name: 'Amazon', 'slug': 'amazon'}]}/>
                </Accordion>
            </div>
        </div>
    )
}