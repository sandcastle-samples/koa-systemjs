FROM node:5

ENV NODE_ENV=production

ADD dist/ /app
WORKDIR /app

EXPOSE 3001

CMD ["node", "/app/server.js"]
