# vk-proxy

Прокси-сервер для API ВКонтакте, который можно использовать в Android и других приложениях.

Главное преимущество **vk-proxy** перед VPN - это то, что не нужно постоянно запускать VPN, тратить на него батарею и смотреть рекламу перед подключением. С этим прокси вы просто пользуетесь приложением ВК точно так же, как и до блокировок. В отличии от прокси, встроенного в офф. приложение, это работает.

Необходимо настроить [nginx](https://nginx.org/) по примеру в `conf/nginx.conf`, и HTTPS, так как приложение без него работать не будет. Можно либо подключить [Cloudflare](https://www.cloudflare.com), либо сгенерировать сертификат через [Let's Encrypt](https://certbot.eff.org) и добавить его в nginx.

## Запуск прокси
Для удобства, вы можете записать все нужные параметры в конфигурационный файл:
```ini
bind = 127.0.0.1:80
domain = vk-api-proxy.example.com
domain-static = vk-static-proxy.example.com
```
... и затем запускать `./vk-proxy -config path/to/config.ini`

#### Параметры запуска
- `-bind` -- ip адрес и порт, на котором будет запущен прокси, можно указать только порт `:80`. Вместо ip адреса можно указать абсолютный путь к unix сокету, например `/var/run/vk-proxy.sock`.
- `-domain` -- основной домен прокси для запросов к апи, картинок и прочего (**обязательно**).
- `-domain-static` -- домен для проксирования VKUI (`static.vk.ru`).
- `-log-verbosity` -- `0` писать только ошибки, `1` + статистику каждую минуту, `2` + все запросы, `3` + тело ответа на запрос.
- `-reduce-memory-usage` -- уменьшает использование памяти за счет процессора (по умолчанию выключено).
- `-filter-feed` -- фильтровать ленту новостей от рекламы (по умолчанию включено).
- `-gzip-upstream` -- использовать gzip для запросов к api.vk.ru (по умолчанию включено).

## Подключение к прокси
Чтобы подключиться к своему запущенному прокси, вам нужно будет заменить домен апи в приложении на свой, некоторые приложения и модификации позволяют это делать, а для некоторых нужна модификация приложения (будь то Android или iOS версия).


