FROM playwright/chromium
ENV NODE_VERSION 18.9.0
WORKDIR /playwright-redmine
EXPOSE 80
EXPOSE 8080
COPY . .
RUN npx playwright install
RUN npx playwright install-deps
RUN npx playwright test
