<template>
    <div class="calendar-container card">
      <div class="card-body">
        <div id="calendar"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
 
  
  export default {
    name: 'CalendarView',
    setup() {
      const initializeCalendar = () => {
        let calendarEl = document.getElementById('calendar');
        let events = JSON.parse(localStorage.getItem('events')) || [];
  
        let calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          editable: true,
          selectable: true,
          events: events,
        //   select: handleDateSelect,
        });
        calendar.render();
      };
  
      const handleDateSelect = (selectInfo) => {
        let title = prompt('Enter meeting title:');
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
  
        if (title) {
          let event = {
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
          };
  
          let events = JSON.parse(localStorage.getItem('events')) || [];
          events.push(event);
          localStorage.setItem('events', JSON.stringify(events));
  
          calendarApi.addEvent(event);
        }
      };
  
      onMounted(() => {
        initializeCalendar();
      });
  
      return {};
    },
  };
  </script>
  
  <style>
  .calendar-container {
    max-width: 700px;
    margin: 60px auto;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    height: 30px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  #calender {
    max-width: 100%;
  }

  .fc .fc-scrollgrid table{
    border: black;
  }
 
  .fc a{
    color: black;
    text-decoration: none;
  }
  .fc-col-header-cell {
    border-radius: 8px;
  }

  </style>
  