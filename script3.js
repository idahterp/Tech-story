const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

fetch(`https://eitpzfzwqrjncnwgbuqg.supabase.co/rest/v1/techandstory?category=eq.${category}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo",
  },
})
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.table(data);
}

// .then((res) => {
//   console.log(res); // Log hele responsen
//   return res.json();
// })
// .then((data) => {
//   console.log(data); // Log hele data objektet
//   if (Array.isArray(data)) {
//     vis(data);
//   } else {
//     console.error("Data is not an array:", data);
//   }
// })
// .catch(console.error);

// function vis(data) {
//   console.log(data); // Log data for at se, hvad der returneres
// }

// function showTVShows(data) {
//   data.forEach((element) => {
//     const link = document.createElement("a");
//     link.href = `side3.html?id=${element.id}`;
//     link.textContent = element.name;
//     document.body.appendChild(link);
//   });
// }

//   .then((res) => res.json())
//   .then(showProducts);

// function showProducts(products) {
//   products.forEach(showProduct);
//   console.table("data");
// }

// function showProduct(product) {
//   // const template = document.querySelector("#smallProductTemplate").content;
//   // const copy = template.cloneNode(true);
//   console.log(data);
// }
