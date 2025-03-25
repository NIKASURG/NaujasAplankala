
fetch ("info.txt")
.then(x => x.text())
.then(y => document.getElementById("id").innerHTML = y);


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


fetch("something.webp")
  .then(res => res.blob())
  .then(blob => {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  });



fetch("somefile.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));



fetch("https://somefakeurl.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Network error:", error));




fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", body: "World", userId: 1 })
  })
  .then(response => response.json())
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Error:", error));

fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    let user = data.results[0];
    document.getElementById("user").innerHTML = `
      <img src="${user.picture.large}" alt="User Image">
      <p>Name: ${user.name.first} ${user.name.last}</p>
    `;
  })
  .catch(error => console.error("Error:", error));


document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
  
    let title = document.getElementById("title").value;
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("response").innerText = `Post created with ID: ${data.id}`;
    })
    .catch(error => console.error("Error:", error));
  });

