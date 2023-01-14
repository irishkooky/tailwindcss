# [tailwindcss](https://tailwindcss.com/)

公式サイト →https://tailwindcss.com/

## 開発環境

```bash
npm run dev
dev
```

## 本番環境

```bash
npm run build
```

## 使い方

1. フォークして自分のリポジトリに追加する
2. クローンする
3. クローンしてきたディレクトリ内に`index.html`等の tailwind css を使ってスタイルを当てたい html ファイルを入れる<br> ・`index.html`以外の名前にする時はここをいじるhttps://github.com/irishkooky/tailwindcss/blob/bf18abb62c09f1cbc50ec1149b5db6a723fa9c54/tailwind.config.js#L3
4. `<link rel="stylesheet" href="dist.css">`で css を読み見込むようにする。(reset.css は必要)
5. `npm run dev`で tailwind css を動かす(watch させて自動で dist.css にコンパイルされるような仕組みにしている)
6. あとは html 内の class にスタイルを当てていくだけ！！
7. スタイル当て終わったら(開発が完了したら)`npm run dev`を落として`npm run build`する(dist.css がなんと 1 行になる！)
8. 納品やデプロイする時は html と dist.css のみで OK

## tailwind css のいいところ

- `text-red-700`とか`font-bold`とか何のスタイルが当たっているのか直感的に分かりやすい
- css を書かず、class を書くのみでいい
- レスポンシブに強い
- ベンダープレフィックス(`-webkit`とか`-moz`)を勝手につけてくれるからブラウザ対応も安心
- hover 等も簡単に実装できる
- build したら不要な css を排除してくれるので軽くなりパフォーマンスが良い
- 割と最近のモダンなフレームワーク
- 流行ってる
- イケイケ
- かっこいい
- かわいい
- おしゃれ
- モテる
