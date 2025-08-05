import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Input from "../components/Input";
const BACKEND_URL =
  import.meta.env.BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [hidePass, setHidePass] = useState(true);
  const navigate = useNavigate();

  const handleSingUp = async (data) => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signup`, data);
      toast.success("Signup successful! You can now login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="bg-orange-100 h-[calc(100vh-74px)] w-full flex justify-center items-center ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex max-w-full bg-[#BB6653] rounded-lg  shadow-xl ">
        <div className="flex flex-col">
          <div className="p-6 mx-[5rem] max-w-md bg-[#BB6653] h-full ">
            <div className="w-[20rem] pt-10">
              <Logo
                clss={"mb-6"}
                classname={"font-extrabold text-blue-800 text-2xl"}
              />
              <span className="text-center block font-bold text-3xl">
                Wellcome Back !
              </span>
              <p className="text-xs m-1">
                Enter to get unlimited access to knowledge & information
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-96">
              <form onSubmit={handleSubmit(handleSingUp)}>
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
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded bg-[#E8F0FE]"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password*</label>
                  <div className="flex items-center bg-[#E8F0FE] rounded">
                    <Input
                      type={hidePass ? "password" : "text"}
                      className={"outline-none "}
                      id="password"
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

                <button
                  type="submit"
                  className="w-full mt-6 bg-orange-300 text-black py-2 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Signup"}
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mb-16 mt-6">
            <span>Already have an account ? </span>
            <Link to={"/login"} className="underline text-blue-800">
              Login 
            </Link>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <img
            src="../..//books.png"
            alt=""
            className="max-w-[27.5rem] h-auto rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
