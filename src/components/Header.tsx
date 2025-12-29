import { useState, useEffect } from "react";
import { DownloadIcon } from "lucide-react";

export const Header = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > 100) {
                    if (window.scrollY > lastScrollY) {
                        setVisible(false);
                    } else {
                        setVisible(true);
                    }
                } else {
                    setVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="container mx-auto flex rounded-full bg-white/80 backdrop-blur-lg p-2 justify-between items-center border border-gray-200 shadow-sm">
                {/* Logo */}
                <div className="flex gap-2 sm:gap-3 justify-center items-center font-sans text-xl md:text-2xl font-bold text-gray-900 pl-4">
                    <img
                        className="rounded-md w-8 h-8 md:w-10 md:h-10 shadow-sm"
                        src="/globals/saku-logo-512x512.png"
                        alt="Logo SaKu"
                    />
                    <span className="hidden sm:inline">
                        saku
                        <span className="italic font-medium text-gray-500 font-mono">.click</span>
                    </span>
                    <span className="sm:hidden">
                        sa<span className="text-primary">ku</span>
                    </span>
                </div>

                {/* Navigasi */}
                <nav className="hidden md:flex items-center space-x-8 font-mono font-medium">
                    <a
                        href="#fitur"
                        className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                    >
                        Kenapa SaKu?
                    </a>
                    <a
                        href="#lokasi"
                        className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                    >
                        Coverage Area
                    </a>
                </nav>

                {/* Tombol CTA */}
                <a href="#install" className="flex items-center justify-center font-mono font-semibold bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 text-xs sm:text-sm shrink-0 shadow-sm">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    <span>Unduh App</span>
                </a>
            </div>
        </header>
    );
};
