import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <section className="absolute w-full h-full bg-neutral-100">
        <div
          className="absolute top-0 w-full h-full"
          style={{
            // backgroundImage: "url(" + require("assets/img/register_bg_2.png").default + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-5/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-2 border-teal-500">
                <div className="flex-auto px-4 lg:px-10 py-3" >
                  <div className="relative text-teal-700 py-5 text-left mb-3 font-bold text-2xl">
                    <h2 className="">Login</h2>
                    {/* <FontAwesomeIcon icon="fa-duotone fa-right-to-bracket" /> */}
                    <FontAwesomeIcon
                           icon={faRightToBracket}
                           style={{ fontSize: 25}}
                           className="absolute text-teal-400 top-[54%] left-[18%] -translate-y-2/4"
                        />
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-teal-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <svg className="w-4 h-4 text-teal-400 absolute top-[50%] left-[2%] -translate-y-2/4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <input
                          type="email"
                          className="border-0 px-8 py-2 placeholder-gray-400 text-teal-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block text-teal-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <svg className="w-4 h-4 text-teal-400 absolute top-[50%] left-[2%]  -translate-y-2/4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        <input
                          type="password"
                          className="border-0 px-8 py-2 placeholder-gray-400 text-teal-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="********"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-teal-900 text-white active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>



                <div className="rounded-t mb-0 px-6 py-4">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Or
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-teal-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src="assets/github.svg"
                      />
                      Github
                    </button>
                    <button
                      className="bg-white active:bg-gray-100 text-teal-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src="assets/google.svg"
                      />
                      Google
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    className="text-teal-700"
                  >
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    className="text-teal-700"
                  >
                    <small>Create new account</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login