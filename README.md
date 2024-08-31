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

##
モジュールエラーが出た場合
必要なモジュールをインストールしてあげてください

```
// インストールコマンドをするために、react-appに移動(場所がわからない場合、ls でファイルを確認しつつ移動してください)
cd react-app

// 足りないものをインストール(私は、mui と chakra と react-player というパッケージがなくてインストール)
npm install react-router-dom @mui/material @mui/icons-material @chakra-ui/react
npm install react-player

// キャッシュのクリア
npm cache clean --force
```

// Docker の停止と起動（私はアプリ上でやったので、以下のコマンドでは試していませんが載せておきます）
docker stop buds-memories_front
docker start buds-memories_front
npm start
