const kafka = require('kafka-node');
const Consumer = kafka.Consumer;

const client = new kafka.Client('localhost:2181', 'kafka-node-client');

const payloads = [{ 
    topic: 'test', 
    offset: 0 
}];
const options = {
    autoCommit: false
};
const consumer = new Consumer(client, payloads, options);

consumer.on('message', function (message) {
    console.log(message);
});

consumer.on('error', function (err) {
    console.log('Error:',err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:',err);
})