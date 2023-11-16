
export default function Menu_c() {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center p-4">
        <div className="bg-gray-50 rounded-3xl shadow-md p-10 pt-20 w-full max-w-md">
        <h2 className="text-orange-500 text-2   xl font-bold mb-0">DEUDAS</h2>
        <h3 className=" xl font-bold mb-3">Intereses</h3>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full">
        <div className="flex-initial px-[10px] h-[10px] pe-0 w-full">
          <svg  width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.8333 26.1111V11.8889" stroke="white" stroke-width="5.62799" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.5 26.1112V17.2223" stroke="white" stroke-width="5.62799" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M31.1665 26.1112V20.7778" stroke="white" stroke-width="5.62799" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 33.9333V4.06667C3 3.47756 3.58203 3 4.3 3H40.7C41.418 3 42 3.47756 42 4.06667V33.9333C42 34.5225 41.418 35 40.7 35H4.3C3.58203 35 3 34.5225 3 33.9333Z" stroke="white" stroke-width="5.62799"/>
          </svg>
        </div>
          Tasa Interés Fija
        </button>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 my-[12px]  rounded-lg focus:outline-none focus:shadow-outline w-full">
        <div className="flex-initial px-[10px] h-[10px] pe-0 w-full">
          <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 14.625L21 30.125L27.75 24.3125L39 34" stroke="white" stroke-width="4.95217" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30 3V18.5M30 18.5L36.75 12.6875M30 18.5L23.25 12.6875" stroke="white" stroke-width="4.95217" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
          Tasa Interés Variable
        </button>
        </div>
      </div>
    );
  }
  