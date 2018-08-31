# apus

apus is a wiki system which features instant updates. Namely, your changes are broadcasted to other clients.

# Get started

Copy `config.yaml.sample` as `config.yaml`.

Create an OAuth app on [GitHub](https://github.com/settings/developers) and obtain a client id and secret, then set `clientId` and `clientSecret` fields in `config.yaml`.

Prepare a SSL certificate and a key, and replace the values of `tlsCertificate` and `tlsKey` with the paths.

Now you can start a server:

```shell
$ mkdir data
$ cp config.yaml.sample config.yaml

$ openssl req -new -x509 -sha256 -days 36500 -newkey rsa:4096 -out localhost.crt -keyout localhost.key
# enter passphrase
$ openssl rsa -in localhost.key -out localhost.key

$ stack build
$ stack exec apus-exe config.yaml
```

- [Chrome58以降でハネられないSHA-2でオレオレ認証局署名のあるオレオレ証明書](https://qiita.com/mkgask/items/8d66dcada58a485e3585)