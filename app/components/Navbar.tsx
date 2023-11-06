import { navitems } from "@/data/links";
import Link from "next/link";
import React from "react";
import { SiUnity } from "react-icons/si";
import ThemeSwitch from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="w-full bg-slate-300 dark:bg-secondary flex justify-between px-6 py-3">
      <a href="/" className="logo text-xl text-slate-500 font-semibold">
        Logo
      </a>

      <nav className="nav absolute flex flex-col shadow-md w-[50%] h-full right-0  px-4 md:static md:h-auto md:w-auto md:flex-row md:shadow-none duration-500">
        <button className="relative top-0 right-0 text-right text-xl md:hidden">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="hidden md:flex gap-x-8">
          {navitems.map((item) => (
            <Link
              href={item.link}
              className="nav-link text-xl mb-2 md:mr-4 text-slate-900 hover:text-slate-800 dark:text-white dark:hover:text-slate-200 font-semibold"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <ThemeSwitch />
    </header>
  );
};

export default Navbar;
