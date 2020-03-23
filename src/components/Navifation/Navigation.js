import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <ul className={styles.NavigationList}>
    <li className={styles.NavigationListItem}>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavigationLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.NavigationListItem}>
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
