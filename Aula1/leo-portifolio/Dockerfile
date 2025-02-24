FROM nginx:latest

# Copie o arquivo de configuração personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copie os arquivos do Vite para o diretório padrão do Nginx
COPY dist /usr/share/nginx/html

# COPY ./dist/index.html /usr/share/nginx/html
# COPY ./dist/assets/ /usr/share/nginx/html/leo-portifolio/assets/
# COPY ./dist/images/ /usr/share/nginx/html/leo-portifolio/images/


# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

