import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Shipping(props) {
  return (
    <div className="shipping">
      <FontAwesomeIcon icon={["fab", "google"]} />
      <p>Free shipping for standard order over $50</p>
    </div>
  );
}
