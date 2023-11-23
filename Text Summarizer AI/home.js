let htmlContent = '<div class="text">' +
    '<h1>Introduction and Features.</h1>' +
    '<h2>Introduction</h2>' +
    '<h4>Welcome to our Text Summarizer – the ultimate tool for simplifying your reading experience. This app is designed to help you quickly extract the essence of lengthy texts, allowing you to grasp the main ideas without having to go through every word. Whether you\'re a student looking to condense study materials, a professional staying updated with industry reports, or simply someone who loves reading, our Text Summarizer is here to make your life easier.</h4>' +
    '<h2>Features</h2>' +
    '<ol>' +
    '<li>Effortless Summarization:' +
    '<h4>Input any amount of text, and our powerful algorithm will generate concise summaries, saving you time and effort.</h4>' +
    '</li>' +
    '<li>User-Friendly Interface:' +
    '<h4>A simple and intuitive user interface ensures a seamless experience, making text summarization accessible to everyone.</h4>' +
    '</li>' +
    '<li>Customizable Summaries:' +
    '<h4>Tailor your summaries based on your preferences. Adjust settings to get brief overviews or more detailed summaries according to your needs.</h4>' +
    '</li>' +
    '<li>Secure and Private:' +
    '<h4>Your data security is our priority. Enjoy the benefits of text summarization without compromising your privacy.</h4>' +
    '</li>' +
    '<li>Responsive Design:' +
    '<h4>Access the Text Summarizer on any device – desktop, tablet, or mobile. The responsive design ensures a consistent and enjoyable experience across platforms.</h4>' +
    '</li>' +
    '<li>Save and Share Summaries:' +
    '<h4>Save your summaries for future reference or share them easily with colleagues, classmates, or friends.</h4>' +
    '</li>' +
    '<li>No Installation Required:' +
    '<h4>Our web-based Text Summarizer eliminates the need for downloads or installations. Start summarizing text right away, hassle-free.</h4>' +
    '</li>' +
    '<li>Language Support:' +
    '<h4>Support for multiple languages enables users from around the world to benefit from our text summarization capabilities.</h4>' +
    '</li>' +
    '<li>Educational and Professional Use:' +
    '<h4>Ideal for students, researchers, professionals, and anyone dealing with information overload. Use it for academic papers, articles, reports, and more.</h4>' +
    '</li>' +
    '<li>Regular Updates and Improvements:' +
    '<h4>We are committed to enhancing your experience. Look forward to regular updates, new features, and improvements to make your text summarization journey even better.</h4>' +
    '</li>' +
    '</ol>' +
    '</div>';

document.getElementById('body').innerHTML = DOMPurify.sanitize(htmlContent);
