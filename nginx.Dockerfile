FROM sharp6292/certbot-nginx:latest

COPY ./code /code
COPY ./site.conf /etc/nginx/conf.d/site.conf
COPY ./sharex/files.php /sharex/files.php

CMD ["nginx", "-g", "daemon off;"]