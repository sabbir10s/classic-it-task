import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const onRegistration = async (userData) => {
    try {
      const response = await fetch(
        "https://classic-backend-optb.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const data = await response.json();
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
      toast.error(error.message);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);
    onRegistration({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <div className="max-w-[400px] border p-4 lg:p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">SignUp</h2>
        <form onSubmit={handleRegistration} action="#" className="space-y-5">
          <div className="text-center">
            <input
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="text-center">
            <input
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className=" text-center">
            <input
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className=" text-center">
            <input
              required={true}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          {passwordMismatch && (
            <p className="text-xs text-red-500">Passwords do not match</p>
          )}

          <div className="">
            <button className="w-full py-2 rounded bg-primary hover:bg-primary-700 hover:shadow-md hover:shadow-primary text-white">
              Create Account
            </button>
            <div className="mt-6">
              <span>Already have account?</span>{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Register;
