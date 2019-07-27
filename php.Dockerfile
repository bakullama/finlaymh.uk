FROM php:7-fpm-alpine3.6

COPY ./sharex/files.php /sharex/files.php

CMD ["php-fpm"]