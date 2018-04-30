<?php
require './vendor/autoload.php';

date_default_timezone_set('PRC');

$config = \Kafka\ProducerConfig::getInstance();
$config->setMetadataBrokerList('localhost:9092');
$config->setBrokerVersion('1.0.0');
$config->setRequiredAck(-1);
$config->setIsAsyn(false);
$config->setProduceInterval(500);

$producer = new \Kafka\Producer();
$result = $producer->send([
    [
        'topic' => 'test',
        'value' => 'msg_text',
        'key' => 'msg_key',
        'timestamp' => date('U'),
    ],
]);

var_dump($result[0]['data'][0]['partitions'][0]['errorCode']);