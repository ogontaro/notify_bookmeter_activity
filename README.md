# notify bookmeter activity
読書メーターの活動ログをSlackに通知

## requirement
- nodejs: 6.10
- [serverless](https://github.com/serverless/serverless): latest

## development
### set environment before development
```
$ cp .envrc.sample .envrc
$ vi .envrc 
$ cp config/settings/development.yml.sample config/settings/development.yml
$ cp config/settings/production.yml.sample  config/settings/production.yml
$ vi config/settings/development.yml
$ vi config/settings/production.yml
```

### start developent
```
$ yarn install
$ yarn run start
```

### lint
```
$ yarn run lint
```

## deployment
development
```
$ yarn run deploy
```

production
```
$ yarn run deploy --stage production
```
