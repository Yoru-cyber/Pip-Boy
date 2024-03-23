// import { useState } from 'react'
import nerd from './assets/nerd.webp'
import StatsList from "./components/StatsList"
function App() {

  return (
    <>
   <main className="flex flex-col text-center items-center bg-black w-auto h-[95vh]">
    <h1 className="text-5xl font-extrabold">S.P.E.C.I.A.L</h1>
    <div className="grid grid-cols-2 grid-rows-3">
    <span className="row-span-3 self-center">
    <StatsList />
    </span>
    <img src={nerd} alt="" className="w-48 row-span-2" />
    <p className="row-span-2">This is some text test</p>
    </div>
     
   </main>
   <footer className='text-center bg-black w-auto h-auto'>
    <p>Powered by Vault-TEC © 2077</p>
   </footer>
    </>
  )
}

export default App
