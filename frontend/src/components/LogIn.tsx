export default function LogIn() {
  return (
    <section className="bg-app-bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-app-text"
        >
          Talents Grid
        </a>

        <div className="w-full bg-app-surface rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-app-text md:text-2xl">
              Sign in to your account
            </h1>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-app-text"
                >
                  Your email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-app-surface border border-app-border text-app-text placeholder:text-app-muted rounded-lg focus:ring-2 focus:ring-app-primary/10 focus:border-app-primary block w-full p-2.5 outline-none transition"
                  placeholder="username@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-app-text"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-app-surface border border-app-border text-app-text placeholder:text-app-muted rounded-lg focus:ring-2 focus:ring-app-primary/10 focus:border-app-primary block w-full p-2.5 outline-none transition"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="cursor-pointer w-4 h-4 border border-app-border rounded bg-app-surface focus:ring-2 focus:ring-app-primary/20 accent-app-primary"
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-app-muted">
                      Remember me
                    </label>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-app-primary hover:underline cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer text-white bg-app-primary hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-app-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-200 hover:scale-[1.02]"
              >
                Sign in
              </button>

              <p className="text-sm font-light text-app-muted">
                Don’t have an account yet?{" "}
                <a
                  href=""
                  className="font-medium text-app-primary hover:underline cursor-pointer"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
