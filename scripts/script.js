document.addEventListener("DOMContentLoaded", function () {
    // 全ての画像を取得
    const images = document.querySelectorAll('.sep-img');

    // オプション設定
    const options = {
        root: null,  // ビューポートを基準にする
        rootMargin: '0px',  // 余白なし
        threshold: 0.1  // 画像が10%表示されたら実行
    };

    // 画像が表示領域に入った時の処理
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画像のぼかしを解除
                entry.target.style.transition = "filter 1.3s ease";
                entry.target.style.filter = "blur(0)";
                // ぼかしが解除された後、監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // すべての画像に対して監視を開始
    images.forEach(image => {
        observer.observe(image);
    });
});


//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll-up');
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 100;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                scrollAnimationElm[i].classList.add('on');
            }
        }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});