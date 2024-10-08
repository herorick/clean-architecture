# Sử dụng Node.js làm base image
FROM node:latest

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Sao chép mã nguồn vào container
COPY ./src ./src

# Mở cổng cho ứng dụng
EXPOSE 3000

# Lệnh khởi động ứng dụng
CMD ["npm", "run", "dev"]