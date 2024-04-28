import { Link } from "react-router-dom"
import "./Login.scss"

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <div className="login">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="e.g Speaklish" />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" placeholder="Type here" />
          </div>
          <label>
            <input type="checkbox" />
            Keep me signed in
          </label>
          <button type="submit">Sign in</button>
          <p>
            Don't have an account? <Link to={"/register"}>Register now</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
