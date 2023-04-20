# Simple RabbitMQ Example with Node.js
## This repository contains a basic example of using RabbitMQ with Node.js to implement a simple producer and consumer using the amqplib/callback_api module. RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP).

## Overview
In this example, a producer sends a message to a queue, and a consumer receives the message from the same queue. The producer and consumer are designed to run in a Node.js environment.

The first part of the code sets up a consumer that:

1. Connects to a local RabbitMQ server
2. Creates a channel
3. Asserts the existence of the specified queue ('simpleQueue')
4. Consumes messages from the queue without sending an acknowledgement
5. Logs the received message content to the console

The second part of the code sets up a producer that:

1. Connects to a local RabbitMQ server
2. Creates a channel
3. Asserts the existence of the specified queue ('simpleQueue')
4. Sends a message ('Hello, from producers RabbitMQ Test!') to the queue
5. Logs the sent message to the console

## Usage

1. Install Node.js if you haven't already.
2. Clone this repository and navigate to the project folder.
3. Run npm install amqplib to install the amqplib/callback_api module.
4. Start your local RabbitMQ server.
5. Run the producer and consumer scripts using node producer.js and node consumer.js in separate terminals.

## Why RabbitMQ?

RabbitMQ allows different components of a distributed system to communicate asynchronously through message queues. This architecture can help:

- Decouple the components
- Improve scalability
- Ensure reliability in the event of component failures or high traffic

This basic example demonstrates a fundamental use case of RabbitMQ, which can be extended to create more complex applications and systems.
