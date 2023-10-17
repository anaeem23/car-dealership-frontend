"use client";
import Link from "next/link";
import CarLayout from "@/Components/Desktop/CarLayout/CarLayout";
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
      <CarLayout Model={model} />;
    </main>
  );
}
