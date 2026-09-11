

import { Suspense, } from 'react'
import './App.css'

import type { TechnologiesType } from './components/Technologies/TechnologiesType'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Technologies/Navbar'
import Technologies from './Technologies'
import Footer from './components/Footer'
import BannerSection from './components/Technologies/bannerSection'



const TechnologiesPromise=async():Promise<TechnologiesType[]>=>{
const res= await fetch('/data.json')
const data= await res.json()

return data
}



function App() {

  const promiseData=TechnologiesPromise()

  return (
    <>
     
     <ToastContainer />
       <Navbar/>
     <BannerSection/>
      
      <Suspense fallback="Loading....">

          <Technologies promiseData={promiseData}/>


      </Suspense>

<Footer/>

    </>
  )                    
}

export default App