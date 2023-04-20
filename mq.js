// Import the EventEmitter class from the events module.
const EventEmitter = require('events');

// Define a custom SimpleMessageQueue class that extends the EventEmitter class.
class SimpleMessageQueue extends EventEmitter {
  constructor() {
    super(); // Call the EventEmitter constructor.
    this.queue = []; // Initialize an empty array to store messages in the queue.
  }

  // Method to add a message to the end of the queue and emit a 'messageEnqueued' event.
  enqueue(message) {
    this.queue.push(message); // Add the message to the end of the queue.
    this.emit('messageEnqueued', message); // Emit the 'messageEnqueued' event with the message as its payload.
  }

  // Method to remove the first message from the queue, emit a 'messageDequeued' event, and return the message.
  dequeue() {
    if (this.queue.length === 0) { // Check if the queue is empty.
      return null; // If the queue is empty, return null.
    }
    const message = this.queue.shift(); // Remove the first message from the queue and store it in the 'message' variable.
    this.emit('messageDequeued', message); // Emit the 'messageDequeued' event with the message as its payload.
    return message; // Return the dequeued message.
  }
}

// Create a new instance of the SimpleMessageQueue class.
const messageQueue = new SimpleMessageQueue();

// Attach an event listener for the 'messageEnqueued' event. Log the enqueued message to the console.
messageQueue.on('messageEnqueued', (message) => {
  console.log(`Message enqueued: ${message}`);
});

// Attach an event listener for the 'messageDequeued' event. Log the dequeued message to the console.
messageQueue.on('messageDequeued', (message) => {
  console.log(`Message dequeued: ${message}`);
});

// Enqueue two messages to the message queue.
messageQueue.enqueue('Hello, world!');
messageQueue.enqueue('This is a simple message queue.');

// Dequeue the messages with a delay using setTimeout and log the received messages to the console.
setTimeout(() => {
  const message1 = messageQueue.dequeue(); // Dequeue the first message.
  console.log(`Received message: ${message1}`); // Log the dequeued message to the console.
}, 1000);

setTimeout(() => {
  const message2 = messageQueue.dequeue(); // Dequeue the second message.
  console.log(`Received message: ${message2}`); // Log the dequeued message to the console.
}, 2000);
