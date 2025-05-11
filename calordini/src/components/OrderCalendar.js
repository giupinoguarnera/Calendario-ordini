import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const OrderCalendar = ({ orders }) => {
  return (
    <div className="container mx-auto p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={orders.map((order) => ({
          title: order.title,
          start: order.date,
        }))}
      />
    </div>
  );
};

export default OrderCalendar;



