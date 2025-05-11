import OrderCalendar from "@/src/components/OrderCalendar";
import { useEffect, useState } from "react";
import { loadOrdersFromExcel } from "../utils/excelUtils"; // Percorso relativo



const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const orders = await loadOrdersFromExcel(file);
    console.log("Ordini caricati:", orders);
  }
};

export default function Home() {
  const orders = [
    { title: "Ordine #1", date: "2025-05-12" },
    { title: "Ordine #2", date: "2025-05-15" },
    { title: "Ordine #3", date: "2025-05-20" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Calendario Ordini 📅</h1>
      <OrderCalendar orders={orders} />
    </div>
  );
}



  
  