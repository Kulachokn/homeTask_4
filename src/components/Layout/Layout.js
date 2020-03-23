import React from "react";
import styles from "./Layout.module.css";
import AppBar from "../AppBar";

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <AppBar />
    <hr />
    {children}
  </div>
);

export default Layout;
