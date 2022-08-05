# tailwindcss

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
3. クローンしてきたディレクトリ内に`index.html`等のtailwind cssを使ってスタイルを当てたいhtmlファイルを入れる
4. `<link rel="stylesheet" href="dist.css">`でcssを読み見込むようにする。(reset.cssは必要)
5. `npm run dev`でtailwind cssを動かす(watchさせて自動でdist.cssにコンパイルされるような仕組みにしている)
6. あとはhtml内のclassにスタイルを当てていくだけ！！
7. スタイル当て終わったら(開発が完了したら)`npm run dev`を落として`npm run build`する(dist.cssがなんと1行になる！)
8. 納品やデプロイする時はhtmlとdist.cssのみでOK
