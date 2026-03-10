import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menu = [
        { name: "Home", link: "#" },
        { name: "About", link: "#" },
        { name: "Services", link: "#" },
        { name: "Portfolio", link: "#" },
        { name: "Contact", link: "#" },
    ];

    return (
        <nav className="fixed w-full bg-black/70 backdrop-blur-md text-white z-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center h-16">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Khaled
                    </h1>
                    <ul className="hidden md:flex gap-8">

                        {menu.map((item, index) => (

                            <li key={index} className="relative group">

                                <a className="cursor-pointer">
                                    {item.name}
                                </a>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

                            </li>

                        ))}

                    </ul>
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >

                        <div className="space-y-1">
                            <span className={`block w-6 h-[2px] bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                            <span className={`block w-6 h-[2px] bg-white transition ${open ? "opacity-0" : ""}`}></span>
                            <span className={`block w-6 h-[2px] bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>

                        </div>

                    </div>

                </div>

            </div>
            <div className={`md:hidden bg-black transition-all duration-500 ${open ? "max-h-96 py-6" : "max-h-0 overflow-hidden"}`}>

                <ul className="flex flex-col items-center gap-6">

                    {menu.map((item, index) => (

                        <li key={index}>

                            <a className="text-lg hover:text-yellow-400">
                                {item.name}
                            </a>

                        </li>

                    ))}

                </ul>

            </div>

        </nav>
    );
};

export default Navbar;