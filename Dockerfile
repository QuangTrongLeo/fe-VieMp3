FROM node:18-alpine

WORKDIR /app

# Copy và cài đặt dependencies trước
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn và build dự án
COPY . .
RUN npm run build

# Cài đặt thư viện 'serve' để chạy file tĩnh toàn cục
RUN npm install -g serve

# Mở cổng 3000 (hoặc cổng bạn muốn)
EXPOSE 3000

# Chạy dự án bằng serve, hỗ trợ luôn cả React Router (tham số -s)
CMD ["serve", "-s", "build", "-l", "3000"]