import React, { lazy, Suspense } from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import Spinner from "../Loader";

const ReviewsPage = lazy(() => import("../../views/ReviewsPage"));
const CastPage = lazy(() => import("../../views/CastPage"));

const AdditionalInformation = ({ match, location }) => {
  return (
    <>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
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
                pathname: `${match.url}/reviews`,
                state: { from: location.state.from }
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
      <Suspense fallback={<Spinner />}>
        <Route path={`${match.path}/cast`} component={CastPage} />
        <Route path={`${match.path}/reviews`} component={ReviewsPage} />
      </Suspense>
    </>
  );
};

export default withRouter(AdditionalInformation);
