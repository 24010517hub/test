document.addEventListener('DOMContentLoaded', () => {
    // 対象となる入力要素をすべて取得
    const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    

    // 各入力要素に対して、フォーカス時のイベントを設定
    inputFields.forEach(field => {
        
        // 要素が選択されたとき
        field.addEventListener('focus', () => {
            // 'focused' というクラス名を追加
            field.classList.add('focused');
        });

        // 要素の選択が外れたとき
        field.addEventListener('blur', () => {
            // 'focused' というクラス名を削除
            field.classList.remove('focused');
        });
    });
});

// フォーム要素を取得
    const form = document.querySelector('.contact-container form');
    
    // フォームの 'submit' イベント（送信ボタンが押されたとき）に関数を紐付け
    form.addEventListener('submit', validateForm);
    
    // ↑ 上の行よりも前に、この関数自体を定義する必要があるため、
    // ここで関数を定義します。
    function validateForm(event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        // お名前が空欄の場合
        if (nameInput.value.trim() === "") {
            alert("お名前を入力してください。");
            event.preventDefault(); // フォームの送信を停止
            return false;
        }
        
        // メールアドレスが空欄の場合
        if (emailInput.value.trim() === "") {
            alert("メールアドレスを入力してください。");
            event.preventDefault(); 
            return false;
        }
        
        // すべてOKの場合
        alert("お問い合わせを送信しました！(実際には送信されません)");
        // ここにサーバーに送信する処理を記述
    }
    
 // <-- document.addEventListener('DOMContentLoaded') の閉じタグ
