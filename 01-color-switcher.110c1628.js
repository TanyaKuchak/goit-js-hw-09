!function(){var t=null,n={startBtn:document.querySelector("button[data-start]"),stoptBtn:document.querySelector("button[data-stop]")};n.startBtn.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n.startBtn.disabled=t})),n.stoptBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!t}))}();
//# sourceMappingURL=01-color-switcher.110c1628.js.map
