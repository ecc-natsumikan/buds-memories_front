# buds-memories_front

## 手順
クローン後、 "react-app" を削除
その後、以下のコマンドを実行
```
// コンテナ作成
docker-compose up --build

// react-app 作成
docker-compose run --rm node sh -c 'npx create-react-app react-app --template typescript'
```
Dockerアプリ上でコンテナの "Actions" を起動後、リンクに飛んでみる
