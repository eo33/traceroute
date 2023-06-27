---
sidebar_position: 1
---

# Ngnix

This guide provide the information needed to configure the NGINX config file.

<!-- Introduction -->
## Introduction

NGINX is a proxy that acts as a middlemen between your computer and the server that hosts your website. NGINX can be used to increase the scalability of your web application.

<!-- Insert NGINX picture-->

### What is NGINX configuration file

The NGINX configuration file is a configuration file used to configure the NGINX proxy.

### Example of NGINX configuration file: Directives, Blocks, Contexts

_Directives_ are used for configuring the different modules of NGINX. It consist of the name and parameters seperated by spaces and end with a semicolon `;`. They can be think of as **Key-value pairs**. Here are some examples of _directives_:

```nginx
user nobody;
worker_processes 1;
worker_connections 1024;
```

_Contexts_ group together _directives_. They can be think of as blocks of code. Here are 2 examples of an empty _contexts_:

```nginx
events {
}

stream {
}
```

Within the context, There can be  _directives_. Below is an example of the `worker_connections` _directive_ inside the `events` _context_:

```nginx
events {
    worker_connections 1024; 
}
```

_Blocks_ are _directives_ that grouped together related _directives_, enclosed by curly braces `{}`. It is distinct from _contexts_. _Contexts_ are the top level directives, while _blocks_ are not. Here is an example of 2 `server` _blocks_ inside the `http` _context_.

```nginx
http {
  ...
  server {
    ...
  }
  server {
    ...
  }
  ...
}
```

<!-- How to guides-->

## How-to guides

The NGINX configuration file can be configured for a number of things.

### How to host different domains under the same server IP

NGINX can be used to host multiple domains under the same server IP. This is done by adding multiple `server` _blocks_ inside the `http` _context_. Follow these steps to host different domains:

  1. Get the root directories and server name of the domains.
  2. Open the nginx.conf, and create the `server` _blocks_ inside the `http` _context_.
  3. Inside each `server` _blocks_, add the `root`, `index` and `server_name` values accordingly.

```nginx
server {
  ...
  root /var/www/domain/domain1;
  index index.html;
  server_name domain1.com;
  ...
}
   ```

  4. Restart NGINX server to apply changes. Use the following command to restart the NGINX server.

```nginx
sudo systemctl reload nginx
```

#### **Example**

Suppose there are 2 seperate document root folders for the multiple domains: `/var/www/domain/domain1.com` and `/var/www/domain/domain2.com`. Each directory contains an index.html file. To use NGINX to host multiple domains, create 2 `server` _blocks_ inside the `http` _context_:

```NGINX
http {
  ...
  server {
    ...
    root /var/www/domain/domain1;
    index index.html;
    server_name domain1.com;
    ...
  }

  server {
    ...
    root /var/www/domain/domain2;
    index index.html;
    server_name domain2.com;
    ...
  }
  ...
}
```

### How to secure NGINX setup

To secure the NGINX setup, follow the guide below.

#### Disable unused modules

Diasbling modules that are not required will minimize the risk of potential attack by limiting allowed operations. Do the following to disable unused modules:

1. List out the modules that are not in used.
2. Use the _configure_ option during installation to disable modules. For example, the following code will disable the _autoindex_ module and recompile NGINX:

```NGINX
./configure --without-http_autoindex_module
make
make install
```

#### Disable NGINX version

Disabling NGINX version will prevent users from knowing the version of NGINX that you use.
Do the following to disable NGINX version:

- Remove the server_tokens by adding `server_tokens off;` _directive_ in the `http` _context_.
- Disable the server signature by adding `proxy_hide_header X-Powered-By;` _directive_ in the `http` _context_.

```nginx
http {
  ...
  server_tokens off;
  proxy_hide_header X-Powered-By;
  ...
}
```

#### Set client buffer size limitations

Limiting your buffer size will prevent potential DoS attacks on NGINX.
Set buffer size limit to `1k` by adding the following _directives_:

- `client_body_buffer_size 1k`
- `client_header_buffer_size 1k`
- `client_max_body_size 1k`
- `large_client_header_buffers 1k`

The following code will set the client buffer size to 1k.

```nginx
http {
  ...
  client_body_buffer_size 1k;
  client_header_buffer_size 1k;
  client_max_body_size 1k;
  large_client_header_buffers 1k;
  ...
}
```

#### Disable unnecessary HTTP methods (DELETE, TRACE, TRACK)

Disabling unnecessary HTTP methods is recomended to increase security. 
Determine which methods you are going to use, then disable unused methods by specifying it in the `location` _block_. For example, the following code will only allow `GET`, `HEAD` and `POST` methods, and block other methods:

```NGINX
location / {
limit_except GET HEAD POST { deny all; }
}
```

#### Using TLS instead of SSLv3

Using TLS instead of SSLv3 will prevent unwanted cyber attacks.
To use TLS, add `ssl_protocols TLSv1.3;` to the _server_ context:

```nginx
server {
  ...
  ssl_protocols TLSv1.3;
  ...
}
```

Next, restart the NGINX server to apply the new configuration.

```nginx
sudo systemctl reload nginx
```

## Tutorial

NGINX can be configured to do various thing.

### Log data

NGINX can be configured to log access data. The log data can be used to monitor activities. Log data is usually found in `/var/log/nginx/`. To enable log data, use the following code inside the `http` _context_:

```NGINX
http {
  ...
  access_log  /var/log/nginx/access.log;
  ...
}
```

#### Log POST data

NGINX will automatically log POST request. To view only the most recent `50` POST request, run the following code in the terminal:

```nginx
$sudo tail -n 50 /var/log/nginx/postdata-acces.log | grep POST
```

#### Log GET data

NGINX will automatically log GET request. To view only the most recent `50` GET request, run the following code in the terminal

```nginx
$sudo tail -n 50 /var/log/nginx/postdata-acces.log | grep GET
```

### Blocking

NGINX can be configured to block certain IP address or user.

#### Block IP address: single IP address, multiple address, IPv6 address

Add the `deny` directive on the `http`, `server` or `location` _blocks_ to block IP address.
For example, the following code will block IP `12.34.56.78`: 

```NGINX
http{
   ...
   deny 12.34.56.78;
   ...
}
```

Use multiple `deny` directive to block multiple IPv4 and IPv6 addresses.
For example, the following code will block IPv4 `12.34.56.78`, `12.34.56.789`, and IPv6 `1234:5db6::/78`:

```NGINX
http{
   ...
   deny 12.34.56.78;
   deny 12.34.56.789;
   deny 1234:5db6::/78;
   ...
}
```

> _Note: Always restart NGINX to apply the new configuration changes._

#### Block user-agent

NGINX can be configured to block user agent. Add the following code in the `server` _block_:

```NGINX
server{
   ...
   ## Block user agent wget
   if ($http_user_agent ~* (wget)){
    return 403;
   }
   ...
}
```

### Deny

NGINX can be configured to deny access to certain directories or file.

#### Deny access to directory, ie. /resources/

Add the `deny` directive on the `location` _block_ to deny access to certain directory. 
For example, the following code will deny access to `/style`:

```NGINX
location = /style {
   deny all;
   return 404;
}
```

#### Deny access to specific file, ie. /secret.pdf

Add the `deny` directive on the `location` _block to deny access to certain file.
For example, the following code will deny access to `/secret.pdf`:

```NGINX
location = /secret.pdf {
   deny all;
   return 404;
}
```

### Prevent

NGINX can be configured to prevent hotlinking.

#### Prevent hotlinking

Add the following `location` block under the `server` block to prevent hotlinking to all .gif and .png files, except to the website (example.com):

```nginx
location ~ .(gif|png)$ {
   valid_referers none blocked example.com *.example.com;
   if ($invalid_referer) {
      return 403;
   }
}
```

### Force

NGINX can be configured to force www, non-www and HTTPS.

#### Force www (redirect non-www to www)

Add the following code to force redirect from non-www (example.com) to www (www.example.com):

```NGINX
server {
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

_Note: Always create a new `server` block to force redirection_

#### Force non-www (redirect www to non-www)

Add the following code to force redirect from www (www.example.com) to non-www (example.com):

```NGINX
server {
  server_name www.example.com;
  return 301 $scheme://example.com$request_uri;
}
```

#### Force HTTPS

Add the following code to force redirect from www (www.example.com) or non-www (example.com) to HTTPS (https://www.example.com):

```NGINX
server {
  listen 80;   #listen for all the HTTP requests
  server_name example.com www.example.com;
  return 301 https://www.example.com$request_uri;
}
```

_Note: Always create a new `server` block to force redirection_

### Redirect

NGINX can be configured to redirect to a new domain.

#### Redirect links to a new domain

Add the following code to redirect an old domain (example.com) to a new domain (newexample.com):

```nginx
server {
  server_name example.com;
  return 301 http://www.newexample.com$request_uri;
}
```

#### Redirect links to a single page of a new domain

Add the following code to redirect an old domain (example.com) to a single page of a new domain (newexample.com):

```nginx
server {
  server_name example.com;
  return 301 http://www.newexample.comi;
}
```

### Rename

NGINX can be configured to rename files using the `rewrite` directive.

#### Rename .php to .html

Add the following code to rename .php to .html:

```nginx
location ~ \.php$ {
    if (!-f $request_filename) {
        rewrite ^(.*)\.php$ $1.html permanent;
    }
}
```

#### Remove extension (.html, .php) from URLs

Add the following code to rename remove .html and .php extension from URLs:

```nginx
location / {
    try_files $uri $uri.html $uri/ @extensionless-php;
    index your_index.html your_index.htm your_index.php;
}

location ~ \.php$ {
    try_files $uri = 404;
}

location @extensionless-php {
    rewrite ^(.*)$ $1.php last;
}
```

#### Remove trailing slash

Add the following code to remove trailling slash in your `server` block:

```nginx
rewrite ^/(.*)/$ /$1 permanent;
```

<!-- Explanations -->

## Explanations

The NGINX configuration file is different from the Apache configuration file.

### nginx.conf vs httpd.conf

Differences between NGINX configuration (nginx.conf) and Apache configuration (httpd.conf):

- **Simplicity**: NGINX is much more complex to develop when compared to Apache.
- **Architecture**: NGINX uses an event driven architecture while Apache uses a process driven approach.
- **Operating system support**: NGINX and Apache supports all Unix OS and Windows, but NGINX performance on Windows isn't stable.
- **Performance**: NGINX is 2.5 times faster than Apache and takes less memory than Apache.
- **Support and documentation**: NGINX has a weaker support and documentation, while Apache has a good amount of documentation because it has been around longer.

Simillarities between NGINX configuration (nginx.conf) and Apache configuration (httpd.conf):

- **Type**: They are both open-source web server and can be used as a reverse proxy server.
- **Securities**: They both have the same level of security.
- **Flexibility**: They are both compatible for dynamic modules.

<!-- Troubelshooting -->

## Troubleshooting

Here are the most common problems developer face when using NGINX.

### Error 502 Bad Gateway

NGINX will return the 502 Bad gateway error if it receives an error from the server. Here are some possible reasons:

- NGINX is not running.
- PHP-FPM is not running.
- PHP-FPM timeout.
- Firewall blocks request.
- Domain name not allowed
- Server unavailable

Here are some possible solutions:

- Clear browser cache and delete cookies then reload the page.
- Use a different browser and disable all plugins.
- Restart the computer and network equipment.
- Change the DNS server.
- Restart the server.
- Check the firewall logs for unusual crashes.

### Gateway Timeout with FastCGI

A Gateway timeout error with FastCGI happens when NGINX did not receive a timely response from the server. Modify the following _directvies_:

- `client_header_timeout 300;`
- `client_body_timeout 300;`
- `send_timeout 300;`
- `fastcgi_read_timeout 300;`


```NGINX
server{
  ...
  client_header_timeout 300;
  client_body_timeout 300;
  send_timeout 300;
  fastcgi_read_timeout 300;
  ...
}
```

### Error connecting to php5-fpm socket

This error usually occurs because of the permission of the socket file. To fix this, follow these steps:

1. Open the `/etc/php5/fpm/pool.d/www.conf`
2. Add the following code to recreate the socket file with proper user.

```nginx
listen.owner = www-data
listen.group = www-data
```

3. Restart PHP-FPM.

### Error 403 Directory is forbidden

Error 403 Directory is forbidden happens when a client tries to access a directory without permission. Here are some possible reasons:

- Incorrect configuration for the directory loading
- Incorrect access permission

Here are the some possible solutions:

- Make sure the directory is actually there by making sure it is in the list of available directories in NGINX.
- Make sure that the client has permission to access the file. This is done by running the following command in terminal:

```nginx
sudo chown -R www-data:www-data *
sudo chmod 755 {dir}
sudo chmod 644 {files}
```

- Clear browser cache and delete cookies then reload the page.
- Configure the firewall to allow access.

### Permission denied while connecting to upstream

This error usually occurs because of the selinux policy. The solution is to disable it. To do so, follow these steps:

1. Go to `/etc/sysconfig/selinux` file.
2. In the config file, set `SELINUX = disabled`

### Close upstream connection after request

This error usually occurs because of the way NGINX handle upstream connection. To fix it, add the following code in the nginx.conf file:

```nginx
...
server {
  ...
 location / {
     proxy_http_version 1.1;
     proxy_set_header Connection "";
     ...
     }
}
...
```

### Upstream sent too big header while reading response header from upstream

This error usually occurs because of the proxy buffers that NIGNX uses. To fix it, modify the proxy buffer size in to the `location` _block_. Here is an example:

```nginx
...
server {
  ...
 location / {
     ...
     proxy_buffer_szie 128k;
     proxy_buffers 4 256k;
     proxy_busy_buffers_size 256k;
     }
}
...
```

### NGINX serves .php files as downloads instead of executing

This error usually occurs because of the php configuration in the `server` _block_. To fix it, add the following code in the `/etc/nginx/sites-available/example.com.conf` file:

```nginx
...
server {
  ...
 location ~ \.php$ {
  try_files $uri /index.php =404;
  fastcgi_split_path_info ^(.+?\.php)(/.+)?$;
  fastcgi_pass unix:/var/run/php5-fpm.sock;
  fastcgi_index index.php;
  include fastcgi_params;
 }
}
...
```

<!-- Best practices -->

## Best practices

Here are some best practices that you should follow when configure NGINX.

### Hide nginx version (server_tokens)

Hiding NGINX version is done to increase security. To do so, follow this guide: [Hide NGINX version](#hide-nginx-version-server_tokens).

### Limit methods (accept GET, HEAD, POST, and disable DELETE, SEARCH)

Limiting methods is done to increase security. To do so, follow this guide: [Disable unnecesary methods](#disable-unnecessary-http-methods-delete-trace-track).

### Don't use chmod 777

Using the `chmod 777` command in the terminal is not a good practice beacuse it compromise security. Use `mkdir - m 777 directory_name` instead.

### Don't use root inside location

Adding a `root` _directive_ inside a `location` _block_ is not a good practice. Doing so would require you to add a `root` _directive_ inside every `location` _block_ . Add the `root` _directive_ in the `server` _block_ instead.

### Don't use SSLv3, use TLS instead as Best practice

Using TLS instead of SSLv3 is recommended to increase security. To do so, follow guide: [Using TLS instead of SSLv3](#using-tls-instead-of-sslv3).
