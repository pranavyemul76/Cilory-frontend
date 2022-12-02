import React from "react";
import { Alert } from "react-bootstrap";

function AlertNotification({ title }) {
  return (
    <div>
      <Alert variant={"danger"}>{title}</Alert>
    </div>
  );
}
export default AlertNotification;
