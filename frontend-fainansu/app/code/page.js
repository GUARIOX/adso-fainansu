
export default function Code() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center ">
    <div className="bg-gray-50 rounded-3xl shadow-md p-16 w-full max-w-md">
      <h1 className="text-center text-2xl font-bold mb-4 ">Ingrese el Código</h1>
      <p className="text-justify">Te hemos enviado un código de 4 dígitos vía email a <a href="mailto:example@gmail.com" className="text-orange-500">example@gmail.com</a></p>
      <div className="flex items-center justify-center mt-6">
        <input className="w-12 h-12 text-center border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500" type="text" maxLength={1} />
        <input className="w-12 h-12 text-center border border-gray-300 rounded-md mx-1 focus:outline-none focus:border-blue-500" type="text" maxLength={1} />
        <input className="w-12 h-12 text-center border border-gray-300 rounded-md mx-1 focus:outline-none focus:border-blue-500" type="text" maxLength={1} />
        <input className="w-12 h-12 text-center border border-gray-300 rounded-md mx-1 focus:outline-none focus:border-blue-500" type="text" maxLength={1} />
      </div>
      <div className="text-center mt-6">
      <button className="bg-orange-500 hover:bg-blue-600 text-white m-3 py-2 px-14 rounded-lg focus:outline-none focus:shadow ">
        Continuar
      </button>
      </div>
      <p className=" text-center text-sm mt-4">
        ¿No has recibido el código? <a href="#" className="text-orange-500">Reenviar</a>
      </p>
    </div>
  </div>
  )
}
