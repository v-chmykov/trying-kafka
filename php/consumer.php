<?php
require './vendor/autoload.php';
date_default_timezone_set('PRC');

$config = \Kafka\ConsumerConfig::getInstance();
$config->setMetadataRefreshIntervalMs(10000);
$config->setMetadataBrokerList('localhost:9092');
$config->setGroupId('group_id');
$config->setTopics(['test']);

$consumer = new \Kafka\Consumer();
$consumer->start(function($topic, $part, $msg) {
	var_dump($msg['message']);
});