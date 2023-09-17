import React, { useEffect } from "react";
import "./Redirect.scss";

function Redirect({ Link }) {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.replace(Link);
    }, 1000); // 1 second delay

    return () => clearTimeout(redirectTimer);
  }, [Link]);

  return (
    <div className="background">
      <div className="container">
        Click <a href={Link}>here</a> if not redirected...
      </div>
    </div>
  );
}

export default Redirect;
