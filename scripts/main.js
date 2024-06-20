function displayMessage() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const message = urlParams.get('message');
  const jsonResponse = document.getElementById('json-response');

  if (name && message) {
      const responseMessage = `Hello ${name}, you have received a message: ${message}`;
      const responseJson = {
          status: "success",
          data: {
              message: responseMessage
          }
      };
      jsonResponse.innerText = JSON.stringify(responseJson, null, 2);
  } else {
      const responseJson = {
          status: "error",
          message: "Please provide both name and message parameters in the URL."
      };
      jsonResponse.innerText = JSON.stringify(responseJson, null, 2);
  }
}

document.addEventListener('DOMContentLoaded', displayMessage);