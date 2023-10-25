import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./Loading.css";

export default function Loading({ loading, error, children }) {
  if (loading) {
    return (
      <div className="container loading-container">
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return console.error(error);
  }
  return <div>{children}</div>;
}
