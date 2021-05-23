function Nav() {
    return (
    <nav className="c-sidebar__nav p-5 space-y-1">
        <a href="#" className="rounded-md block flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 text-sm">
            <svg className="stroke-current text-gray-500" height="20" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Dashboard</span>
        </a>
        <a href="#" className="rounded-md bg-gray-100 block flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 text-sm">
            <svg className="fill-current stroke-current text-blue-600" height="15" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.2857 22.1607V9.1964C28.2857 8.2204 27.4939 7.42855 26.5179 7.42855H13.5536C12.5776 7.42855 11.7857 6.63669 11.7857 5.66069V4.48212C11.7857 3.50611 10.9939 2.71426 10.0179 2.71426H4.125C3.149 2.71426 2.35714 3.50611 2.35714 4.48212V22.1607C2.35714 23.1367 3.149 23.9285 4.125 23.9285H26.5179C27.4939 23.9285 28.2857 23.1367 28.2857 22.1607ZM30.6429 9.1964V22.1607C30.6429 24.4258 28.7829 26.2857 26.5179 26.2857H4.125C1.85993 26.2857 0 24.4258 0 22.1607V4.48212C0 2.21705 1.85993 0.357117 4.125 0.357117H10.0179C12.2829 0.357117 14.1429 2.21705 14.1429 4.48212V5.0714H26.5179C28.7829 5.0714 30.6429 6.93134 30.6429 9.1964Z"/>
            </svg>
            <span>Documents</span>
        </a>
        <a href="#" className="rounded-md block flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 text-sm">
            <svg className="stroke-current text-gray-500" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Calendar</span>
        </a>
        <a href="#" className="rounded-md block flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 text-sm">
            <svg className=" stroke-current text-gray-500" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Reports</span>
        </a>
    </nav>
    )
}

export default Nav;