"use client";
import Image from 'next/image'
import {input} from "@nextui-org/react";
export default function Home() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-50 rounded-3xl shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
        <h3 className="text-orange-500 text-2xl font-bold text-center mb-4">Hola, Bienvenido!👋</h3>
        <div className="mb-4 ">
          <label htmlFor="logEmail" className="block text-gray-700 text-sm font-bold mb-2" placeholder="Email">Email</label>
          <input type="text" className="bg-slate-100 w-full border rounded-md py-2 px-3 " id="logEmail" required />
        </div>
        <div className="mb-4">
          <label htmlFor="logPassword" className="block text-gray-700 text-sm font-bold mb-2" placeholder="Password">Contraseña</label>
          <div className="relative">
            <input type="password" className="bg-slate-100 w-full border rounded-md py-2 px-3" id="logPassword" required />
            
            <div className="absolute top-2 right-2">
              <i className="fa-regular fa-eye" id="eye" />
              <i className="fa-regular fa-eye-slash" id="eye-slash" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="formCheck" className="flex items-center cursor-pointer">
            <input type="checkbox" id="formCheck" className="form-checkbox h-5 w-5 mr-2" />
            <span>Recordarme</span>
          </label>
        </div>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full" type="submit">
          Sign In
        </button>
        <div className="text-center text-sm mt-4">
          <a href="#" className="text-orange-500">¿Forgot your password?</a><br />
          ¿No tienes cuenta? <a href="#" className="text-orange-500">Regístrate</a>
        </div>
      </div>
    </div>
  )
}
