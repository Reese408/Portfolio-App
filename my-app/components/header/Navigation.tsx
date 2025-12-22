'use client';
import Link from "next/link";

export default function NavigationBar(){
    return(
      <div>
        <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
            <div className="text-white text-lg font-bold"><Link href="/">My Website</Link></div>
            <div className="space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        </div>
        </nav>
      </div>
    );
}