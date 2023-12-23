import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className="max-w-[400px] border p-4 lg:p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 ">Login</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          action="#"
          className="space-y-5"
        >
          <div className="text-center">
            <input
              className="px-4 py-3  rounded-lg w-full focus:border-primary outline-none border"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className=" text-center">
            <input
              className="px-4 py-3  rounded-lg w-full focus:border-primary outline-none border"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="text-end">
            <button className="inline-block text-secondary-600 font-semibold cursor-pointer hover:underline">
              Forgot password?
            </button>
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
    </div>
  );
};

export default Login;
