import './App.css';

import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <div class="flex">
        <aside className="c-sidebar border-r-2 border-gray-300 w-1/5 py-3 min-h-screen">
          <a href="/">
            <svg height='50' viewBox='0 0 177 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M88 32.5C88 42.165 80.165 50 70.5 50H53V32.5C53 22.835 60.835 15 70.5 15C80.165 15 88 22.835 88 32.5Z' fill='#17CF97'/><path d='M88 67.5C88 57.835 95.835 50 105.5 50H123V67.5C123 77.165 115.165 85 105.5 85C95.835 85 88 77.165 88 67.5Z' fill='#17CF97'/><path d='M53 67.5C53 77.165 60.835 85 70.5 85H88V67.5C88 57.835 80.165 50 70.5 50C60.835 50 53 57.835 53 67.5Z' fill='#17CF97'/><path d='M123 32.5C123 22.835 115.165 15 105.5 15H88V32.5C88 42.165 95.835 50 105.5 50C115.165 50 123 42.165 123 32.5Z' fill='#17CF97'/></svg>
          </a>
          <Nav/>
        </aside>
        <main className="c-content bg-gray-100">
          
        </main>
      </div>
    </div>
  );
}

export default App;
