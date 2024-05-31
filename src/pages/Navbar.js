export default function Navbar() {
    return (
      <nav className="p-4 relative">
        <div className="container mx-auto flex justify-between items-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <div className="text-indigo-300 relative text-3xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2.5px] after:bg-sky-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
              after:duration-300 after:origin-center">
            <a href="#home">James Yu</a>
          </div>
          <ul className="flex">
            
            <li>
              <a href="#experience" className="text-sky-900 relative text-3xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2.5px] after:bg-indigo-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
              after:duration-300 after:origin-center mr-5 scroll-smooth">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sky-900 relative text-3xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2.5px] after:bg-indigo-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
              after:duration-300 after:origin-center mr-5">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sky-900 relative text-3xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2.5px] after:bg-indigo-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
              after:duration-300 after:origin-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Line under the navbar */}
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </nav>
    )
  }
  