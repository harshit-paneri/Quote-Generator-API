document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
  
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        quote.textContent = data.content;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }

    button.addEventListener("click", updateQuote);

    updateQuote();
  });
  