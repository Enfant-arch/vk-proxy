# vk-proxy
Прокси-сервер для приложения ВКонтакте на Android.

## Запуск прокси
- Скопировать файл `config.example.js` в `config.js` и изменить нужные данные
- Выполнить `npm install`
- Выполнить `npm start`
- Настроить nginx по примеру в `conf/nginx.conf`
- Настроить HTTPS, так как приложение без него работать не будет. Можно либо подключить [Cloudflare](https://www.cloudflare.com), либо сгенерировать сертификат через [Let's Encrypt](https://certbot.eff.org) и добавить его в nginx.

## Настройка приложения
1. Открываем приложение ВК, заходим в **Настройки** -> **Основные**.
2. Убираем галочку с пункта Proxy (пункт может то появляться, то исчезать).
3. Открываем стандартный номеронабиратель и пишем следующий код: `*#*#856682583#*#*`. Если у вас Samsung или телефон, где этот код не работает, то скачиваем приложение [Secret Codes](https://play.google.com/store/apps/details?id=fr.simon.marquis.secretcodes) и через него заходим в секретное меню ВК.
4. Изменяем Домен API и Домен OAuth на свои.
5. Пользуемся!

### Неисправимые баги *(скорее всего)*
- Внешние ссылки не работают, в браузере открывается https://m.vk.com/away?... Исправить можно только модификацией приложения, скачать его можете [здесь](https://repo.xtrafrancyz.net/android-public/vk/).
- Маски в историях не работают, они пытаются загрузиться напрямую из ВК.
- Если вашей прокси пользуются больше нескольких десятков человек, то может не отображаться музыка в профиле. Это связано с защитой авторских прав, спустя месяц использования музыка все же появляется.
