import Link from "next/link";

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg py-4 relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <button
                            className="navbar-toggler border-0 py-3 leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg className="w-6 h-6 text-teal-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                        <Link href="/">
                            <a className="navbar-brand text-teal-700 smx:hidden text-xl font-extrabold" >
                                YARD
                            </a>                        
                        </Link>

                    </div>
                    <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                            <li className="nav-item">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
                            </li>
                            <li className="nav-item mb-2 lg:mb-0">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:ml-auto">
                        <Link href="/login">
                            <a className="inline-block px-8 py-2.5 mr-2 bg-transparent border-2 border-teal-600 text-teal-600 font-medium text-base leading-tight rounded hover:text-teal-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Login
                            </a>
                        </Link>
                        <Link href = "/signup">
                            <a className="inline-block px-8 py-2.5 border-2 border-teal-600 bg-teal-600 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-teal-700 hover:border-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:border-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Sign up
                            </a>
                        </Link>
                    </div>
                </div>
                <h r/>
            </nav>
            <hr/>        
        </>


    )
}
export default Navbar