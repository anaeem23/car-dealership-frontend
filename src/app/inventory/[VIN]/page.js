"use client";
import Link from "next/link";
import CarLayoutIndivisual from "@/Components/Desktop/CarLayout/CarLayoutIndivisual.js";
import { Cars, AllCars } from ".//../../../Assets/seed.js";
import { useParams } from "next/navigation";

export default function Inventory_Indiviual() {
  let { VIN } = useParams();
  let model = "";

  AllCars.forEach((car) => {
    if (VIN == car.VIN) {
      model = car;
    }
  });

  return (
    <main>
      <CarLayoutIndivisual Model={model} />;
    </main>
  );
}
