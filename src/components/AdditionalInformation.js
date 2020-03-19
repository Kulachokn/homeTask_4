import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import routes from "../routes";
import CastPage from "../views/CastPage";
import ReviewsPage from "../views/ReviewsPage";

const AdditionalInformation = ({ match, location }) => {
  return (
    <>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
                // pathname: `${match.url}${routes.cast}`,
                pathname: `${match.url}/cast`,
                state: { from: location.state.from }
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                // pathname: `${match.url}${routes.reviews}`,
                pathname: `${match.url}/reviews`,
                state: { from: location.state.from }
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Route path={`${match.path}/cast`} component={CastPage} />
      <Route path={`${match.path}/reviews`} component={ReviewsPage} />
    </>
  );
};

export default withRouter(AdditionalInformation);
