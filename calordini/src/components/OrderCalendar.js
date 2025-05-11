import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import OrderListModal from "./OrderListModal";

const OrderCalendar = ({ orders }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);

  const formattedEvents = orders.map((order) => ({
    title: order["Prodotto"] ?? "Sconosciuto",
    start: order["Data Ordine"].split("/").reverse().join("-"),
    extendedProps: {
      cliente: order["Cliente"] ?? "N/A",
      quantità: order["Quantità"] ?? "N/A",
      stato: order["Stato"] ?? "N/A"
    },
  }));

 const handleEventClick = (info) => {
  const clickedDate = info.event.startStr;
  const ordersForDate = formattedEvents.filter(event => event.start === clickedDate);
  setSelectedOrders(ordersForDate.map(e => e.extendedProps));
};

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents}
        eventClick={handleEventClick}
      />
<OrderListModal
  orders={selectedOrders}
  onClose={() => setSelectedOrders([])}
/>

    </div>
  );
};

export default OrderCalendar;
