// 外部ファイル呼び出しパターン
alert('Hello, JavaScript!!');

// データ型
let number = 42; // 数値（Number：整数や少数）
let text = "Hello, World!"; // 文字列（String：テキストデータ）
let isTrue = true; // 真偽値（Boolean：trueまたはfalseの２値だけを持つ）
let person = { name: "Alice", age: 25 }; // オブジェクト（Object：複数データをまとめて扱う）
let numbers = [1, 2, 3, 4, 5]; // 配列（Array：順序付けられたデータの集合）
let notDefined; // 未定義（Undefined：値が設定されていないことを示す）
let emptyValue = null; // Null（意図的に空であることを示す）

// 演算子
let a = 5;
let b = 2;
console.log(a + b); // 足し算: 7
console.log(a - b); // 引き算: 3
console.log(a * b); // 掛け算: 10
console.log(a / b); // 割り算: 2.5
console.log(a % b); // 剰余: 1（割った後の余り）
console.log(a ** b); // 累乗: 25（5の2乗）

// 比較演算子
let x = 10;
let y = 20;
console.log(x == y); // 等しいか: false
console.log(x === y); // 厳密に等しいか: false
console.log(x != y); // 等しくないか: true
console.log(x !== y); // 厳密に等しくないか: true
console.log(x < y); // より小さいか: true (10<20)
console.log(x > y); // より大きいか: false (10>20)
console.log(x <= y); // 以下か: true (10<=20)
console.log(x >= y); // 以上か: false (10>=20)

// 論理演算子
// これらの演算子を使って、複数の条件を組み合わせたり、条件を反転させたりできます。
// let isTrue = true;
// let isFalse = false;
// console.log(isTrue && isFalse); // AND: 両方がtrueの場合のみtrue。結果はfalse
// console.log(isTrue || isFalse); // OR: どちらかがtrueならtrue。結果はtrue
// console.log(!isTrue); // NOT: trueをfalseに、falseをtrueに反転。結果はfalse

// 制御構文とは、コードの実行順序を制御するためのものです。
    // if文
    // 条件によって、実行するコードを分岐させます。
    let age = 18;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

//     forループ
// 繰り返し処理を行うための構文です。指定した回数だけ繰り返します。
for (let i = 0; i < 5 ; i++) {
    console.log(i);
}