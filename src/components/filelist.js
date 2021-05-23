import { useEffect, useState } from 'react';
import files from '../files.json';
import Listing from './listing';

function FileList() {


    const [term, setTerm] = useState(null);

    const [filteredList, setFilteredList] = useState(files);

    const handleChange = (val) => {
        setTerm(val);
        const filtered = [];
        files.forEach(file => {
            if(file.name.includes(val)) filtered.push(file);
        });
        setFilteredList(filtered);
    }

    const navOpen = new Event('navopen');

    const handleNavOpen = () => {
        document.dispatchEvent(navOpen);
        console.log('open please');
    }

    return(
        <>
            <div className="bg-white lg:bg-gray-100 lg:pt-4 lg:pb-3 mb-6 border-b-2 border-gray-200">
                <div className="flex items-center">
                    <div className="lg:hidden w-18">
                        <button className="px-6 py-6 border-r-2" onClick={() => handleNavOpen()}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-grow bg-white rounded-md flex w-1/2 lg:w-auto space-x-3 px-4 py-2 items-center">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="#697888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input type="text" name="search" className="w-3/4 lg:w-auto lg:flex-grow" value={term} placeholder="Search" onChange={e => handleChange(e.target.value)}/>
                    </div>
                    <div className="flex space-x-3 p-2 lg:py-0 lg:pl-4 lg:space-x-4">
                        <a href="#" className="rounded-full lg:bg-gray-200 block overflow-hidden">
                            <svg className="stroke-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="-2 -2 28 28" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                        <a href="#" className="rounded-full bg-gray-300 block overflow-hidden">
                            <img src="https://picsum.photos/50" width="28" height="28" alt="Account name"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-6 lg:px-0">
                <h1 className="text-2xl font-bold mb-6">Documents</h1>

                <div className="pb-3 border-b-2 border-gray-200 flex space-x-6">
                    <div className="font-medium flex-grow">Name</div>
                    <div className="hidden lg:block font-medium w-48">Date Added</div>
                    <div className="hidden lg:block font-medium w-24">Size</div>
                </div>
                <div>
                    {
                        filteredList.map(file => <Listing name={file.name} type={file.type} datetime={file.datetime} size={file.size} />)
                    }
                </div>
            </div>
        </>
    )
}

export default FileList;