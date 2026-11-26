import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "./Calendar.module.scss";

export default function Calendar() {
  return (
    <div className={styles.wrapper}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prevYear,prev",
          center: "title",
          right: "today,next,nextYear",
        }}
        firstDay={1}
        fixedWeekCount={true}
        showNonCurrentDates={true}
        height="auto"
        contentHeight="auto"
      />
    </div>
  );
}
