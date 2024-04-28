import JobsIcons from "./Icons";
import { Box } from "../../ui"
import "./Jobs.scss"


const Jobs = () => {
  return (
    <section className="jobs">
      <nav className="jobs__navigation">
        <span className="jobs__navigation-caption">Channels</span>
        <ul>
          <li className='--active'>
             <JobsIcons.whiteboard /> Designers
          </li>
          <li>
             Coders
          </li>
          <li>
             AI
          </li>
          <li>
             Trading
          </li>
          <li>
             Dropshipping
          </li>
          <li>
             Bloger
          </li>
          <li>
             Mobilography
          </li>
        </ul>
      </nav>
      <main>
        <div className="jobs__vacancies">
          <Box />
        </div>
      </main>
    </section>
  )
}

export default Jobs
