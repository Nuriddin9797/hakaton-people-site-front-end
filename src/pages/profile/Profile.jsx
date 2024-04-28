import "./Profile.scss"

const Profile = () => {
  return (
      <div class="profile">
        <div class="box1">
          <img src="user.svg" alt="profil rasmi" />
          <p>Ergashev Nuriddin</p>
          <p>programmer</p>
          <p>Uzbekistan</p>
          <p>Open for work</p>
        </div>
        <div class="box2">
          <ul>
            <li>
              <h2>100</h2>
              <p>Following</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>25k</h2>
              <p>Followers</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>658</h2>
              <p>Projects</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>100</h2>
              <p>Total price</p>
            </li>
          </ul>
          <ul>
            <button>Career choice</button>
            <button>Recent work</button>
            <button>Certificate</button>
          </ul>
        </div>
        <div class="box3">
          <p>About me</p>
          <p>
            I am a passionate and dedicated programmer with a strong background
            in computer science and software development. With a keen eye for
            detail and a love for problem-solving, I thrive in the fast-paced
            world of programming. My expertise lies in coding languages such as
            Java, Python, and C++, and I am constantly expanding my skills to
            stay up-to-date with the latest technologies in the industry.{" "}
          </p>
        </div>
        <div class="box4">
          <input type="number" placeholder="phone" />
          <input type="email" placeholder="E-mail" />
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
        </div>
      </div>
  )
}

export default Profile
