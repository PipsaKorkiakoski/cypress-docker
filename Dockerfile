FROM cypress/included:10.10.0
ENV CI=1
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./tsconfig.json .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
# RUN npm install

RUN npm ci
RUN npx playwright install-deps 
# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify
ENTRYPOINT ["npm", "run"]
