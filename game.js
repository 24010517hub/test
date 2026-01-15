// game.js

document.addEventListener('DOMContentLoaded', () => {
    // 全てのアコーディオンのトリガー（h3タグ）を取得
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(trigger => {
        // 初期状態として、全てのトリガーに「閉じる」矢印のアイコンを付ける
        trigger.innerHTML += '<span class="accordion-icon">▼</span>';

        trigger.addEventListener('click', () => {
            // クリックされたh3タグの直後のコンテンツ要素（.accordion-content）を取得
            const content = trigger.nextElementSibling;
            const icon = trigger.querySelector('.accordion-icon');

            if (content && content.classList.contains('accordion-content')) {
                
                // 現在、コンテンツが表示されているかチェック
                if (content.style.display === 'block') {
                    // 表示されていたら非表示にする（閉じる）
                    content.style.display = 'none';
                    icon.textContent = '▼'; // 矢印を下向きに戻す
                    trigger.classList.remove('is-open'); // オープンクラスを削除
                    
                } else {
                    // 非表示だったら表示にする（開く）
                    content.style.display = 'block';
                    icon.textContent = '▲'; // 矢印を上向きにする
                    trigger.classList.add('is-open'); // オープンクラスを追加
                }
            }
        });
    });
});