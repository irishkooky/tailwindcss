# [tailwindcss](https://tailwindcss.com/)
公式サイト→https://tailwindcss.com/

## 開発環境
```bash
npm run dev
```

## 本番環境
```bash
npm run build
```

## 使い方
1. フォークして自分のリポジトリに追加する
2. クローンする
3. クローンしてきたディレクトリ内に`index.html`等のtailwind cssを使ってスタイルを当てたいhtmlファイルを入れる<br> ・`index.html`以外の名前にする時はここをいじるhttps://github.com/irishkooky/tailwindcss/blob/bf18abb62c09f1cbc50ec1149b5db6a723fa9c54/tailwind.config.js#L3
4. `<link rel="stylesheet" href="dist.css">`でcssを読み見込むようにする。(reset.cssは必要)
5. `npm run dev`でtailwind cssを動かす(watchさせて自動でdist.cssにコンパイルされるような仕組みにしている)
6. あとはhtml内のclassにスタイルを当てていくだけ！！
7. スタイル当て終わったら(開発が完了したら)`npm run dev`を落として`npm run build`する(dist.cssがなんと1行になる！)
8. 納品やデプロイする時はhtmlとdist.cssのみでOK

## tailwind cssのいいところ
- `text-red-700`とか`font-bold`とか何のスタイルが当たっているのか直感的に分かりやすい
- cssを書かず、classを書くのみでいい
- レスポンシブに強い
- ベンダープレフィックス(`-webkit`とか`-moz`)を勝手につけてくれるからブラウザ対応も安心
- hover等も簡単に実装できる
- buildしたら不要なcssを排除してくれるので軽くなりパフォーマンスが良い
- 割と最近のモダンなフレームワーク
- 流行ってる
- イケイケ
- かっこいい
- かわいい
- おしゃれ
- モテる
