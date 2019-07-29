FROM php:7-fpm-alpine3.6

COPY ./code/ /code/

CMD ["php-fpm"]