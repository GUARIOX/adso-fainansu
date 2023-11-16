"use client"
import { useState } from 'react';

export default function DateNavigator() {

  const [currentDate, setCurrentDate] = useState(new Date());

  function handlePrevDate() {
    setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1)));
  }

  function handleNextDate() {
    setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)));
  }

  return (
    <div className="flex flex-col h-min max-w-lg mx-auto">

      <div className="flex justify-between items-center mb-4">

      <button
  className="transition duration-200 p-3 text-orange-500 rounded-full hover:bg-gray-100"
  onClick={handlePrevDate}
>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="1 0 16 16"
    className="mx-auto"
  >
    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
  </svg>
</button>

        <span className="text-lg font-medium">
          {currentDate.toDateString()}
        </span>

        <button
  className="transition duration-200 p-3 rounded-full text-orange-500 hover:bg-gray-100"
  onClick={handleNextDate}
>
  <svg 
    xmlns="http://www.w3.org/2000/svg"  
    width="24"
    height="24"
    fill="currentColor" 
    viewBox="1 0 16 16"
    className="mx-auto"
  >
    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
  </svg>
</button>

      </div>

      <div className="flex-1 overflow-auto">

        <h1 className="text-xl font-bold mb-4">Ingresos</h1>
        
        <div className="bg-white p-4 rounded-[20px] flex items-center mb-4">
        
          <svg className="w-8 h-8 text-gray-800 mr-9" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
          </svg>
        
          <div className="mr-4">
            Salario
          </div>

          <div className="mr-4">
            $0  
          </div>
          
          <div>
            xx.xxpm
          </div>

        </div>

        <div className="bg-white p-4 rounded-[20px] flex items-center mb-4">
        
          <svg className="w-8 h-8 text-gray-800 mr-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 20">
            <path d="M18.972.863a.913.913 0 0 0-.041-.207.956.956 0 0 0-.107-.19 1.01 1.01 0 0 0-.065-.116c-.008-.01-.02-.013-.028-.022a1.008 1.008 0 0 0-.174-.137 1.085 1.085 0 0 0-.141-.095 1.051 1.051 0 0 0-.171-.047.985.985 0 0 0-.207-.041C18.025.007 18.014 0 18 0h-3.207a1 1 0 1 0 0 2h.5l-4.552 3.9-3.5-.874a1 1 0 0 0-.867.189l-5 4a1 1 0 0 0 1.25 1.562L7.238 7.09l3.52.88a1 1 0 0 0 .892-.211L17 3.173v1.034a1 1 0 0 0 2 0V1a.9.9 0 0 0-.028-.137ZM13.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm.24 4.591a3.112 3.112 0 0 1 1.935 1.374 2.036 2.036 0 0 1 .234 1.584 2.255 2.255 0 0 1-1.374 1.469.982.982 0 0 1-1.953.09 2.943 2.943 0 0 1-1.475-.92 1 1 0 0 1 1.536-1.283.953.953 0 0 0 .507.29.778.778 0 0 0 .831-.18 1.108 1.108 0 0 0-.714-.481 3.105 3.105 0 0 1-1.934-1.374 2.042 2.042 0 0 1-.233-1.584 2.264 2.264 0 0 1 1.45-1.493v-.03a1 1 0 0 1 2 0c.517.159.98.457 1.337.862a1.002 1.002 0 1 1-1.524 1.3.962.962 0 0 0-.507-.286.775.775 0 0 0-.829.18 1.113 1.113 0 0 0 .713.482ZM6 20a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"/>
          </svg>
        
          <div className="mr-4">
            Negocio
          </div>

          <div className="mr-4">
            $0
          </div>
          
          <div>
            xx.xxpm
          </div>

        </div>

        <h1 className="text-xl font-bold mb-4">Gastos</h1>

        <div className="bg-white p-4 rounded-[20px] flex items-center mb-4">
        
          <svg className="w-8 h-8 text-gray-800 mr-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
        
          <div className="mr-4">
            Arriendo
          </div>
          
          <div className="mr-4">
            $0
          </div>
          
          <div>
            xx.xxpm
          </div>

        </div>

        <div className="bg-white p-4 rounded-[20px] flex items-center mb-4">
        
          <svg className='w-8 h-8 text-gray-800 mr-9' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--ci-primary-color, currentColor)" d="M474.183,120H360V40H328v80H200v32h17.92l6.154,48H112a80.091,80.091,0,0,0-80,80v16H312V280a79.508,79.508,0,0,0-8-34.846,80.248,80.248,0,0,0-47.155-41.185L250.183,152H437.817l-35.9,280H32v32H430.08l40-312H496V120ZM277.258,264H66.742A48.083,48.083,0,0,1,112,232H232A48.083,48.083,0,0,1,277.258,264Z" class="ci-primary"/>
            <polygon fill="var(--ci-primary-color, currentColor)" points="304 352 312 352 312 320 304 320 184 320 32 320 32 352 184 352 304 352" class="ci-primary"/>
            <polygon fill="var(--ci-primary-color, currentColor)" points="304 408 312 408 312 376 304 376 184 376 32 376 32 408 184 408 304 408" class="ci-primary"/>
          </svg>
        
          <div className="mr-4">
            Comida
          </div>
          
          <div className="mr-4">
            $0
          </div>
          
          <div>
            xx.xxpm
          </div>

        </div>

      </div>

    </div>
  );
}