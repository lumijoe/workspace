// 外部ファイル呼び出しパターン
// alert('Hello, JavaScript!!');

// データ型
// let number = 42; // 数値（Number：整数や少数）
// let text = "Hello, World!"; // 文字列（String：テキストデータ）
// let isTrue = true; // 真偽値（Boolean：trueまたはfalseの２値だけを持つ）
// let person = { name: "Alice", age: 25 }; // オブジェクト（Object：複数データをまとめて扱う）
// let numbers = [1, 2, 3, 4, 5]; // 配列（Array：順序付けられたデータの集合）
// let notDefined; // 未定義（Undefined：値が設定されていないことを示す）
// let emptyValue = null; // Null（意図的に空であることを示す）

// 演算子
// let a = 5;
// let b = 2;
// console.log(a + b); // 足し算: 7
// console.log(a - b); // 引き算: 3
// console.log(a * b); // 掛け算: 10
// console.log(a / b); // 割り算: 2.5
// console.log(a % b); // 剰余: 1（割った後の余り）
// console.log(a ** b); // 累乗: 25（5の2乗）

// 比較演算子（演算子を使用して値を比較、trueやfalse）
// let x = 10;
// let y = 20;
// console.log(x == y); // 等しいか: false
// console.log(x === y); // 厳密に等しいか: false
// console.log(x != y); // 等しくないか: true
// console.log(x !== y); // 厳密に等しくないか: true
// console.log(x < y); // より小さいか: true (10<20)
// console.log(x > y); // より大きいか: false (10>20)
// console.log(x <= y); // 以下か: true (10<=20)
// console.log(x >= y); // 以上か: false (10>=20)

// 論理演算子（演算子を使用して条件や条件反転が可能）
// let isTrue = true;
// let isFalse = false;
// console.log(isTrue && isFalse); // AND: 両方がtrueの場合のみtrue。結果はfalse
// console.log(isTrue || isFalse); // OR: どちらかがtrueならtrue。結果はtrue
// console.log(!isTrue); // NOT: trueをfalseに、falseをtrueに反転。結果はfalse

// 制御構文とは、コードの実行順序を制御するためのものです。
    // if文
    // 条件によって、実行するコードを分岐させます。
    // let age = 18;
    // if (age >= 18) {
    //     console.log("You are an adult.");
    // } else {
    //     console.log("You are a minor.");
    // }

//     forループ
// 繰り返し処理を行うための構文です。指定した回数だけ繰り返します。
// for (let i = 0; i < 5 ; i++) {
//     console.log(i);
// }

// switch文
// 複数の条件を使って、実行するコードを選択します。
// let color = "red";
// switch (color) {
//     case "red":
//         console.log("Color is red.");
//         break;
//     case "blue":
//         console.log("Color is blue.");
//         break;
//     default:
//         console.log("Color is not red or blue.");
//         break;
// }

// // whileループ
// 条件がtrueの間、繰り返し処理を行います。
// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// document.getElementById('changeTextButton').addEventListener('click', 
//     function() {
//         let header = document.getElementById('header');
//         header.textContent = 'Text Changed!';
//     }
// );

// document.getElementById('changeTextButton').addEventListener('mouseover',
//     function () {
//         let button = document.querySelector('button');
//         button.style.color = 'blue';
//     }
// );
// document.getElementById('changeTextButton').addEventListener('mouseout',
//     function () {
//         let button = document.querySelector('button');
//         button.style.color = 'black';
//     }
// );
// document.getElementById('changeTextButton').addEventListener('keydown',
//     function () {
//         let button2 = document.querySelector('button');
//         button2.style.backgroundColor = 'black';
//         button2.style.color = "white";
//     }
// );

// document.getElementById('subscribe').addEventListener('change', function () {
//     if (this.checked) {
//         alert('ニュースレターを受け取ることにしました！');
//     } else {
//         alert('ニュースレターを受け取らないことにしました！');
//     }
// });






