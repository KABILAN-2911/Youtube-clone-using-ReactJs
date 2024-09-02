import { useState } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import Content from './Content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar />
      <div className='row mt-4'>
        <div className="col-1 mt-3">
          <Sidebar />
        </div>
        <div className="col-11">
          <Content />
        </div>
      </div>

    </>
  )
}

export default App
