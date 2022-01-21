// ==UserScript==
// @name         Toei Tokusatsu Funclub Keyboard
// @version      0.1
// @description  ブラウザ版東映特撮ファンクラブの再生・送り・戻しをキーボード操作できるようにする
// @author       You
// @match        https://pc.tokusatsu-fc.jp/title.php*
// @icon         https://tokusatsu-fc.jp/files/img/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', keydown_event);
    function keydown_event(e) {
        e.preventDefault();
        if (e.code == "Space"){
            // 再生・停止
            document.querySelector(".vjs-play-control").click();
        } else if (e.key == "ArrowLeft") {
            // 10秒戻し
            document.querySelector(".vjs-seekprev-control").click();
        } else if (e.key == "ArrowRight") {
            // 10秒送り
            document.querySelector(".vjs-seeknext-control").click();
        }
        return false;
    }
})();
