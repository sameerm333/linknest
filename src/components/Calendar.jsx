import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "", start: new Date() }];

export default function Calendar() {
  return (
    <div className="card shadow border">
      <div className="card-body">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          //   weekends={false}
          //   themeSystem="bootstrap5"
          //   events={events}
          //   eventContent={renderEventContent}
          headerToolbar={{
            // left: "",
            // center: "",
            right: "today,prevYear,prev,next,nextYear",
          }}
          firstDay="1"
          fixedWeekCount={false}
          height={"350px"}
          contentHeight={"100%"}
          footerToolbar={{
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
        />
      </div>
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
    </>
  );
}
