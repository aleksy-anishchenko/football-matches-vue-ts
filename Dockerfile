# Этап сборки
# Используем образ Node.js для сборки фронтенда
FROM node:20-alpine AS build

# Создаем рабочую директорию приложения
WORKDIR /app

# Копируем файлы зависимостей (для кэширования слоёв)
COPY package*.json ./

# Устанавливаем зависимости строго по lock-файлу
RUN npm ci

# Копируем исходный код приложения
COPY . .

# Собираем production-версию приложения
RUN npm run build

# Этап выполнения
# Используем образ nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранный фронт из этапа сборки
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx (поддержка SPA / Vue Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет прослушиваться
EXPOSE 80

# Запуск nginx в foreground
CMD ["nginx", "-g", "daemon off;"]