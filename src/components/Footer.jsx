
export default function () {
    return (
        <footer className="flex justify-center gap-28 bg-blue-700 text-white mx-20 mb-3 py-16 rounded">
            <div className="flex flex-col gap-10">
                <h2 className="text-xl font-semibold">Let's Work Together</h2>
                <div>
                    <p>Phone<br/>+910266537839</p>
                    <p>info@vriddhi.media</p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="text-xl font-semibold">Get in the Know</h2>
                <form 
                    onSubmit={() => {}}
                    className="flex flex-col gap-5 w-full"
                >
                    <label className="flex-1">Enter your Email
                        <input type="email" className="bg-blue-700 w-full border-b-2" />
                    </label>
                    <button className="border-2 border-orange-400 p-2">SUBSCRIBE</button>
                </form>
            </div>
            <div className="flex flex-col gap-10 w-[20rem]">
                <h2 className="text-xl font-semibold">Stay in Touch</h2>
                <form 
                    onSubmit={() => {}}
                    className="flex flex-wrap gap-4"
                >
                    <div className="flex gap-4 w-full">
                        <label className="flex-1">First Name
                            <input type="text" className="bg-blue-700 w-full border-b-2"/>
                        </label>
                        <label className="flex-1">Last Name
                            <input type="text" className="bg-blue-700 w-full border-b-2"/>
                        </label>
                    </div>
                    <div className="flex gap-4 w-full">
                        <label className="flex-1">Email
                            <input type="email" className="bg-blue-700 w-full border-b-2"/>
                        </label>
                        <label className="flex-1">Subject
                            <input type="text" className="bg-blue-700 w-full border-b-2"/>
                        </label>
                    </div>
                    <label className="w-full">Leave us a message...
                        <textarea className="bg-blue-700 w-full border-b-2 h-24"/>
                    </label>
                    <button type="submit" className="mt-4 border-2 border-orange-400 px-5 py-2">SUBMIT</button>
                </form>
            </div>
        </footer>
    )
}