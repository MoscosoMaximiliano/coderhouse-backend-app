const Navbar = ({ logged }) => {
    return (

        <nav className="px-8 bg-gray-200 shadow shadow-gray-300 w-100 md:px-auto">
            <div className="container flex flex-wrap items-center justify-between mx-auto md:h-16 h-28 md:px-4 md:flex-nowrap">

                <div className="text-indigo-500 md:order-1">

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <div className="order-3 w-full text-gray-500 md:w-auto md:order-2">
                    <ul className="flex justify-between font-semibold">

                        <li className="text-indigo-500 md:px-4 md:py-2"><a href="#">Home</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="/real">Real</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="/products/form">Form</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
                    </ul>
                </div>
                {
                    !logged ? (
                        <div className="flex order-4 gap-2 row">
                            <div className="order-2 md:order-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl">
                                    <span>Register</span>
                                </button>
                            </div>
                            <div className="order-2 md:order-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Login</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="order-2 md:order-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl">
                                <span>Signout</span>
                            </button>
                        </div>
                    )
                }

            </div>
        </nav>

    )
}

export default Navbar