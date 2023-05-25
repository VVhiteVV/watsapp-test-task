# Название приложения

SPA приложение с интеграцией чата watsapp через сервис [green-api](https://green-api.com/) .

## Технологии

Для разработки использовались следующие технологии:

- [React](https://reactjs.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [TypeScript](https://www.typescriptlang.org/)

## Настройки Instance 

Для доступа к приложению необходимо установить следующие настройки instance:

- Получать уведомления о входящих сообщениях и файлах
- Получать уведомления о сообщениях, отправленных с телефона

P.S (Приложение должно получать именно эти настройки, при указаных условия тестового задания)

## Запуск приложения

1. Склонируйте репозиторий на свой компьютер:
```bash
git clone https://github.com/username/repo-name.git
 ```
2. Склонируйте репозиторий на свой компьютер:

```bash
cd watsapp-test-task
 ```
3. Установите зависимости:

```bash
npm install
 ```

4. Запустите приложение:

```bash
npm run start
 ```

5. Если автоматический не открылась вкладка проекта, перейдите по адресу: 

[http://localhost:3000](http://localhost:3000)

## Пользование

1. Введите данные с платформы green-api:
- idInstance
- apiKey

2. После переадресации вас введите номер человек с Российским кодом страны ( +7 ), после нажмите на поиск и создастся чат с данным пользователем, если же пользователя не будет, выдаст ошибку по валидации.


3. Откройте чат с найденным пользователем и общайтесь!

