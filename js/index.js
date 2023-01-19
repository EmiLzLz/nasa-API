fetch(
  "https://api.nasa.gov/planetary/apod?api_key=5ETd7N5gAWAzdqf6xcRe3GPqGwhIOexjckNPuXyR"
)
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((err) => console.log("Error"));

const showData = (data) => {
  let imgInfo = document.getElementById("image-info");
  let imgTitle = document.getElementById("img-title");
  document.getElementById("img").src = data.hdurl;

  imgTitle.innerHTML = `
    <h5 class="fs-1">${data.title}</h5>
    `;

  imgInfo.innerHTML = `
    <p class="card-text">${data.explanation}</p>
    <a href="${data.hdurl}" target="_blank" class="btn btn-primary fw-bold">VIEW FULL IMAGE</a> 
    `;
};
