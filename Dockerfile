FROM cypress/included:10.0.0 
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./tsconfig.json .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]