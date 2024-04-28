import { Link } from "react-router-dom"
import "./RegisterThree.scss"

const RegisterThree = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="register-two">
        <div className="lines">
          <div className="stageLine"></div>
          <div className="stageLine"></div>
          <div className="stageLine current"></div>
        </div>
        <form>
          <img src="./images/lamp.png" alt="rasm" />
          <p>Welcome to People !</p>
          <Link className="next" to={"/login"}>
            <button type="submit">Sign in</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterThree
