import React from "react";
import {NavLink} from "react-router-dom";
import routes from "../routes";

export default function AdditionalInformation({match, location}) {
    return (
        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <NavLink
                        to={{
                            // pathname: `${match.url}${routes.cast}`,
                            // pathname: `${match.url}/cast`,
                            // state: {from: location.state.from}
                        }}
                    />
                </li>
                <li>
                    <NavLink
                    to={{
                        // pathname: `${match.url}/reviews`,
                        // pathname: `${match.url}${routes.reviews}`,
                        // state: {from: location.state.from}
                    }}
                    />
                </li>
            </ul>
        </div>
    )
};