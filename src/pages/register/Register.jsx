import { Link } from "react-router-dom"
import "./Register.scss"

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="register">
        <div className="lines">
          <div className="stageLine current"></div>
          <div className="stageLine"></div>
          <div className="stageLine"></div>
        </div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="info">
            <div className="input">
              <label htmlFor="username">First name</label>
              <input id="username" type="text" placeholder="e.g Speaklish" />
            </div>
            <div className="input">
              <label htmlFor="password">Last name</label>
              <input id="password" type="text" placeholder="Type here" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="e.g Speaklish" />
          </div>
          <div className="input">
            <label htmlFor="password">Email</label>
            <input id="password" type="text" placeholder="Type here" />
          </div>
          <div className="input">
            <label htmlFor="password">Phone</label>
            <input id="password" type="number" placeholder="Type here" />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" placeholder="Type here" />
          </div>

          <label>
            <input type="checkbox" />
            Keep me signed in
          </label>
          <Link className="next" to={"/register-two"}>
            <button type="submit">Continue</button>
          </Link>
          <p>
            Already have an account? <Link to={"/login"}>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
