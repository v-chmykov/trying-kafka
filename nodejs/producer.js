const kafka = require('kafka-node');  
const Producer = kafka.Producer;

const client = new kafka.Client('localhost:2181', 'kafka-node-client');
const producer = new Producer(client);

const payloads = [{ 
    topic: 'test', 
    messages: 'Welcome from Producer!', 
    attributes: 1, 
    timestamp: Date.now() 
}];

producer.on('ready', function(err) {
    console.log('Producer Connected!');
    console.log('Errors: ', err);

    producer.send(payloads, function (err, data) {
        console.log('Data: ', data);
        console.log('Errors: ', err);
    });
});

producer.on('error', function(error) {
    console.error('Errors: ', error);
});