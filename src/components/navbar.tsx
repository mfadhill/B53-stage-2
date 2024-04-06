const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="text-xl tracking-tight ml-10 text-blue-800 font-bold">DumbCash</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          </div>
          <div>
          <a className="inline-block text-blue-600 mx-0" href="#"><p className="font-bold">Login</p></a>
          <a className="inline-block border border-blue-100 mx-16 rounded py-2 px-4 bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold" href="#">Sign Up</a>
          </div>
        </div>
      </nav>
    )
}
export default Navbar