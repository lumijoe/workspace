<!-- HTMLファイル内部呼び出し（非推奨） -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptの呼び出し方法</title>
    <script>
        alert('Hello, JavaScript!');
    </script>
</head>
<body>
    <h1>JavaScriptの呼び出し方法</h1>
</body>
</html>

<!-- 外部呼び出し（推奨） -->
 <!DOCTYPE html>
 <html lang="ja">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptの呼び出し方法</title>
    <script src="script.js"></script>
 </head>
 <body>
    <h1>JavaScriptの呼び出し方法</h1>
 </body>
 </html>

 <!-- インラインスクリプトとして記述（非推奨） -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptの呼び出し方法</title>
</head>
<body>
    <h1>JavaScriptの呼び出し方法</h1>
    <button onclick="alert('Hello, JavaScript!!!')">Click me!</button>
</body>
</html>

<!-- データ型 -->

数値（Number）：整数や小数を扱います。
文字列（String）：テキストデータを扱います。
真偽値（Boolean）：true または false の 2 つの値だけを持ちます。
オブジェクト（Object）：複数のデータをまとめて扱うためのものです。
配列（Array）：順序付けられたデータの集合です。
未定義（Undefined）：値が設定されていないことを示します。
Null：意図的に空であることを示します。

<!--
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptの呼び出し方法</title>
    <script src="script.js"></script>
    <title>関数、DOM、イベント</title>
    <script src="functions.js"></script>
</head>
<body>
    <h1>JavaScriptの呼び出し方法</h1>
    <h1>関数、DOM、イベント</h1>
    <button onclick="alert('Hello, JavaScript!!!')">Click me!</button>

</body>
</html> -->

<!-- HTMLドキュメント -->
<!-- <!DOCTYPE html>
<html>
<head>
    <title>DOMサンプル</title>
</head>
<body>
    <h1 id="header">Hello, World!</h1>
    <p class="myClass">DOMの文章です</p>
    <a href="https://runteq.jp">RUNTEQのページへ</a>
</body>
</html> -->

<!-- DOMツリー構造 -->
<!-- - Document
  - <!DOCTYPE html>
  - <html>
    - <head>
      - <title>
        - テキストノード "DOMサンプル"
    - <body>
      - <h1 id="header">
        - テキストノード "Hello, World!"
      - <p class="myClass">
        - テキストノード "DOMの文章です"
      - <a href="https://runteq.jp">
        - テキストノード "RUNTEQのページへ" -->

        <!-- / DOMツリー構造
        // DOMツリーの基本構成
        // Dドキュメントノード：ツリーのルート（根）で、HTMLドキュメント全体を表します。ドックタイプ
        // E要素ノード：HTMLタグを表し、他のノードを子として持つことができます。htmlタグ
        // Tテキストノード：要素ノードの中に含まれるテキストを表します。タグ内要素
        // T属性ノード：HTMLタグの属性（例えば、idやclass）を表します　タグ内属性 -->

ノードの種類 説明 例
要素ノード（Element Node） HTML タグそのもの <h1> <p> <div> など
テキストノード（Text Node） 要素の中のテキスト "Hello, world!"
属性ノード（Attribute Node） 要素の属性 class="example"
コメントノード（Comment Node） HTML のコメント <!-- これはコメント -->
