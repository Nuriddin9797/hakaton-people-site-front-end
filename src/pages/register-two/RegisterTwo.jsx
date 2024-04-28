import { Link } from "react-router-dom";
import "./RegisterTwo.scss";

const RegisterTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="register-two">
        <div className="lines">
          <div className="stageLine"></div>
          <div className="stageLine current"></div>
          <div className="stageLine"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <p>One last step before creating your account!</p>
          <img src="./images/user.png" alt="rasm" />
          <span>Upload your image or choose one of these</span>
          <div className="photos">
            <img src="./images/image 4.png" alt="rasm 1" />
            <img src="./images/user-2.png" alt="rasm 3" />
            <img src="./images/image 5.png" alt="rasm 2" />
          </div>
          <Link className="next" to={"/register-three"}>
            <button type="submit">Continue</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterTwo;
