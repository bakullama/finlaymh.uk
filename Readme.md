McAdesigns website.
============================================

**For personal use only**

Required
============

Docker and Docker-compose are needed.

Installation (Unix- Only)
============

Clone or download the repository.

> \$ git clone https://gitlab.com/Sharpz7/mcadesigns.git

Go to the /scripts directory, and make sure the script is executable.

> \$ cd /scripts

> \$ sudo chmod u+x deployunix.sh

Now that it is executable, run the bash script that it should install!

> \$ sudo ./deployunix.sh

Make sure you have changed the infomation in `site.conf` to your website addresses.

Maintainer
==========

-   Sharp / [@Sharpz7](https://gitlab.com/Sharpz7)

Command
============

```console
sudo docker-compose exec web certbot --nginx --email adam.mcarthur62@gmail.com --agree-tos --redirect --noninteractive --expand -d mcadesigns.co.uk -d code.mcadesigns.co.uk -d physics.mcadesigns.co.uk -d vs.mcadesigns.co.uk -d www.mcadesigns.co.uk -d mcaq.me -d c.mcaq.me -d d.mcaq.me -d i.mcaq.me -d p.mcaq.me -d vs.mcaq.me -d www.mcaq.me && sudo docker-compose exec php chown www-data:www-data /sharex/files/

```