FROM node:14.16.0-alpine3.12

LABEL maintainer="moglica.s@gmail.com"

RUN apk add --update git

WORKDIR /usr/src/app

ARG USER_ID
ARG GROUP_ID

RUN if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
  deluser --remove-home node && \
  if getent group node ; then delgroup node; fi && \
  addgroup -g ${GROUP_ID} node && \
  adduser -u ${USER_ID} -D -G node node && \
  install -d -m 0755 -o node -g node /home/node && \
  chown --changes --silent --no-dereference --recursive \
    ${USER_ID}:${GROUP_ID} \
    /home/node \
    /usr/src/app \
;fi

ENV NODE_ENV development

USER node
