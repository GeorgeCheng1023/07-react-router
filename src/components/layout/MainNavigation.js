import classes from './MainNavigation.module.css';
import {NavLink} from 'react-router-dom'
const MainNavigation = props => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          Logo
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/quote" className={(navData => navData.isActive) ? 'active' : ''}>All</NavLink>
            </li>
            <li>
              <NavLink to="/new" className={(navData => navData.isActive) ? 'active' : ''}>New</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainNavigation;