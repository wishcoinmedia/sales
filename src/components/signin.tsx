import React from "react"
import { useForm } from "react-hook-form"

type Inputs = {
  username: string
  password: string
}

const Signin = () => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit = ({ username, password }: Inputs) => {
    console.log(username, password)
  }

  return (
    <div className="m-10 h-full lg:w-1/4 flex flex-col justify-between mx-auto">
      <h1 className="text-5xl text-center mb-6">Member Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="username"
            id="username"
            type="text"
            placeholder="username"
            ref={register}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            name="password"
            id="password"
            type="password"
            ref={register}
            placeholder="****************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-bg hover:bg-primary text-black font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm" href="/">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Signin
