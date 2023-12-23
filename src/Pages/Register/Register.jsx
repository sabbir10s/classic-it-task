import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="max-w-[400px] border p-4 lg:p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">SignUp</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          action="#"
          className="space-y-5"
        >
          <div className="text-center">
            <input
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="text-center">
            <input
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className=" text-center">
            <input
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className=" text-center">
            <input
              className="px-4 py-3 rounded-lg w-full focus:border-primary outline-none border"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
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
    </div>
  );
};

export default Register;
