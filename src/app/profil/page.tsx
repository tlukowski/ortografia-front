"use client";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

export default function Profil() {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user) {
      setUser(user);
    }
  }, []);
  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          {/* <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          /> */}
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {/* <p className="lead text-muted">{email}</p> */}
        </div>
      </div>
    </div>
  );
}
