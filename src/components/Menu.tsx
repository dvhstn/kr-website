import { useState } from 'react';
import klr_logo from '../assets/klr_logo.png';

const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Availability', href: '#' },
    { label: 'Contact', href: '#' },
];

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="relative z-50">
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    aria-label="Menu"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span className={`block h-0.5 w-6 bg-green-900 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-green-900 my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-green-900 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>
            {open && (
                <>
                    {/* Mobile: fullscreen overlay */}
                    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
                        <img src={klr_logo} alt="KLR Logo" className="h-48 w-auto mb-8 mt-4 pl-10" />
                        <ul className="w-full max-w-xs">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="block px-8 py-6 text-green-900 font-serif text-2xl text-center hover:bg-green-50 hover:text-green-700 transition-colors rounded-lg"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Desktop: horizontal bar below header (no logo) */}
                        <div className="hidden md:fixed md:top-28 md:left-1/2 md:-translate-x-1/2 md:bg-white md:shadow md:z-40 md:flex md:flex-col md:items-center md:py-4 md:w-auto md:max-w-2xl mt-6 rounded-4xl">
                        <ul className="flex flex-row justify-center w-full">
                            {menuItems.map((item) => (
                                <li key={item.label} className="mx-2">
                                    <a
                                        href={item.href}
                                        className="px-4 py-2 text-green-900 font-serif text-lg text-center hover:bg-green-50 hover:text-green-700 transition-colors rounded-lg"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Menu;