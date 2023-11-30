var htmlContent =
    '<div class="text">' +
    '<h1 class="font-size-40px center mstop msbot">Introduction and Features</h1>' +
    '<h2 class="font-size-35px p mstop msbot">Introduction</h2>' +
    '<h4 class="font-size-20px pl fw-normal">Welcome to our Text Summarizer – the ultimate tool for simplifying your reading experience. This app is designed to help you quickly extract the essence of lengthy texts, allowing you to grasp the main ideas without having to go through every word. Whether you\'re a student looking to condense study materials, a professional staying updated with industry reports, or simply someone who loves reading, our Text Summarizer is here to make your life easier.</h4>' +
    '<h2 class="font-size-35px p mstop msbot">Features</h2>' +
    '<ol class="pl">' +
    '<li class="font-size-20px msbot b">Effortless Summarization:' +
    '<h4 class="font-size-20px fw-normal">Input any amount of text, and our powerful algorithm will generate concise summaries, saving you time and effort.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">User-Friendly Interface:' +
    '<h4 class="font-size-20px fw-normal">A simple and intuitive user interface ensures a seamless experience, making text summarization accessible to everyone.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Customizable Summaries:' +
    '<h4 class="font-size-20px fw-normal">Tailor your summaries based on your preferences. Adjust settings to get brief overviews or more detailed summaries according to your needs.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Secure and Private:' +
    '<h4 class="font-size-20px fw-normal">Your data security is our priority. Enjoy the benefits of text summarization without compromising your privacy.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Responsive Design:' +
    '<h4 class="font-size-20px fw-normal">Access the Text Summarizer on any device – desktop, tablet, or mobile. The responsive design ensures a consistent and enjoyable experience across platforms.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Save and Share Summaries:' +
    '<h4 class="font-size-20px fw-normal">Save your summaries for future reference or share them easily with colleagues, classmates, or friends.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b"> No Installation Required:' +
    '<h4 class="font-size-20px fw-normal">Our web-based Text Summarizer eliminates the need for downloads or installations. Start summarizing text right away, hassle-free.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Language Support:' +
    '<h4 class="font-size-20px fw-normal">Support for multiple languages enables users from around the world to benefit from our text summarization capabilities.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Educational and Professional Use:' +
    '<h4 class="font-size-20px fw-normal">Ideal for students, researchers, professionals, and anyone dealing with information overload. Use it for academic papers, articles, reports, and more.</h4>' +
    '</li>' +
    '<li class="font-size-20px msbot b">Regular Updates and Improvements:' +
    '<h4 class="font-size-20px fw-normal">We are committed to enhancing your experience. Look forward to regular updates, new features, and improvements to make your text summarization journey even better.</h4>' +
    '</li>' +
    '</ol>' +
    '</div>';

document.getElementById('body').innerHTML = DOMPurify.sanitize(htmlContent);

document.addEventListener('DOMContentLoaded',()=>{
    const home = document.getElementById("home");
    home.addEventListener('click',()=>{
        document.getElementById('body').innerHTML=DOMPurify.sanitize(htmlContent);
    })
})