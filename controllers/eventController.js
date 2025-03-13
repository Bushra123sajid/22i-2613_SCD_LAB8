const Event = require('../models/Events');

const createEvent = (req, res) => {
  const { name, description, date, category, reminder } = req.body;
  const event = new Event(name, description, date, category, reminder, req.userId);
  Event.addEvent(event);
  res.status(201).json(event);
};

const getEvents = (req, res) => {
  const userEvents = Event.findByUserId(req.userId);
  res.json(userEvents);
};

const setReminder = (req, res) => {
  const { id } = req.params;
  const event = Event.findById(id);
  if (!event || event.userId !== req.userId) {
    return res.status(404).json({ error: 'Event not found' });
  }
  Event.updateEvent(id, { reminder: true });
  res.json(event);
};

module.exports = { createEvent, getEvents, setReminder };