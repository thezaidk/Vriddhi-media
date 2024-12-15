import { Link } from "react-router-dom";

export default function () {
    return (
        <section className="grid grid-cols-5 items-center">
            <div className="flex flex-col gap-5 pr-5 col-span-2">
                <h1 className="text-blue-800 font-bold text-7xl">Get 30% More Traffic in Just 30 Days.</h1>
                <p className="text-blue-800 font-medium">AI powers the research people craft the content. Together, we present SEO strategies that can't be replicated. SEO strategies that convert readers into buyers.</p>
                <Link
                    to="/contact" 
                    className="flex justify-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg p-3 items-center font-bold"
                >
                    BOOK A MEETING
                </Link>
            </div>
            <div className="col-span-3">
                <img 
                    src="/home-cover.png"
                    alt="cover-img"
                    className="rounded-lg"
                />
            </div>
        </section>
    )
}