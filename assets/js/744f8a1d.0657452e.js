"use strict";(self.webpackChunkserver_tutorials=self.webpackChunkserver_tutorials||[]).push([[501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Ngnix",l={unversionedId:"Commands/project_1",id:"Commands/project_1",title:"Ngnix",description:"This guide provide the information needed to configure the NGINX config file.",source:"@site/docs/Commands/project_1.md",sourceDirName:"Commands",slug:"/Commands/project_1",permalink:"/docs/Commands/project_1",draft:!1,editUrl:"https://github.com/eo33/traceroute/blob/main/docs/Commands/project_1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/category/commands"},next:{title:"Dig",permalink:"/docs/Commands/project_2"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is NGINX configuration file",id:"what-is-nginx-configuration-file",level:3},{value:"Example of NGINX configuration file: Directives, Blocks, Contexts",id:"example-of-nginx-configuration-file-directives-blocks-contexts",level:3},{value:"How-to guides",id:"how-to-guides",level:2},{value:"How to host different domains under the same server IP",id:"how-to-host-different-domains-under-the-same-server-ip",level:3},{value:"<strong>Example</strong>",id:"example",level:4},{value:"How to secure NGINX setup",id:"how-to-secure-nginx-setup",level:3},{value:"Disable unused modules",id:"disable-unused-modules",level:4},{value:"Disable NGINX version",id:"disable-nginx-version",level:4},{value:"Set client buffer size limitations",id:"set-client-buffer-size-limitations",level:4},{value:"Disable unnecessary HTTP methods (DELETE, TRACE, TRACK)",id:"disable-unnecessary-http-methods-delete-trace-track",level:4},{value:"Using TLS instead of SSLv3",id:"using-tls-instead-of-sslv3",level:4},{value:"Tutorial",id:"tutorial",level:2},{value:"Log data",id:"log-data",level:3},{value:"Log POST data",id:"log-post-data",level:4},{value:"Log GET data",id:"log-get-data",level:4},{value:"Blocking",id:"blocking",level:3},{value:"Block IP address: single IP address, multiple address, IPv6 address",id:"block-ip-address-single-ip-address-multiple-address-ipv6-address",level:4},{value:"Block user-agent",id:"block-user-agent",level:4},{value:"Deny",id:"deny",level:3},{value:"Deny access to directory, ie. /resources/",id:"deny-access-to-directory-ie-resources",level:4},{value:"Deny access to specific file, ie. /secret.pdf",id:"deny-access-to-specific-file-ie-secretpdf",level:4},{value:"Prevent",id:"prevent",level:3},{value:"Prevent hotlinking",id:"prevent-hotlinking",level:4},{value:"Force",id:"force",level:3},{value:"Force www (redirect non-www to www)",id:"force-www-redirect-non-www-to-www",level:4},{value:"Force non-www (redirect www to non-www)",id:"force-non-www-redirect-www-to-non-www",level:4},{value:"Force HTTPS",id:"force-https",level:4},{value:"Redirect",id:"redirect",level:3},{value:"Redirect links to a new domain",id:"redirect-links-to-a-new-domain",level:4},{value:"Redirect links to a single page of a new domain",id:"redirect-links-to-a-single-page-of-a-new-domain",level:4},{value:"Rename",id:"rename",level:3},{value:"Rename .php to .html",id:"rename-php-to-html",level:4},{value:"Remove extension (.html, .php) from URLs",id:"remove-extension-html-php-from-urls",level:4},{value:"Remove trailing slash",id:"remove-trailing-slash",level:4},{value:"Explanations",id:"explanations",level:2},{value:"nginx.conf vs httpd.conf",id:"nginxconf-vs-httpdconf",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Error 502 Bad Gateway",id:"error-502-bad-gateway",level:3},{value:"Gateway Timeout with FastCGI",id:"gateway-timeout-with-fastcgi",level:3},{value:"Error connecting to php5-fpm socket",id:"error-connecting-to-php5-fpm-socket",level:3},{value:"Error 403 Directory is forbidden",id:"error-403-directory-is-forbidden",level:3},{value:"Permission denied while connecting to upstream",id:"permission-denied-while-connecting-to-upstream",level:3},{value:"Close upstream connection after request",id:"close-upstream-connection-after-request",level:3},{value:"Upstream sent too big header while reading response header from upstream",id:"upstream-sent-too-big-header-while-reading-response-header-from-upstream",level:3},{value:"NGINX serves .php files as downloads instead of executing",id:"nginx-serves-php-files-as-downloads-instead-of-executing",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Hide nginx version (server_tokens)",id:"hide-nginx-version-server_tokens",level:3},{value:"Limit methods (accept GET, HEAD, POST, and disable DELETE, SEARCH)",id:"limit-methods-accept-get-head-post-and-disable-delete-search",level:3},{value:"Don&#39;t use chmod 777",id:"dont-use-chmod-777",level:3},{value:"Don&#39;t use root inside location",id:"dont-use-root-inside-location",level:3},{value:"Don&#39;t use SSLv3, use TLS instead as Best practice",id:"dont-use-sslv3-use-tls-instead-as-best-practice",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ngnix"},"Ngnix"),(0,i.kt)("p",null,"This guide provide the information needed to configure the NGINX config file.\nHere's a sample change"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"NGINX is a proxy that acts as a middlemen between your computer and the server that hosts your website. NGINX can be used to increase the scalability of your web application."),(0,i.kt)("h3",{id:"what-is-nginx-configuration-file"},"What is NGINX configuration file"),(0,i.kt)("p",null,"The NGINX configuration file is a configuration file used to configure the NGINX proxy."),(0,i.kt)("h3",{id:"example-of-nginx-configuration-file-directives-blocks-contexts"},"Example of NGINX configuration file: Directives, Blocks, Contexts"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Directives")," are used for configuring the different modules of NGINX. It consist of the name and parameters seperated by spaces and end with a semicolon ",(0,i.kt)("inlineCode",{parentName:"p"},";"),". They can be think of as ",(0,i.kt)("strong",{parentName:"p"},"Key-value pairs"),". Here are some examples of ",(0,i.kt)("em",{parentName:"p"},"directives"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"user nobody;\nworker_processes 1;\nworker_connections 1024;\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Contexts")," group together ",(0,i.kt)("em",{parentName:"p"},"directives"),". They can be think of as blocks of code. Here are 2 examples of an empty ",(0,i.kt)("em",{parentName:"p"},"contexts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"events {\n}\n\nstream {\n}\n")),(0,i.kt)("p",null,"Within the context, There can be  ",(0,i.kt)("em",{parentName:"p"},"directives"),". Below is an example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker_connections")," ",(0,i.kt)("em",{parentName:"p"},"directive")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"events")," ",(0,i.kt)("em",{parentName:"p"},"context"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"events {\n    worker_connections 1024; \n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Blocks")," are ",(0,i.kt)("em",{parentName:"p"},"directives")," that grouped together related ",(0,i.kt)("em",{parentName:"p"},"directives"),", enclosed by curly braces ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". It is distinct from ",(0,i.kt)("em",{parentName:"p"},"contexts"),". ",(0,i.kt)("em",{parentName:"p"},"Contexts")," are the top level directives, while ",(0,i.kt)("em",{parentName:"p"},"blocks")," are not. Here is an example of 2 ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"blocks")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," ",(0,i.kt)("em",{parentName:"p"},"context"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"http {\n  ...\n  server {\n    ...\n  }\n  server {\n    ...\n  }\n  ...\n}\n")),(0,i.kt)("h2",{id:"how-to-guides"},"How-to guides"),(0,i.kt)("p",null,"The NGINX configuration file can be configured for a number of things."),(0,i.kt)("h3",{id:"how-to-host-different-domains-under-the-same-server-ip"},"How to host different domains under the same server IP"),(0,i.kt)("p",null,"NGINX can be used to host multiple domains under the same server IP. This is done by adding multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"blocks")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," ",(0,i.kt)("em",{parentName:"p"},"context"),". Follow these steps to host different domains:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get the root directories and server name of the domains."),(0,i.kt)("li",{parentName:"ol"},"Open the nginx.conf, and create the ",(0,i.kt)("inlineCode",{parentName:"li"},"server")," ",(0,i.kt)("em",{parentName:"li"},"blocks")," inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"http")," ",(0,i.kt)("em",{parentName:"li"},"context"),"."),(0,i.kt)("li",{parentName:"ol"},"Inside each ",(0,i.kt)("inlineCode",{parentName:"li"},"server")," ",(0,i.kt)("em",{parentName:"li"},"blocks"),", add the ",(0,i.kt)("inlineCode",{parentName:"li"},"root"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"server_name")," values accordingly.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  ...\n  root /var/www/domain/domain1;\n  index index.html;\n  server_name domain1.com;\n  ...\n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Restart NGINX server to apply changes. Use the following command to restart the NGINX server.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"sudo systemctl reload nginx\n")),(0,i.kt)("h4",{id:"example"},(0,i.kt)("strong",{parentName:"h4"},"Example")),(0,i.kt)("p",null,"Suppose there are 2 seperate document root folders for the multiple domains: ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/domain/domain1.com")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/domain/domain2.com"),". Each directory contains an index.html file. To use NGINX to host multiple domains, create 2 ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"blocks")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," ",(0,i.kt)("em",{parentName:"p"},"context"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"http {\n  ...\n  server {\n    ...\n    root /var/www/domain/domain1;\n    index index.html;\n    server_name domain1.com;\n    ...\n  }\n\n  server {\n    ...\n    root /var/www/domain/domain2;\n    index index.html;\n    server_name domain2.com;\n    ...\n  }\n  ...\n}\n")),(0,i.kt)("h3",{id:"how-to-secure-nginx-setup"},"How to secure NGINX setup"),(0,i.kt)("p",null,"To secure the NGINX setup, follow the guide below."),(0,i.kt)("h4",{id:"disable-unused-modules"},"Disable unused modules"),(0,i.kt)("p",null,"Diasbling modules that are not required will minimize the risk of potential attack by limiting allowed operations. Do the following to disable unused modules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List out the modules that are not in used."),(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("em",{parentName:"li"},"configure")," option during installation to disable modules. For example, the following code will disable the ",(0,i.kt)("em",{parentName:"li"},"autoindex")," module and recompile NGINX:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"./configure --without-http_autoindex_module\nmake\nmake install\n")),(0,i.kt)("h4",{id:"disable-nginx-version"},"Disable NGINX version"),(0,i.kt)("p",null,"Disabling NGINX version will prevent users from knowing the version of NGINX that you use.\nDo the following to disable NGINX version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove the server",(0,i.kt)("em",{parentName:"li"},"tokens by adding ",(0,i.kt)("inlineCode",{parentName:"em"},"server_tokens off;")," _directive")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"http")," ",(0,i.kt)("em",{parentName:"li"},"context"),"."),(0,i.kt)("li",{parentName:"ul"},"Disable the server signature by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"proxy_hide_header X-Powered-By;")," ",(0,i.kt)("em",{parentName:"li"},"directive")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"http")," ",(0,i.kt)("em",{parentName:"li"},"context"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"http {\n  ...\n  server_tokens off;\n  proxy_hide_header X-Powered-By;\n  ...\n}\n")),(0,i.kt)("h4",{id:"set-client-buffer-size-limitations"},"Set client buffer size limitations"),(0,i.kt)("p",null,"Limiting your buffer size will prevent potential DoS attacks on NGINX.\nSet buffer size limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"1k")," by adding the following ",(0,i.kt)("em",{parentName:"p"},"directives"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_body_buffer_size 1k")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_header_buffer_size 1k")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_max_body_size 1k")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"large_client_header_buffers 1k"))),(0,i.kt)("p",null,"The following code will set the client buffer size to 1k."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"http {\n  ...\n  client_body_buffer_size 1k;\n  client_header_buffer_size 1k;\n  client_max_body_size 1k;\n  large_client_header_buffers 1k;\n  ...\n}\n")),(0,i.kt)("h4",{id:"disable-unnecessary-http-methods-delete-trace-track"},"Disable unnecessary HTTP methods (DELETE, TRACE, TRACK)"),(0,i.kt)("p",null,"Disabling unnecessary HTTP methods is recomended to increase security.\nDetermine which methods you are going to use, then disable unused methods by specifying it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("em",{parentName:"p"},"block"),". For example, the following code will only allow ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," methods, and block other methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"location / {\nlimit_except GET HEAD POST { deny all; }\n}\n")),(0,i.kt)("h4",{id:"using-tls-instead-of-sslv3"},"Using TLS instead of SSLv3"),(0,i.kt)("p",null,"Using TLS instead of SSLv3 will prevent unwanted cyber attacks.\nTo use TLS, add ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl_protocols TLSv1.3;")," to the ",(0,i.kt)("em",{parentName:"p"},"server")," context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  ...\n  ssl_protocols TLSv1.3;\n  ...\n}\n")),(0,i.kt)("p",null,"Next, restart the NGINX server to apply the new configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"sudo systemctl reload nginx\n")),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"NGINX can be configured to do various thing."),(0,i.kt)("h3",{id:"log-data"},"Log data"),(0,i.kt)("p",null,"NGINX can be configured to log access data. The log data can be used to monitor activities. Log data is usually found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/"),". To enable log data, use the following code inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," ",(0,i.kt)("em",{parentName:"p"},"context"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"http {\n  ...\n  access_log  /var/log/nginx/access.log;\n  ...\n}\n")),(0,i.kt)("h4",{id:"log-post-data"},"Log POST data"),(0,i.kt)("p",null,"NGINX will automatically log POST request. To view only the most recent ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," POST request, run the following code in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"$sudo tail -n 50 /var/log/nginx/postdata-acces.log | grep POST\n")),(0,i.kt)("h4",{id:"log-get-data"},"Log GET data"),(0,i.kt)("p",null,"NGINX will automatically log GET request. To view only the most recent ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," GET request, run the following code in the terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"$sudo tail -n 50 /var/log/nginx/postdata-acces.log | grep GET\n")),(0,i.kt)("h3",{id:"blocking"},"Blocking"),(0,i.kt)("p",null,"NGINX can be configured to block certain IP address or user."),(0,i.kt)("h4",{id:"block-ip-address-single-ip-address-multiple-address-ipv6-address"},"Block IP address: single IP address, multiple address, IPv6 address"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"deny")," directive on the ",(0,i.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("em",{parentName:"p"},"blocks")," to block IP address.\nFor example, the following code will block IP ",(0,i.kt)("inlineCode",{parentName:"p"},"12.34.56.78"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"http{\n   ...\n   deny 12.34.56.78;\n   ...\n}\n")),(0,i.kt)("p",null,"Use multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"deny")," directive to block multiple IPv4 and IPv6 addresses.\nFor example, the following code will block IPv4 ",(0,i.kt)("inlineCode",{parentName:"p"},"12.34.56.78"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"12.34.56.789"),", and IPv6 ",(0,i.kt)("inlineCode",{parentName:"p"},"1234:5db6::/78"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"http{\n   ...\n   deny 12.34.56.78;\n   deny 12.34.56.789;\n   deny 1234:5db6::/78;\n   ...\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Note: Always restart NGINX to apply the new configuration changes."))),(0,i.kt)("h4",{id:"block-user-agent"},"Block user-agent"),(0,i.kt)("p",null,"NGINX can be configured to block user agent. Add the following code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"block"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"server{\n   ...\n   ## Block user agent wget\n   if ($http_user_agent ~* (wget)){\n    return 403;\n   }\n   ...\n}\n")),(0,i.kt)("h3",{id:"deny"},"Deny"),(0,i.kt)("p",null,"NGINX can be configured to deny access to certain directories or file."),(0,i.kt)("h4",{id:"deny-access-to-directory-ie-resources"},"Deny access to directory, ie. /resources/"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"deny")," directive on the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("em",{parentName:"p"},"block")," to deny access to certain directory.\nFor example, the following code will deny access to ",(0,i.kt)("inlineCode",{parentName:"p"},"/style"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"location = /style {\n   deny all;\n   return 404;\n}\n")),(0,i.kt)("h4",{id:"deny-access-to-specific-file-ie-secretpdf"},"Deny access to specific file, ie. /secret.pdf"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"deny")," directive on the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," _block to deny access to certain file.\nFor example, the following code will deny access to ",(0,i.kt)("inlineCode",{parentName:"p"},"/secret.pdf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"location = /secret.pdf {\n   deny all;\n   return 404;\n}\n")),(0,i.kt)("h3",{id:"prevent"},"Prevent"),(0,i.kt)("p",null,"NGINX can be configured to prevent hotlinking."),(0,i.kt)("h4",{id:"prevent-hotlinking"},"Prevent hotlinking"),(0,i.kt)("p",null,"Add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," block under the ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," block to prevent hotlinking to all .gif and .png files, except to the website (example.com):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ .(gif|png)$ {\n   valid_referers none blocked example.com *.example.com;\n   if ($invalid_referer) {\n      return 403;\n   }\n}\n")),(0,i.kt)("h3",{id:"force"},"Force"),(0,i.kt)("p",null,"NGINX can be configured to force www, non-www and HTTPS."),(0,i.kt)("h4",{id:"force-www-redirect-non-www-to-www"},"Force www (redirect non-www to www)"),(0,i.kt)("p",null,"Add the following code to force redirect from non-www (example.com) to www (",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"server {\n  server_name example.com;\n  return 301 $scheme://www.example.com$request_uri;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Always create a new ",(0,i.kt)("inlineCode",{parentName:"em"},"server")," block to force redirection")),(0,i.kt)("h4",{id:"force-non-www-redirect-www-to-non-www"},"Force non-www (redirect www to non-www)"),(0,i.kt)("p",null,"Add the following code to force redirect from www (",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),") to non-www (example.com):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"server {\n  server_name www.example.com;\n  return 301 $scheme://example.com$request_uri;\n}\n")),(0,i.kt)("h4",{id:"force-https"},"Force HTTPS"),(0,i.kt)("p",null,"Add the following code to force redirect from www (",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),") or non-www (example.com) to HTTPS (",(0,i.kt)("a",{parentName:"p",href:"https://www.example.com"},"https://www.example.com"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"server {\n  listen 80;   #listen for all the HTTP requests\n  server_name example.com www.example.com;\n  return 301 https://www.example.com$request_uri;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Always create a new ",(0,i.kt)("inlineCode",{parentName:"em"},"server")," block to force redirection")),(0,i.kt)("h3",{id:"redirect"},"Redirect"),(0,i.kt)("p",null,"NGINX can be configured to redirect to a new domain."),(0,i.kt)("h4",{id:"redirect-links-to-a-new-domain"},"Redirect links to a new domain"),(0,i.kt)("p",null,"Add the following code to redirect an old domain (example.com) to a new domain (newexample.com):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  server_name example.com;\n  return 301 http://www.newexample.com$request_uri;\n}\n")),(0,i.kt)("h4",{id:"redirect-links-to-a-single-page-of-a-new-domain"},"Redirect links to a single page of a new domain"),(0,i.kt)("p",null,"Add the following code to redirect an old domain (example.com) to a single page of a new domain (newexample.com):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  server_name example.com;\n  return 301 http://www.newexample.comi;\n}\n")),(0,i.kt)("h3",{id:"rename"},"Rename"),(0,i.kt)("p",null,"NGINX can be configured to rename files using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rewrite")," directive."),(0,i.kt)("h4",{id:"rename-php-to-html"},"Rename .php to .html"),(0,i.kt)("p",null,"Add the following code to rename .php to .html:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ \\.php$ {\n    if (!-f $request_filename) {\n        rewrite ^(.*)\\.php$ $1.html permanent;\n    }\n}\n")),(0,i.kt)("h4",{id:"remove-extension-html-php-from-urls"},"Remove extension (.html, .php) from URLs"),(0,i.kt)("p",null,"Add the following code to rename remove .html and .php extension from URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n    try_files $uri $uri.html $uri/ @extensionless-php;\n    index your_index.html your_index.htm your_index.php;\n}\n\nlocation ~ \\.php$ {\n    try_files $uri = 404;\n}\n\nlocation @extensionless-php {\n    rewrite ^(.*)$ $1.php last;\n}\n")),(0,i.kt)("h4",{id:"remove-trailing-slash"},"Remove trailing slash"),(0,i.kt)("p",null,"Add the following code to remove trailling slash in your ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"rewrite ^/(.*)/$ /$1 permanent;\n")),(0,i.kt)("h2",{id:"explanations"},"Explanations"),(0,i.kt)("p",null,"The NGINX configuration file is different from the Apache configuration file."),(0,i.kt)("h3",{id:"nginxconf-vs-httpdconf"},"nginx.conf vs httpd.conf"),(0,i.kt)("p",null,"Differences between NGINX configuration (nginx.conf) and Apache configuration (httpd.conf):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simplicity"),": NGINX is much more complex to develop when compared to Apache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Architecture"),": NGINX uses an event driven architecture while Apache uses a process driven approach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operating system support"),": NGINX and Apache supports all Unix OS and Windows, but NGINX performance on Windows isn't stable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance"),": NGINX is 2.5 times faster than Apache and takes less memory than Apache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support and documentation"),": NGINX has a weaker support and documentation, while Apache has a good amount of documentation because it has been around longer.")),(0,i.kt)("p",null,"Simillarities between NGINX configuration (nginx.conf) and Apache configuration (httpd.conf):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type"),": They are both open-source web server and can be used as a reverse proxy server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Securities"),": They both have the same level of security."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexibility"),": They are both compatible for dynamic modules.")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Here are the most common problems developer face when using NGINX."),(0,i.kt)("h3",{id:"error-502-bad-gateway"},"Error 502 Bad Gateway"),(0,i.kt)("p",null,"NGINX will return the 502 Bad gateway error if it receives an error from the server. Here are some possible reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NGINX is not running."),(0,i.kt)("li",{parentName:"ul"},"PHP-FPM is not running."),(0,i.kt)("li",{parentName:"ul"},"PHP-FPM timeout."),(0,i.kt)("li",{parentName:"ul"},"Firewall blocks request."),(0,i.kt)("li",{parentName:"ul"},"Domain name not allowed"),(0,i.kt)("li",{parentName:"ul"},"Server unavailable")),(0,i.kt)("p",null,"Here are some possible solutions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clear browser cache and delete cookies then reload the page."),(0,i.kt)("li",{parentName:"ul"},"Use a different browser and disable all plugins."),(0,i.kt)("li",{parentName:"ul"},"Restart the computer and network equipment."),(0,i.kt)("li",{parentName:"ul"},"Change the DNS server."),(0,i.kt)("li",{parentName:"ul"},"Restart the server."),(0,i.kt)("li",{parentName:"ul"},"Check the firewall logs for unusual crashes.")),(0,i.kt)("h3",{id:"gateway-timeout-with-fastcgi"},"Gateway Timeout with FastCGI"),(0,i.kt)("p",null,"A Gateway timeout error with FastCGI happens when NGINX did not receive a timely response from the server. Modify the following ",(0,i.kt)("em",{parentName:"p"},"directvies"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_header_timeout 300;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_body_timeout 300;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"send_timeout 300;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastcgi_read_timeout 300;"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-NGINX"},"server{\n  ...\n  client_header_timeout 300;\n  client_body_timeout 300;\n  send_timeout 300;\n  fastcgi_read_timeout 300;\n  ...\n}\n")),(0,i.kt)("h3",{id:"error-connecting-to-php5-fpm-socket"},"Error connecting to php5-fpm socket"),(0,i.kt)("p",null,"This error usually occurs because of the permission of the socket file. To fix this, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/php5/fpm/pool.d/www.conf")),(0,i.kt)("li",{parentName:"ol"},"Add the following code to recreate the socket file with proper user.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"listen.owner = www-data\nlisten.group = www-data\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Restart PHP-FPM.")),(0,i.kt)("h3",{id:"error-403-directory-is-forbidden"},"Error 403 Directory is forbidden"),(0,i.kt)("p",null,"Error 403 Directory is forbidden happens when a client tries to access a directory without permission. Here are some possible reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Incorrect configuration for the directory loading"),(0,i.kt)("li",{parentName:"ul"},"Incorrect access permission")),(0,i.kt)("p",null,"Here are the some possible solutions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the directory is actually there by making sure it is in the list of available directories in NGINX."),(0,i.kt)("li",{parentName:"ul"},"Make sure that the client has permission to access the file. This is done by running the following command in terminal:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"sudo chown -R www-data:www-data *\nsudo chmod 755 {dir}\nsudo chmod 644 {files}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clear browser cache and delete cookies then reload the page."),(0,i.kt)("li",{parentName:"ul"},"Configure the firewall to allow access.")),(0,i.kt)("h3",{id:"permission-denied-while-connecting-to-upstream"},"Permission denied while connecting to upstream"),(0,i.kt)("p",null,"This error usually occurs because of the selinux policy. The solution is to disable it. To do so, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/sysconfig/selinux")," file."),(0,i.kt)("li",{parentName:"ol"},"In the config file, set ",(0,i.kt)("inlineCode",{parentName:"li"},"SELINUX = disabled"))),(0,i.kt)("h3",{id:"close-upstream-connection-after-request"},"Close upstream connection after request"),(0,i.kt)("p",null,"This error usually occurs because of the way NGINX handle upstream connection. To fix it, add the following code in the nginx.conf file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},'...\nserver {\n  ...\n location / {\n     proxy_http_version 1.1;\n     proxy_set_header Connection "";\n     ...\n     }\n}\n...\n')),(0,i.kt)("h3",{id:"upstream-sent-too-big-header-while-reading-response-header-from-upstream"},"Upstream sent too big header while reading response header from upstream"),(0,i.kt)("p",null,"This error usually occurs because of the proxy buffers that NIGNX uses. To fix it, modify the proxy buffer size in to the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("em",{parentName:"p"},"block"),". Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"...\nserver {\n  ...\n location / {\n     ...\n     proxy_buffer_szie 128k;\n     proxy_buffers 4 256k;\n     proxy_busy_buffers_size 256k;\n     }\n}\n...\n")),(0,i.kt)("h3",{id:"nginx-serves-php-files-as-downloads-instead-of-executing"},"NGINX serves .php files as downloads instead of executing"),(0,i.kt)("p",null,"This error usually occurs because of the php configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"block"),". To fix it, add the following code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/example.com.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"...\nserver {\n  ...\n location ~ \\.php$ {\n  try_files $uri /index.php =404;\n  fastcgi_split_path_info ^(.+?\\.php)(/.+)?$;\n  fastcgi_pass unix:/var/run/php5-fpm.sock;\n  fastcgi_index index.php;\n  include fastcgi_params;\n }\n}\n...\n")),(0,i.kt)("h2",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,"Here are some best practices that you should follow when configure NGINX."),(0,i.kt)("h3",{id:"hide-nginx-version-server_tokens"},"Hide nginx version (server_tokens)"),(0,i.kt)("p",null,"Hiding NGINX version is done to increase security. To do so, follow this guide: ",(0,i.kt)("a",{parentName:"p",href:"#hide-nginx-version-server_tokens"},"Hide NGINX version"),"."),(0,i.kt)("h3",{id:"limit-methods-accept-get-head-post-and-disable-delete-search"},"Limit methods (accept GET, HEAD, POST, and disable DELETE, SEARCH)"),(0,i.kt)("p",null,"Limiting methods is done to increase security. To do so, follow this guide: ",(0,i.kt)("a",{parentName:"p",href:"#disable-unnecessary-http-methods-delete-trace-track"},"Disable unnecesary methods"),"."),(0,i.kt)("h3",{id:"dont-use-chmod-777"},"Don't use chmod 777"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod 777")," command in the terminal is not a good practice beacuse it compromise security. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir - m 777 directory_name")," instead."),(0,i.kt)("h3",{id:"dont-use-root-inside-location"},"Don't use root inside location"),(0,i.kt)("p",null,"Adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," ",(0,i.kt)("em",{parentName:"p"},"directive")," inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("em",{parentName:"p"},"block")," is not a good practice. Doing so would require you to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," ",(0,i.kt)("em",{parentName:"p"},"directive")," inside every ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("em",{parentName:"p"},"block")," . Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," ",(0,i.kt)("em",{parentName:"p"},"directive")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"block")," instead."),(0,i.kt)("h3",{id:"dont-use-sslv3-use-tls-instead-as-best-practice"},"Don't use SSLv3, use TLS instead as Best practice"),(0,i.kt)("p",null,"Using TLS instead of SSLv3 is recommended to increase security. To do so, follow guide: ",(0,i.kt)("a",{parentName:"p",href:"#using-tls-instead-of-sslv3"},"Using TLS instead of SSLv3"),"."))}m.isMDXComponent=!0}}]);