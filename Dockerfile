FROM nginx:alpine

# Copying static page files
COPY ./dist /usr/share/nginx/html

RUN sed -i '/index  index.html index.htm;/a try_files \$uri \$uri/ /index.html?q=\$uri&\$args;' /etc/nginx/conf.d/default.conf

# Telling that this uses por 80
EXPOSE 80