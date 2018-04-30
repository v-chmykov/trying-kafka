# Trying Apache Kafka

## Requirements:
- Docker-compose
- Php >= 7.1 or NodeJS >=4.5.0

## How to run:
- Run docker containers: `docker-compose up -d`
- Choose language and go to the appropriate folder: `js` (nodejs) or `php` (php). 
- Install dependencies: `npm install` or `composer install`
- Run `consumer` in one terminal: `npm run consumer` or `composer run consumer`
- Run `producer` in another terminal (DON'T close terminal with `consumer`): `npm run producer` or `composer run producer`
- See message in `consumer` terminal. Congratulations!