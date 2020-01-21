FROM hmctspublic.azurecr.io/base/node/alpine-lts-10:10-alpine as base

COPY --chown=hmcts:hmcts . .
RUN yarn install && yarn setup && rm -r node_modules/ && yarn install --production && rm -r ~/.cache/yarn

USER hmcts
EXPOSE 3000