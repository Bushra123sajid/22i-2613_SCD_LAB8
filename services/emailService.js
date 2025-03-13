const cron = require('node-cron');
const Event = require('../models/Events');

cron.schedule('* * * * *', () => {
  const now = new Date();
  const upcomingEvents = Event.findByUserId('*').filter(
    (event) => event.reminder && new Date(event.date) <= new Date(now.getTime() + 30 * 60 * 1000)
  );

  upcomingEvents.forEach((event) => {
    console.log(`Reminder: ${event.name}`);
    console.log(`Description: ${event.description}`);
    console.log(`Date: ${event.date}`);
    console.log('---'); 
  });
});