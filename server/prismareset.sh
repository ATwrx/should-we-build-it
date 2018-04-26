#!/bin/bash

echo 'Resetting docker containers..'
docker-compose kill &&
docker-compose down &&
docker-compose up -d
echo 'Reset complete.'
