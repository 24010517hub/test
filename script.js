// 画面の読み込みが終わったら実行する
document.addEventListener('DOMContentLoaded', () => {
    
    // HTMLの中から 'card' というクラスがついた要素を全部見つけてくる
    const cards = document.querySelectorAll('.card');

    // 見つけたカードを1枚ずつ順番に処理する
    cards.forEach((card, index) => {
        
        // setTimeoutを使って、少しずつ時間をずらしてクラスを追加する
        // index * 200 なので、1枚目は0秒、2枚目は0.2秒、3枚目は0.4秒...と遅れます
        setTimeout(() => {
            // CSSで設定した 'visible' クラスを追加する
            // これにより opacity: 1 になり表示される
            card.classList.add('visible');
        }, index * 200); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    
    // 画面幅が768px以下の場合は動画を停止
    if (window.innerWidth <= 768) {
        if (video) {
            video.pause();
            video.removeAttribute('autoplay');
            video.style.display = 'block'; // poster画像を表示
        }
    }
});