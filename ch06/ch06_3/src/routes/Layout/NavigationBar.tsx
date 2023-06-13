//import {Link} from 'react-router-dom'

import { Link as RRLink } from "react-router-dom";
import { Link } from "../../components";

export default function NavigationBar() {
  return (
    <div className="flex p-2 navbar bg-base-100">
      <div className="flex p-2 navbar">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        <Link to="/board" className="btn btn-link ml-4">
          Board
        </Link>
      </div>
      <div className="flex p-2 items-center">
        <RRLink to="/login" className="btn btn-sm btn-primary">
          Login
        </RRLink>
        <RRLink
          to="/signup"
          className="ml-4 btn btn-sm btn-outline btn-primary"
        >
          Signup
        </RRLink>
        <RRLink to="/logout" className="ml-4 mr-4">
          Logout
        </RRLink>
      </div>
    </div>
  );
}
