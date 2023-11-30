document.addEventListener('DOMContentLoaded', () => {
    const summarizeBtn = document.getElementById("summarize");

    summarizeBtn.addEventListener('click', () => {
        let instructionsHTML =
        '' +
        '<h1 class="center mstop msbot font-size-40px">How to summarize?</h1>' +
        '<ul class="p step center">' +
        '    <li class="font-size-15px mstop msbot"><h2>1. Put your text below.</h2></li>' +
        '    <li class="font-size-15px mstop msbot"><h2>2. Click on summarize.</h2></li>' +
        '    <li class="font-size-15px mstop msbot15"><h2>3. Done!</h2></li>' +
        '</ul>' +
        '<form class="text flex-center">' +
        '    <textarea class="mstop msbot" style="padding: 7px;" name="Input" id="inputtext" placeholder="Paste your text here." rows="15" cols="75"></textarea>' +
        '</form>' +
        '<div class="btn flex-center">' +
        '    <button id="summarize-btn" class="btn btn-outline-success">Summarize</button>' +
        '</div>' +
        '<form class="text flex-center">' +
        '    <textarea class="mstop msbot" style="padding: 7px;" name="Input" id="outputtext" placeholder="Your summary will appear here." rows="15" cols="75"></textarea>' +
        '</form>';

        document.getElementById('body').innerHTML = DOMPurify.sanitize(instructionsHTML);
    });
});
