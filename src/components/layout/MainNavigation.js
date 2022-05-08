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
              <NavLink to="/quote" className={(navState => navState.isActive ? 'active' : '')}>All</NavLink>
            </li>
            <li>
              <NavLink to="/quote/new" className={(navState => navState.isActive ? 'active' : '')}>New</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainNavigation;