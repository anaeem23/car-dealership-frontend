"use client";
import Link from "next/link";
import CarLayoutIndivisual from "@/Components/Desktop/CarLayout/CarLayoutIndivisual.js";
import { Cars, AllCars } from "../../../../Assets/seed.js";
import { useParams } from "next/navigation";
import CarLayout from "@/Components/Desktop/CarLayout/CarLayout.js";

export default function Inventory_Make_Model(context) {
  let model = [];
  let { Model, chosenMake } = context.searchParams;
  console.log(context.searchParams, "context");
  console.log(chosenMake, Model);
  AllCars.forEach((car) => {
    if (chosenMake == car.Model) {
      model.push(car);
    }
  });
  
  return (
    <main>
        {model.map((item) => {
        return <CarLayout Model={item} />;
      })}
    </main>
  );
}
