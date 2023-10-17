"use client";
import Link from "next/link";
import CarLayout from "@/Components/Desktop/CarLayout/CarLayout";
import { Cars, AllCars } from "../../Assets/seed";

export default function Inventory() {

  return (
    <main>
      {AllCars.map((model) => {
        return <CarLayout Model={model} />;
      })}
    </main>
  );
}
