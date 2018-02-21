import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Paper} from "material-ui";
import './MainContent.css';

export default (props) => (
  <div className={"main-content"}>
    <div className="main-content_header">
      <Header />
    </div>
    {/*<Paper className={"main-content_sidebar"}>*/}
      {/*sidebar*/}
    {/*</Paper>*/}
    <Paper className={"content-wrapper main-content_content"}>
      {props.children}
    </Paper>
    <div className="main-content_footer">
      <Footer />
    </div>
  </div>
)
