# buds-memories_front

## 手順
> [!WARNING]
> Dockerアプリは起動した状態で実行してください。

"buds-memories_front" をクローン後、 "react-app" を削除<br>
その後、以下のコマンドを実行
```
// react-app 作成
docker-compose run --rm node sh -c 'npx create-react-app react-app --template typescript'

// コンテナ作成
docker-compose up --build
```
Dockerアプリ上でコンテナの "Actions" を起動後、リンクに飛ぶ
