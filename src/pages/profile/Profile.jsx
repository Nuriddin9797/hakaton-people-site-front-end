import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa6"
import { TopBar } from "../../components"
import "./Profile.scss"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"

const Profile = () => {
  return (
    <div className="profile">
      <TopBar title={"Profile"} />

      <div className="user">
        <div className="box1">
          <img
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714176000&semt=sph"
            alt="profil rasmi"
          />
          <div className="user-info">
            <h3>Ergashev Nuriddin</h3>
            <p>programmer</p>
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_62_13417)">
                  <path
                    d="M8 9.16663C9.10457 9.16663 10 8.2712 10 7.16663C10 6.06206 9.10457 5.16663 8 5.16663C6.89543 5.16663 6 6.06206 6 7.16663C6 8.2712 6.89543 9.16663 8 9.16663Z"
                    stroke="black"
                    stroke-opacity="0.67"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00008 1.83331C6.58559 1.83331 5.22904 2.39522 4.22885 3.39541C3.22865 4.3956 2.66675 5.75216 2.66675 7.16665C2.66675 8.42798 2.93475 9.25331 3.66675 10.1666L8.00008 15.1666L12.3334 10.1666C13.0654 9.25331 13.3334 8.42798 13.3334 7.16665C13.3334 5.75216 12.7715 4.3956 11.7713 3.39541C10.7711 2.39522 9.41457 1.83331 8.00008 1.83331V1.83331Z"
                    stroke="black"
                    stroke-opacity="0.67"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_13417">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Uzbekistan
            </span>
            <p className="status">
              <div className="circle"></div> Open for work
            </p>
          </div>
        </div>
        <div className="box2">
          <ul>
            <li>
              <h4>49</h4>
              <span>Following</span>
            </li>
            <li>
              <h4>25K</h4>
              <span>Followers</span>
            </li>
            <li>
              <h4>658</h4>
              <span>Projects</span>
            </li>
            <li>
              <h4>$2.5K</h4>
              <span>Total price</span>
            </li>
          </ul>
          <div className="buttons">
            <button className="career">Career choice</button>
            <button>Recent work</button>
            <button>Certificate</button>
          </div>
        </div>
        <div className="box3">
          <h2>About me</h2>
          <p>
            I am a passionate and dedicated programmer with a strong background
            in computer science and software development. With a keen eye for
            detail and a love for problem-solving, I thrive in the fast-paced
            world of programming. My expertise lies in coding languages such as
            Java, Python, and C++, and I am constantly expanding my skills to
            stay up-to-date with the latest technologies in the industry.{" "}
          </p>
        </div>
        <div className="box4">
          <div className="inputs">
            <input
              id="password"
              type="text"
              placeholder="e.g +998 97 941-32-00"
            />
            <input
              id="password"
              type="text"
              placeholder="e.g Speaklish@gmail.com"
            />
          </div>

          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
