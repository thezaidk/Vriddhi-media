
export default function () {
    return (
        <header className="flex justify-between items-center px-20 py-7">
            <div>
                <a href="/">
                    <img 
                        src={"/logo.png"} 
                        alt="logo"
                        className="h-10"
                    />
                </a>
            </div>
            <nav>
                <ul className="flex items-center gap-5 text-blue-700 font-semibold">
                    <li>
                        <a href="/newsletter" className="hover:text-black">Newsletter</a>
                    </li>
                    <li>
                        <a href="/services" className="hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-black">Contact</a>
                    </li>
                    <li>
                        <a href="/contact" className="border-2 border-blue-700 hover:bg-blue-700 hover:text-white p-3">Book a Session</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}