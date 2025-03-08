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
