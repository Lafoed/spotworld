docker run -d \
-e APP_ID=spotwolrdappid \
-e MASTER_KEY=spotworldmasterkey \
-e VIRTUAL_HOST=spotworld.dimkk.ru \
-e LETSENCRYPT_HOST=spotworld.dimkk.ru \
-e LETSENCRYPT_EMAIL=dimkk@outlook.com \
—link mongo \
—name parse-server \
yongjhih/parse-server


docker run -d \
-e APP_ID=spotwolrdappid \
-e MASTER_KEY=spotworldmasterkey \
-e SERVER_URL=https://spotworld.dimkk.ru/parse \
-e VIRTUAL_HOST=dimkk.ru \
-e LETSENCRYPT_HOST=dimkk.ru \
-e LETSENCRYPT_EMAIL=dimkk@outlook.com \
-e PARSE_DASHBOARD_ALLOW_INSECURE_HTTP=1 \
-e USER1=admin \
-e USER1_PASSWORD=superp@ssword \
-e PARSE_DASHBOARD_SERVER_URL=https://spotworld.dimkk.ru/parse \
-e PARSE_DASHBOARD_MASTER_KEY=spotworldmasterkey \
-e PARSE_DASHBOARD_APP_ID=spotwolrdappid \
-e PARSE_DASHBOARD_APP_NAME=spotworld \
-e PARSE_DASHBOARD_USER_ID=admin \
-e PARSE_DASHBOARD_USER_PASSWORD=superp@ssword \
—link parse-server \
—name parse-dashboard \
yongjhih/parse-dashboard