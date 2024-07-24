<template>
    <div class="booking-form-container card">
      <div class="card-body">
        <h5 class="card-title">Book a Meeting</h5>
        <form @submit.prevent="submitBooking">
          <div class="form-group">
            <label for="title">Meeting Title</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" v-model="date" required>
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input type="time" class="form-control" id="time" v-model="time" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Book Meeting</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'BookingForm',
    setup() {
      const title = ref('');
      const name = ref('');
      const email = ref('');
      const date = ref('');
      const time = ref('');
  
      const submitBooking = () => {
        let event = {
          title: title.value,
          start: `${date.value}T${time.value}`,
          allDay: false,
        };
  
        let events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
  
        alert(`Meeting '${title.value}' booked for ${name.value} on ${date.value} at ${time.value}`);
        title.value = '';
        name.value = '';
        email.value = '';
        date.value = '';
        time.value = '';
      };
  
      return {
        title,
        name,
        email,
        date,
        time,
        submitBooking,
      };
    },
  };
  </script>
  
  <style scoped>
  .booking-form-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .btn {
    font-size: 1.2rem;
    padding: 10px 0;
  }
  </style>
  