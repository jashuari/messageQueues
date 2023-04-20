// Import the amqplib/callback_api module for working with AMQP (Advanced Message Queuing Protocol).
const amqp = require('amqplib/callback_api');

// Define the queue name.
const queue = 'simpleQueue';

// Define the message to be sent.
const message = 'Hello, from producers RabbitMQ Test!';

// Connect to the AMQP server running on localhost.
amqp.connect('amqp://localhost', (err, connection) => {
  // If there is an error during connection, throw an error.
  if (err) {
    throw err;
  }

  // Create a channel on the established connection.
  connection.createChannel((err, channel) => {
    // If there is an error during channel creation, throw an error.
    if (err) {
      throw err;
    }

    // Assert that the specified queue exists, and if it doesn't, create it. The queue is not durable (i.e., it will not survive a server restart).
    channel.assertQueue(queue, { durable: false });

    // Send the message to the queue as a Buffer.
    channel.sendToQueue(queue, Buffer.from(message));

    // Log a message to the console indicating that the message has been sent to the specified queue.
    console.log(`Message sent to queue: ${message}`);
  });

  // Close the connection after a 500ms delay and exit the process.
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});
