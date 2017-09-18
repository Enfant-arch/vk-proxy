# vk-proxy
[![Jenkins](https://img.shields.io/jenkins/s/https/ci.xtrafrancyz.net/job/vk-proxy.svg)](https://ci.xtrafrancyz.net/job/vk-proxy/)

Прокси-сервер для приложения ВКонтакте на Android.

Главное преимущество **vk-proxy** перед VPN - это то, что не нужно постоянно запускать VPN, тратить на него батарею и смотреть рекламу перед подключением. С этим прокси вы просто пользуетесь приложением ВК точно так же, как и до блокировок. В отличии от прокси, встроенного в офф. приложение, это работает.

## Установка прокси
- `go get -u github.com/xtrafrancyz/vk-proxy`
- `cd $GOPATH/src/github.com/xtrafrancyz/vk-proxy`
- `go build`
- Настроить nginx по примеру в `conf/nginx.conf`
- Настроить HTTPS, так как приложение без него работать не будет. Можно либо подключить [Cloudflare](https://www.cloudflare.com), либо сгенерировать сертификат через [Let's Encrypt](https://certbot.eff.org) и добавить его в nginx.

## Запуск прокси
Для удобства, вы можете записать все нужные параметры в конфигурационный файл:
```ini
host = 127.0.0.1
port = 80
```
... и затем запускать `./vk-proxy -config path/to/config.ini`

#### Параметры запуска
- `-host` -- ip адрес, на котором будет запущен прокси (по умолчанию на всех).
- `-port` -- порт прокси (по умолчанию 8881).
- `-unix` -- если указан, то вместо tcp, запускает на unix-сокете по указанному пути (например /var/run/vk-proxy.sock).
- `-domain` -- по умолчанию домен берется из заголовка Host запроса, но если вам необходимо всегда использовать один домен или нет возможности передать заголовок Host, то можете указать домен для замены здесь.
- `-log-requests` -- писать в консоль информацию о всех запросах (по умолчанию выключено).
- `-reduce-memory-usage` -- уменьшает использование памяти за счет процессора (по умолчанию выключено).

## Подключение к прокси
Чтобы подключиться к своему запущенному прокси, вам нужно будет заменить домен апи на свой, либо самостоятельно модифицировать нужное вам приложение ВК (будь то Android или iOS версия).

Для подключения к нашему публичному прокси `vk-api-proxy.xtrafrancyz.net`, вы можете скачать уже готовые приложения, либо вручную заменить домен апи в официальном приложении.

### Установка модифицированного приложения
Модифицированный *ВКонтакте (официальное приложение)*, *Kate Mobile* или *VK Coffee* разных версий вы можете скачать здесь: [Модифицированные приложения](https://github.com/xtrafrancyz/vk-proxy/wiki/Модифицированные-приложения).

### Настройка официального приложения или его модов
1. Открываем приложение ВК, заходим в **Настройки** -> **Основные**.
2. Убираем галочку с пункта Proxy (пункт может то появляться, то исчезать).
3. Открываем стандартный номеронабиратель и пишем следующий код: `*#*#856682583#*#*`. Если у вас Samsung или телефон, где этот код не работает, то скачиваем приложение [Secret Codes](https://play.google.com/store/apps/details?id=fr.simon.marquis.secretcodes) и через него заходим в секретное меню ВК.
4. В секретном меню изменяем Домен API и Домен OAuth на свои. В нем же выключаем прокси, если такой пункт есть и включен.
5. Пользуемся!

## Неисправимые баги *(скорее всего)*
- Внешние ссылки не работают в старых версиях официального приложения ВК, в браузере открывается https://m.vk.com/away?... Исправить можно или модификацией приложения (скачать его можете [здесь](https://github.com/xtrafrancyz/vk-proxy/wiki/Модифицированные-приложения)), или обновлением.
- Если вашим прокси пользуются больше нескольких десятков человек, то может не отображаться музыка в профиле. Это связано с защитой авторских прав, спустя несколько недель использования музыка все же появляется.
