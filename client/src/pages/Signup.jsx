import { useState } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useDark } from "../context/DarkMode";
import PasswordStrengthBar from "react-password-strength-bar";
import PassIndicator from "../components/PassIndicator";
import validator from "../utilities/passVlaidator";
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [hidePass, setHidePass] = useState(true);
  const { darkMode } = useDark();
  const watchPass = watch(["password"]);

  const { isValid, feedback } = validator(watchPass.toString());
  console.log(feedback)
  const main = (data) => {
    if (isValid) handleSingUp(data);
  };
  const handleSingUp = async (data) => {
    console.log(data);
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signup`, data);
      toast.success("Signup successful! You can now login.");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="bg-orange-100 h-[calc(100vh-74px)]  dark:bg-neutral-800 w-full flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex max-w-full bg-[#BB6653] h-[44rem] rounded-lg shadow-xl dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-900 ">
        <div className="flex flex-col">
          <div className="p-6 mx-[5rem] max-w-md  h-fit ">
            <div className="w-[20rem] ">
              <Logo
                clss={"my-6 "}
                classname={"font-extrabold text-blue-800 text-2xl"}
              />
              <span className="text-center block font-bold dark:text-white text-3xl">
                Wellcome Back !
              </span>
              <p className="text-xs m-1  dark:text-white">
                Enter to get unlimited access to knowledge & information
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-96">
              <form onSubmit={handleSubmit(main)}>
                <div>
                  <div>
                    <Input
                      label={"Name*"}
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 border rounded bg-[#E8F0FE]"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <Input
                      label={"Email*"}
                      id={"email"}
                      placeholder={"Enter your email addess"}
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password*</label>
                    <div className="flex items-center bg-[#E8F0FE] rounded">
                      <Input
                        type={hidePass ? "password" : "text"}
                        className={"outline-none "}
                        id={"password"}
                        placeholder={"Enter password"}
                        {...register("password", { required: true })}
                      />
                      {hidePass ? (
                        <EyeOff
                          size={18}
                          color="gray"
                          className="cursor-pointer m-2"
                          onClick={() => setHidePass((prev) => !prev)}
                        />
                      ) : (
                        <Eye
                          size={18}
                          color="gray"
                          className="cursor-pointer m-2"
                          onClick={() => setHidePass((prev) => !prev)}
                        />
                      )}
                    </div>
                  </div>
                  <PasswordStrengthBar
                    password={watchPass.toString()}
                    scoreWordStyle={{ color: "black" }}
                  />
                </div>

                <div className="mb-4">
                  <PassIndicator
                    val={feedback.minLength}
                    text={"Minimum length of 8 characters"}
                  />
                  <PassIndicator
                    val={feedback.uppercase}
                    text={"At least one uppercase letter (A–Z)"}
                  />
                  <PassIndicator
                    val={feedback.lowercase}
                    text={"At least one lowercase letter (a–z)"}
                  />
                  <PassIndicator
                    val={feedback.number}
                    text={"At least one number (0–9)"}
                  />
                  <PassIndicator
                    val={feedback.specialcharacter}
                    text={"At least one special character (e.g., !@#$%^&*)"}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full bg-orange-300 ${
                    isSubmitting && "opacity-75"
                  } text-black py-2 rounded font-bold dark:bg-neutral-800 dark:text-white`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Signup"}
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-6  dark:text-white">
            <span>Already have an account ? </span>
            <Link to={"/login"} className="underline text-blue-800">
              Login
            </Link>
          </div>
        </div>
        <div className="max-w-xl mx-auto overflow-hidden">
          <img
            src={!darkMode ? "/books.png" : "/darkBooks.png"}
            alt=""
            className=' rounded-r-xl h-[44rem]'
            
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
