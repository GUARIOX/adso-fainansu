import { Field, Form, Formik ,ErrorMessage} from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
const FormSchema = yup.object().shape({
  name: yup.string().required("Por Favor ingrese un nombre"),
  lastName: yup.string().required("Por Favor ingrese un nombre"),
  email: yup.string().required("El campo email es requerido"),
  password: yup.string().required("Debe llenar la contrasena"),
  repeat_password: yup.string()
  .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
  phoneNumber: yup.string().required("Ingrese su numero de Telefono"),
  lastName: yup.string().required("Ingrese su apellido"),
});

function RegisterToken() {



  return (
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        password: "",
        repeat_password: "",
        phoneNumber: "",
        idCardNumber: "",
        role: 101,
      }}
      validationSchema={FormSchema}
      onSubmit={startLogin}
    >
      {() => (
          <Form className="flex flex-col gap-8 p-2">
            <div class="relative z-0 w-full mb-6 group">
              <Field
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                placeholder=" "
                
              />

              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electronico
              </label>
              <ErrorMessage name="email" component="div" className="error text-red-600" />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <Field
                type="password"
                name="password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                placeholder=" "
                
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contrasena
              </label>
              <ErrorMessage name="password" component="div" className="error  text-red-600" />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <Field
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                placeholder=" "
                
              />
              <label
                for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirmar contrasena
              </label>
              <ErrorMessage name="repeat_password" component="div" className="error  text-red-600" />
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                  placeholder=" "
                  
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombres
                </label>
                <ErrorMessage name="name" component="div" className="error  text-red-600" />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                  placeholder=" "
                  
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Apellidos
                </label>
                <ErrorMessage name="lastName" component="div" className="error  text-red-600" />
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <Field
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                  placeholder=" "
                  
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Telefono (323-456-7890)
                </label>
                <ErrorMessage name="phoneNumber" component="div" className="error  text-red-600" />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <Field
                  type="text"
                  name="idCardNumber"
                  id="idCardNumber"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                  placeholder=" "
                  
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-800 peer-focus:dark:text-pink-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Documento
                </label>
                <ErrorMessage name="idCardNumber" component="div" className="error  text-red-600" />
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-pink-800 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-800 dark:hover:bg-pink-800 dark:focus:ring-pink-800"
            >
              Registrarse
            </button>
        </Form>
      )}
    </Formik>
  );
}

const startLogin = async ({ name,lastName, email, password,phoneNumber,idCardNumber,  role }) => {

  let dataAuth = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    phoneNumber:phoneNumber,
    idCardNumber : idCardNumber,
    role: role,
  };

  console.log(dataAuth);
  // "institutional_email": "almacen2023@sena.edu.co",
  // "password":"1234567891"
  try {
    let res = await fetch(
      "https://adso-shinydesk.onrender.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAuth),
      }
    );

    let data = await res.json();
    if (data.token) {
      console.log(data.token);
      sessionStorage.setItem("token", data.token);
    } else {
      console.log("error");
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default RegisterToken;