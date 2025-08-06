import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useDark } from "../context/DarkMode";
const BACKEND_URL =
  import.meta.env.BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [hidePass, setHidePass] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { darkMode } = useDark();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
        email: data.email,
        password: data.password,
      });
      login(res.data);
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="bg-orange-100 h-[calc(100vh-74px)]  dark:bg-neutral-800 w-full flex justify-center items-center">
      <div className="flex max-w-full bg-[#BB6653] rounded-lg shadow-xl dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-900 ">
        <div className="flex flex-col">
          <div className="p-6 mx-[5rem] max-w-md  h-fit ">
            <div className="w-[20rem] pt-10">
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
              <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 ">
                <div>
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
                        {...register("pasword", { required: true })}
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
                </div>
                <button
                  type="submit"
                  className={`w-full bg-orange-300 ${
                    isSubmitting && "opacity-75"
                  } text-black py-2 rounded font-bold dark:bg-neutral-800 dark:text-white`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submiting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mb-20 mt-6  dark:text-white">
            <span>Don't have account ? </span>
            <Link to={"/signup"} className="underline text-blue-800">
              register here
            </Link>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <img
            src={!darkMode ? "/books.png" : "/darkBooks.png"}
            alt=""
            className="max-w-[32rem] h-auto rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
