import React from "react";
import { Link } from "react-router-dom";
import "../../Style/NavBar/usercomponent.css";
function UserComponents() {
  const handleLOgout = () => {};

  return (
    <div className="Usercomponent-section">
      <ul>
        {false ? (
          <Link to={`/overview`}>
            <li>{false}</li>
          </Link>
        ) : (
          <Link href={"/User/login"}>
            <li>login / signup</li>
          </Link>
        )}
        <Link href={"/my-account/orders"}>
          <li> orders</li>
        </Link>
        <Link href={"/my-account/address"}>
          <li>saved address</li>
        </Link>
        <Link href={"/my-account/orders"}>
          <li>Edit prifile</li>
        </Link>
        {false && (
          <li className="logout-btn-li">
            <button className="logout-btn" onClick={handleLOgout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserComponents;
