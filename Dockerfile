# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package.json ./
COPY package-lock.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY src/ /app/src

# アプリケーションファイルをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# ポート3000を公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
