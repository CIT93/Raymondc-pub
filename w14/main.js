const output = document.getElementById("output");

const url = "https://jsonplaceholder.typicode.com/photos";

async function getData() {
  try {
    const response = await fetch(url);
    
    if (response.ok) {
      const data = await response.json();

      // Limit to first 100 photos
      data.slice(0, 100).forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.thumbnailUrl;
        img.style.margin = "10px";
        output.appendChild(img);
      });
    } else {
      const errorP = document.createElement("p");
      errorP.textContent = `Server Error: ${response.status}`;
      output.appendChild(errorP);
    }
  } catch (error) {
    const newP = document.createElement("p");
    newP.textContent = `Fetch Error: ${error}`;
    output.appendChild(newP);
  }
}

getData();