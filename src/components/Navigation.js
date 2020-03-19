import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import styles from "../views/styles.module.css";

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavigationLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.movies}
        className={styles.NavigationLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
