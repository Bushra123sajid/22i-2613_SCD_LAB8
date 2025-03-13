let events = [];

class Event {
  constructor(name, description, date, category, reminder, userId) {
    this.id = Date.now().toString(); 
    this.name = name;
    this.description = description;
    this.date = date;
    this.category = category;
    this.reminder = reminder;
    this.userId = userId; 
  }

  static findByUserId(userId) {
    return events.filter((event) => event.userId === userId);
  }

  static findById(id) {
    return events.find((event) => event.id === id);
  }

  static addEvent(event) {
    events.push(event);
  }

  static updateEvent(id, updates) {
    const event = events.find((e) => e.id === id);
    if (event) {
      Object.assign(event, updates);
    }
    return event;
  }
}

module.exports = Event;