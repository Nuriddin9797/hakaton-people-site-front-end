import { FaMagnifyingGlass } from "react-icons/fa6"
import "./TopBar.scss"

const TopBar = () => {
  return (
    <div className="topBar">
      <h1>Dashboard</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaMagnifyingGlass />
      </div>
      <div className="profile">
        <img
          src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714176000&semt=sph"
          alt=""
        />
        <div className="info">
          <h3>Tursunboyev Muhammadzohid</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  )
}

export default TopBar
