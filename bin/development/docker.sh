#!/bin/bash

source "${0%/*}/functions.sh"

case "$1" in
  build)
    docker_build
    ;;
  run)
    shift;
    docker_run "$@"
    ;;
  *)
    echo "Usage: $0 {build|run}"
    ;;
esac
