

function Navbar() {
    return(
        <nav className="bg-teal-700 navbar navbar-expand-lg py-6 relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <button
                    className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContentY"
                    aria-controls="navbarSupportedContentY"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        YARD
                    </button>
                    <a className="navbar-brand text-gray-50 text-xl font-extrabold" href="#!">
                        YARD
                    </a>
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
                    <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-gray-50 text-teal-600 font-medium text-base leading-tight uppercase rounded hover:text-teal-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                    <button type="button" className="inline-block px-6 py-2.5 bg-teal-500 text-white font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar