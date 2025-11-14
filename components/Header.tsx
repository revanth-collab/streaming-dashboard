'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { RxAvatar } from 'react-icons/rx'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-xl font-extrabold tracking-tight hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30">
                        StreamDash
                    </Link>

                    <nav className="hidden md:flex gap-4 items-center" aria-label="Main navigation">
                        <Link href="/" className="text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 rounded px-2 py-1">Home</Link>
                        <Link href="/movies" className="text-sm hover:underline px-2 py-1 rounded">Movies</Link>
                        <Link href="/series" className="text-sm hover:underline px-2 py-1 rounded">Series</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    {/* <button
                        aria-label="Search"
                        onClick={() => setOpen(v => !v)}
                        className="cursor-pointer p-2 rounded-md hover:bg-white/6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20"
                    >
                        <HiOutlineMagnifyingGlass size={18} />
                    </button> */}
                    {showSearch ? (
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search..."
                            className="bg-white/10 text-white border border-white/20 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-white w-40 md:w-60 transition"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    const value = (e.target as HTMLInputElement).value.trim()
                                    if (value) window.location.href = `/search?query=${value}`
                                }
                                if (e.key === "Escape") setShowSearch(false)
                            }}
                        />
                    ) : (
                        <button
                            aria-label="Search"
                            onClick={() => setShowSearch(true)}
                            className="cursor-pointer p-2 rounded-md hover:bg-white/10"
                        >
                            <HiOutlineMagnifyingGlass size={18} />
                        </button>
                    )}

                    <button aria-label="Profile" className="p-1 rounded-full bg-white/5 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20">
                        <RxAvatar size={20} />
                    </button>

                    <button
                        aria-expanded={open}
                        onClick={() => setOpen(v => !v)}
                        className="md:hidden p-2 rounded-md hover:bg-white/6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20"
                    >
                        <span className="sr-only">Open menu</span>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-black/80 border-t border-white/5">
                    <div className="px-4 py-3 flex flex-col gap-2">
                        <Link href="/" className="py-2">Home</Link>
                        <Link href="/movies" className="py-2">Movies</Link>
                        <Link href="/series" className="py-2">Series</Link>
                    </div>
                </div>
            )}
        </header>
    )
}
