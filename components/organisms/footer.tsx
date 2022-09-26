import Link from "next/link"

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black w-full pt-12 pb-24 mt-20">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex gap-40">
                    <div className="flex items-start flex-col gap-4">
                        <h4 className="text-white text-lg font-bold">
                            Social
                        </h4>
                        <ul className="text-white flex flex-col gap-1">
                            <li><Link href='/'>Facebook</Link></li>
                            <li><Link href='/'>Twitter</Link></li>
                            <li><Link href='/'>Youtube</Link></li>
                            <li><Link href='/'>Instagram</Link></li>
                            <li><Link href='/'>Discord</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white text-lg font-bold">
                            Resources
                        </h4>
                        <ul className="text-white flex flex-col gap-1">
                            <li><Link href='/'>Documentation</Link></li>
                            <li><Link href='/'>API</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-start flex-col gap-4">
                        <h4 className="text-white text-lg font-bold">
                            Social
                        </h4>
                        <ul className="text-white flex flex-col gap-1">
                            <li><Link href='/'>Documentation</Link></li>
                            <li><Link href='/'>API</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <h3 className="text-white text-2xl">terraform<span className="font-bold">hub</span></h3>
                </div>
            </div>
        </footer>
    )
}