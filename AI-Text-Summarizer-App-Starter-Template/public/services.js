
document.addEventListener('DOMContentLoaded',()=>{
    const service=document.getElementById("summarize");
    service.addEventListener('click',()=>{
        let appContent =
        '<h1 class="mstop font-size-40px msbot u">AI Text Summarizer App</h1>' +
        '<p class="font-size-20px center">Welcome to the AI Text Summarizer App! This app leverages the power of Artificial Intelligence APIs to provide concise summaries of long texts. Whether you have a lengthy article, research paper, or any other text document that you want to summarize quickly, our app can assist you.</p>' +
        '<p class="mstop font-size-20px center">Simply paste your text into the text area below and click the "Submit" button.</p>' +
        '<div class="container">' +
          '<div class="text-box">' +
            '<textarea id="text_to_summarize" name="text_to_summarize" placeholder="Paste in some text to summarize. (Min length is 200 chars. Max length is 100,000 chars.)" maxlength="100000"></textarea>' +
            '<button id="submit-button" class="submit-button btn btn-outline-success">' +
              '<span class="submit-button-text">Summarize</span>' +
            '</button>' +
          '</div>' +
          '<div class="text-box">' +
            '<textarea id="summary" name="summarized_text" placeholder="Summarized text will appear here"></textarea>' +
          '</div>' +
        '</div>';
    

    document.getElementById('body').innerHTML = DOMPurify.sanitize(appContent);
    const textArea = document.getElementById("text_to_summarize");

  const submitButton = document.getElementById("submit-button");

  const summarizedTextArea = document.getElementById("summary");


  textArea.addEventListener("input", verifyTextLength);

  submitButton.addEventListener("click", submitData);



// First, we disable the submit button by default when the user loads the website.
  submitButton.disabled = true;

// Next, we define a function called verifyTextLength(). This function will be called when the user enters something in the text area. It receives an event, called ‘e’ here
  function verifyTextLength(e) {

  // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called ‘textarea’
    const textarea = e.target;

  // Check if the text in the text area is the right length - between 200 and 100,000 characters
    if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // If it is, we enable the submit button.
      submitButton.disabled = false;
    } else {
    // If it is not, we disable the submit button.
      submitButton.disabled = true;
    }
  }

  function submitData(e) {

  // This is used to add animation to the submit button
    submitButton.classList.add("submit-button--loading");

    const text_to_summarize = textArea.value;

  // INSERT CODE SNIPPET FROM POSTMAN BELOW
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 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");

    let raw = JSON.stringify({
      "text_to_summarize": text_to_summarize
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

  // Send the text to the server using fetch API

  // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
    fetch('/summarize', requestOptions)
      .then(response => response.text()) // Response will be summarized text
      .then(summary => {
      // Do something with the summary response from the back end API!

      // Update the output text area with new summary
        summarizedTextArea.value = summary;

      // Stop the spinning loading animation
        submitButton.classList.remove("submit-button--loading");

      })
      .catch(error => {
        console.log(error.message);
      });
  }
      });
});