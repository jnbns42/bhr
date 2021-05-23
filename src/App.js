import './App.css';

import Nav from './components/nav';
import FileList from './components/filelist';
import { useEffect, useRef } from 'react';

function App() {

  const sidebar = useRef();

  const handleNavClose = () => {
    sidebar.current.classList.add('opacity-0', '-z-50');
    sidebar.current.classList.remove('opacity-100', 'z-50');

  }

  useEffect(() => {
      let componentMounted = true;
      if (componentMounted) {
        document.addEventListener('navopen', () => {
          sidebar.current.classList.add('opacity-100', 'z-50');
          sidebar.current.classList.remove('opacity-0', '-z-50');
        });
      }
      return () => {
        componentMounted = false;
      }
  }, []);

  return (
    <div className="App">
      <div class="flex">
        <aside ref={sidebar} className="fixed inset-0 -z-50 lg:z-50 lg:static opacity-0 lg:opacity-100 lg:block bg-white lg:border-r-2 border-gray-200 w-full lg:w-72 pb-3 lg:min-h-screen transition duration-500">
          <div className="border-b-2 border-gray-200 lg:border-0 flex align-center justify-between">
            <a href="/" className="pt-3 pb-3">
              <svg height='50' viewBox='0 0 177 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M88 32.5C88 42.165 80.165 50 70.5 50H53V32.5C53 22.835 60.835 15 70.5 15C80.165 15 88 22.835 88 32.5Z' fill='#17CF97'/><path d='M88 67.5C88 57.835 95.835 50 105.5 50H123V67.5C123 77.165 115.165 85 105.5 85C95.835 85 88 77.165 88 67.5Z' fill='#17CF97'/><path d='M53 67.5C53 77.165 60.835 85 70.5 85H88V67.5C88 57.835 80.165 50 70.5 50C60.835 50 53 57.835 53 67.5Z' fill='#17CF97'/><path d='M123 32.5C123 22.835 115.165 15 105.5 15H88V32.5C88 42.165 95.835 50 105.5 50C115.165 50 123 42.165 123 32.5Z' fill='#17CF97'/></svg>
            </a>
            <button className="border-l-2 py-3 px-6 lg:hidden" onClick={() => {handleNavClose()}}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Nav/>
        </aside>
        <main className="bg-gray-100 min-h-screen w-full lg:px-24">
            <FileList/>
        </main>  
      </div>
    </div>
  );
}

export default App;
 