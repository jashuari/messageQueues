// Import the amqplib/callback_api module for working with AMQP (Advanced Message Queuing Protocol).
const amqp = require('amqplib/callback_api');

// Define the queue name.
const queue = 'simpleQueue';

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

    // Log a message to the console indicating that the consumer is waiting for messages in the specified queue.
    console.log('Waiting for messages in queue...');

    // Start consuming messages from the queue.
    channel.consume(queue, (message) => {
      // Log the received message content to the console.
      console.log(`Received message: ${message.content.toString()}`);
    }, { noAck: true }); // Consume messages without sending an acknowledgement. This means that messages will be removed from the queue immediately after being consumed.
  });
});