import Link from "next/link";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid navBlock">
      <div className="row in">
        <div className="col-8 title">
          <span style={{ color: "white" }}> Elite</span>
          <span style={{ color: "red" }}>Motors</span>
        </div>
        <div className="col-4 navO">
          <div className="col-4 nav-item">
            <Link href={"/"} className="navItem">
              Home
            </Link>
          </div>
          <div className="col-4 nav-item">
            <Link href={"/inventory"} className="navItem">
              Inventory
            </Link>
          </div>
          <div className="col-4 nav-item">
            <Link href={"/aboutUs"} className="navItem">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
