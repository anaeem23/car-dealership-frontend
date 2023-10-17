"use client";
import Link from "next/link";
import {
  Cars,
  AllCars,
} from "../../../Assets/seed";
import { useState, useEffect } from "react";
import "./CarSearch.css";

export default function CarSearch() {
  const Models = Object.keys(Cars);

  const [disable, setDisable] = useState(true);
  const [disableBTN, setDisableBTN] = useState(true);

  const [Make, setMake] = useState({ Make: null });
  const [chosenCar, setCar] = useState("");

  const handleSubmitBTN = (event) => {
    const form = document.getElementById("MakeModel");
    form.reset();
    setDisableBTN(true);
  };

  useEffect(() => {
    if (Make.Make) {
      setDisable(false);
    }
  }, [Make]);
  const HandleChange = (event) => {
    const Index = event.target.selectedIndex;
    setMake({ Make: Object.values(Cars)[Index - 1] });
  };

  const HandleSubmit = (event) => {
    setCar(event.target.value);
    setDisableBTN(false);
  };

  console.log(Models);
  return (
    <main>
      <form className="form" id="MakeModel">
        <div className="formQ">
          <select placeholder="All Makes" name="Makes" onChange={HandleChange}>
            <option value="" readOnly selected>
              All Makes
            </option>

            {Models.map((model) => (
              <option value={model}>{model}</option>
            ))}
          </select>

          <select
            disabled={disable}
            placeholder="All Models"
            name="Models"
            onChange={HandleSubmit}
          >
            <option value="" readOnly selected>
              All Models
            </option>

            {Make.Make ? (
              Make.Make.map((model) => <option value={model}>{model}</option>)
            ) : (
              <option></option>
            )}
          </select>
          <Link
            style={{ pointerEvents: disableBTN ? "none" : "" }}
            href={`/inventory/${chosenCar}`}
          >
            <button
              disabled={disableBTN}
              type="reset"
              className="btn btn-danger"
              onClick={handleSubmitBTN}
            >
              LookUp
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
