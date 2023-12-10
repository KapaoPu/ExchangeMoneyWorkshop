function displayResult(){
    let codeHTML = document.getElementById("html").value;
    let codecss = document.getElementById("css").value;
    let codejs = document.getElementById("js").value;
    let resultEl = document.getElementById("result");
    resultEl.contentDocument.body.innerHTML = `${codeHTML}<style>${codecss}<style>${codecss}</style>`;
    resultEl.contentWindow.eval(codejs);
}