import Link from "next/link";
import { Cars, AllCars } from "../../../Assets/seed";
import "./CarLayout.css";

export default function CarLayout({ Model }) {
  const car = Model;
  return (
    <div className="container-fluid carPage">
      <div className="row in">
        <div className="col-2"></div>
        <div className="col-8 carPageCard">
          <div className="card" style={{ width: "100%" }}>
            <div className="row no-gutters bg-dark">
              <div className="col-auto bg-black">
                <img src={car.IMG} className="img-fluid" alt=""></img>
              </div>
              <div className="col bg-black">
                <div className="card-block px-2 bg-black">
                  <h4 className="card-title s bg-black">{car.Name}</h4>
                  <p className="card-text bg-black">
                    {
                      <ul>
                        <li>Color:{car.Color}</li>
                        <li>Interior:{car.Interior}</li>
                        <li>Drive:{car.Drive}</li>
                        <li>Trans:{car.Trans}</li>
                        <li>VIN:{car.VIN}</li>
                        <li>Engine:{car.Engine}</li>
                        <li>Stock#:{car.Stock}</li>
                        <li>Mileage:{car.Mileage}</li>
                      </ul>
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer w-100 text-muted bg-danger d-flex justify-content-between">
              <Link
                href={"https://www.carfax.com/"}
                className="btn btn-primary px-5 "
              >
                Car Fax Report
              </Link>
              <Link href={`/inventory/${car.VIN}`} className="btn btn-primary ">
                Inquire
              </Link>
              <Link href={"/notes"} className="btn btn-primary ">
                Make Offer
              </Link>
              <Link href={"/notes"} className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>

      <form className="formInq">
          Name:
        <label>
          <input type="text" name="name" />
        </label>
          Email:
        <label>
          <input type="text" name="email" />
        </label>
          Phone:
        <label>
          <input type="number" name="phone" />
        </label>
          Offer:
        <label>
          <input type="number" name="offer" />
        </label>
        Comments:
        <label>
          <input type="text" name="comments" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
