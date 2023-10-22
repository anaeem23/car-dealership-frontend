import Link from "next/link";
import { AiFillCar } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import "./Header.css";

export default function Header() {
  return (
    <main style={{ backgroundColor: "powderblue", height: "5vh" }}>
      <div className="container-fluid text-center align-middle fs-5">
        <div className="row">
          <div className="col-6 d-flex align-items-center  ">
            <span className="text">123 Imaginary Ln, City State, 123456 </span>
            <AiFillCar className="logo " style={{ marginRight: ".3em" }} />
            <a
              className="directions"
              href="https://www.google.com/maps/place/Bermuda+Triangle/@24.9999945,-71.0389691,14z/data=!3m1!4b1!4m6!3m5!1s0x89451ab5034cb7ab:0xb600ecf3df7aca4d!8m2!3d25!4d-71!16zL20vMDFqcGw?entry=ttu"
            >
              <span className="text" style={{ margin: ".5em" }}>
                Get Directions
              </span>
            </a>
          </div>
          <div className="col-3 d-flex align-items-center">
            <BsPhone className="text" />{" "}
            <span className="text">XXX-XXX-XXXX</span>
          </div>
          <div className="col-3 d-flex align-items-center">
            <MdOutlineMailOutline className="logo" />{" "}
            <span className="text">Email@email.com</span>
          </div>
        </div>
      </div>
    </main>
  );
}
