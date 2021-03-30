#!/bin/bash

IMAGE_NAME="smodale"
TAG_NAME="development"

docker_build() {
  docker build \
    -t $IMAGE_NAME:$TAG_NAME \
    --build-arg USER_ID=$(id -u) \
    --build-arg GROUP_ID=$(id -g) \
    -f docker/$TAG_NAME/Dockerfile .
}

docker_run() {
  docker run -it --rm -v $PWD:/usr/src/app $IMAGE_NAME:$TAG_NAME "$@"
}
