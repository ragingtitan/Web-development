document.addEventListener('DOMContentLoaded', () => {
    const summarizeBtn = document.getElementById("summarize");

    summarizeBtn.addEventListener('click', () => {
        let instructionsHTML =
            '<h1 class="center mstop msbot font-size-40px">How to summarize?</h1>' +
            '<ul class="p">' +
            '<li class="font-size-20px">Put your text below.</li>' +
            '<li class="font-size-20px">Click on summarize.</li>' +
            '<li class="font-size-20px">Done!</li>' +
            '</ul>' +
            '<form class="text flex-center">' +
            '<textarea class="mstop msbot" style="padding: 7px;" name="Input" id="inputtext" placeholder="Paste your text here." rows="15" cols="75"></textarea>' +
            '</form>' +
            '<div class="btn flex-center">' +
            '<button class="btn btn-outline-success" id="summarize-btn">Summarize</button>' +
            '</div>';

        document.getElementById('body').innerHTML = DOMPurify.sanitize(instructionsHTML);
    });
});
