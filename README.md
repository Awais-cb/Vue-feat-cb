# Vue feat CB

> A vue based SPA project created using Clipbucket apis

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Creating virtual host for vue build

``` bash
# create configuration file
sudo nano /etc/apache2/sites-available/vuefeatcb.com.conf

# add virtual host
<VirtualHost *:80>
    ServerAdmin admin@vuefeatcb.com
    ServerName vuefeatcb.com
    ServerAlias www.vuefeatcb.com
    DocumentRoot /var/www/html/vue_feat_cb/dist/
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

# enable vitual host configs
sudo a2ensite vuefeatcb.com.conf

# to add new host
sudo nano /etc/hosts

# type in
127.0.0.1       vuefeatcb.com

# restart apache
service apache2 restart
```

## To stop getting 404 on direct hit to a vue url

``` bash
# create .httaccess with the give code below and add it into /dist
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

```