import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("sabbirahmed@gmail.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();
  const onLogin = async (userData) => {
    try {
      const response = await fetch(
        "https://classic-backend-optb.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        // console.log(token);
        const { token } = data;
        localStorage.setItem("token", token);
        toast.success(data.message);
        navigate("/");
        window.location.reload();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    onLogin({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="">
      <div className="max-w-[400px] border p-4 lg:p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 ">Login</h2>
        <form onSubmit={handleLogin} action="#" className="space-y-5">
          <div className="text-center">
            <input
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3  rounded-lg w-full focus:border-primary outline-none border"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className=" text-center">
            <input
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3  rounded-lg w-full focus:border-primary outline-none border"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="w-full py-2 rounded bg-primary hover:bg-primary-700 hover:shadow-md hover:shadow-primary text-white">
              Login
            </button>
            <div className="mt-8">
              <span>Have on account yet?</span>{" "}
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
