// const promptInput = document.querySelector('#prompt');
// const submitButton = document.querySelector('#submit');
// const apiKey = "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";

// async function fetchGPTResponse(promptText) {
//     const response = await fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             prompt: promptText,
//             max_tokens: 100,
//             n: 1,
//             stop: null,
//             temperature: 1,
//         }),
//     });

//     if (!response.ok) {
//         throw new Error(`API request failed: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data.choices[0].text;
// }