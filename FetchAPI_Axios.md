# Fetch API vs Axios

## Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

Differences from jQuery

The fetch specification differs from jQuery.ajax() in three main ways:

- The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

- fetch() won't send cross-origin cookies unless you set the credentials init option (to include).

## Axios

![1660483442528](image/README/axios.png)

![1660483460429](image/README/axios_options.png)

## Fetch API -> Axios

![1660483511439](image/README/fetch2axios_01_f.png)

![1660483569744](image/README/fetch2axios_01_a.png)

![1660483656504](image/README/fetch2axios_02_f.png)

![1660483691617](image/README/fetch2axios_02_a.png)

![1660483713087](image/README/fetch2axios_03_f.png)

![1660483790833](image/README/fetch2axios_03_a.png)

![1660483848671](image/README/fetch2axios_04_f1.png)

![1660483950943](image/README/fetch2axios_04_f2.png)

![1660484041617](image/README/fetch2axios_04_a1.png)

![1660483999281](image/README/fetch2axios_04_a2.png)

![1660484124121](image/README/fetch2axios_05_f.png)

![1660484167454](image/README/fetch2axios_05_a.png)

![1660484206882](image/README/fetch2axios_06_f.png)

![1660484244251](image/README/fetch2axios_06_a.png)
