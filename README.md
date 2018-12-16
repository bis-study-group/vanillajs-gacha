# 猫GIFガチャを作ろう

## 課題

後述する仕様の通りに動作するように `js/app.js` を編集しましょう。  
穴埋めになっているので `/* Insert code here... */` の箇所にコードを足してください。

HTML と CSS は出来ているので変更しません。

## 提出方法

`solution/{your name}` のルールでブランチを作成してください。

```console
$ git clone git@github.com:bis-study-group/vanillajs-gacha.git
$ git checkout -b solution/name
```

解き終わったらリモートリポジトリにプッシュしてください。

```console
$ git push origin solution/name
```

## 仕様

- 最初は「遊ぶ」ボタンだけが表示されています。
- 「遊ぶ」ボタンをクリックすると、ランダムに選ばれた猫の GIF 画像が表示されます。
- 「もう一回」ボタンをクリックすると最初の状態に戻ります。

GIF 画像取得 API（`/api/gacha`）は以下の形式の JSON を返却します。

```json
{
  "url": "画像のURL"
}
```

## 起動方法

今回はサーバーサイド（`server.js`）も用意しました。  
HTML ファイルなども `server.js` が配信しています。  
そのため Liver Server ではなく、`server.js` を起動して動作確認します。

まずは依存パッケージをインストールしてください。

```console
$ npm install
```

起動するには以下のコマンドを実行します。

```console
$ npm start
```

http://localhost:8008 を開いてください。

## Promise

API との通信における非同期処理には **Promise** オブジェクトを使用しています。Promise は今や JavaScript において非同期処理を扱う一般的な手法ですので覚えておきましょう。

API との通信には **Axios** というライブラリを使っています。そして Axios の通信メソッドは Promise オブジェクトを返却します。

```js
const promise = axios.get('/api/abcdefg');
```

Promise という英単語は「約束」という意味です。約束とは、未来の出来事を今決めることですね。Promise オブジェクトも同様に、未来の処理を定義します。

```js
const promise = axios.get('/api/abcdefg');
// (1) ここでは通信結果は返ってきていない。
promise.then(response => {
  // (2) ここで通信が返ってきている。
});
// (3) ここでも通信結果は返ってきていない。
```

`axios.get()` が返却するのは通信結果ではなく、Promise オブジェクトです。Promise オブジェクトの `then` メソッドに、非同期処理が終わったときに実行させる関数を渡すことで、通信結果を受け取ることができます。HTTP 通信という非同期処理が終わったとき（つまり未来）に処理してほしいことを「約束」させるわけですね。

```js
const promise = axios.get('/api/abcdefg');

promise.then(response => {
  // 通信成功
});

promise.catch(error => {
  // 通信失敗 500など
});
```

`catch` メソッドに関数を渡すことで、非同期処理が失敗したときの挙動を約束させることもできます。

上記のコードはメソッドチェーンで以下のように書くこともできます。

```js
axios.get('/api/abcdefg')
  .then(response => {
    // 通信成功
  })
  .catch(error => {
    // 通信失敗 500など
  });
```

Promise オブジェクトを変数に入れる必要はないので、こちらの書き方の方が一般的です。

Promise は非同期処理を扱うための汎用的な機能ですので、その用途は HTTP 通信に限定されません。ただやはりよく使うのは通信処理でしょう。
