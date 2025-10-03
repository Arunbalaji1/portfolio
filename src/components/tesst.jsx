import React from 'react'

export default function Tesst(){
  function fullScren(){
    const element=document.getElementById("html") 
    const isFullScreen=document.fullscreenElement
    
    if(!isFullScreen){
         element.requestFullscreen()
    }else{
        document.exitFullscreen()
    }

  }
  return (
    <div id='one' className='h-100 w-100 mx-auto my-[10%] p-5 bg-amber-600 ' >
      <div id='two' className='h-80 w-80 mx-auto p-5  bg-amber-300'>
        <div id='three' className='h-60 w-60 mx-auto p-5  bg-red-500 '>
          <div id='four' className='h-40 w-40 mx-auto bg-green-500'>
            <button onClick={fullScren} className='bg-amber-50 h-10 w-30 text-black rounded-md m-5'>
                  tesst<span class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500">R</span>
            </button>
          </div>
        </div>
      </div>
       
    </div>
  )
}


