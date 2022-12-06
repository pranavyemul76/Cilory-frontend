import React from "react";
import "../../Style/Notification.css";
import { useDispatch } from "react-redux";
import { SetSizeNotificationDeskTop } from "../../store/Logic/CartSlice";
function Notification({ children }) {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(
      SetSizeNotificationDeskTop({
        status: false,
        messeage: null,
      })
    );
  }, 4000);
  return (
    <div className="Notification-section">
      <div className="notify">{children}</div>
    </div>
  );
}

export default Notification;
