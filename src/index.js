// write your code here
const imageUrl = "http://localhost:3000/images";
const commentsUrl = "http://localhost:3000/comments";


//Fetch Dog Details
function fetchDogDetails (id) {
    fetch(`${imageUrl}/${id}`)
    .then(response => response.json())
    .then((dog) => {
        document.getElementById("card-title").innerText = dog.title

        document.getElementById("card-image").src = dog.image;

        document.getElementById("like-count").innerText = `${dog.likes} likes`;
    });
}

function fetchDogComments () {
    fetch(`${commentsUrl}`)
    .then(response => response.json())
    .then(comments => {
        document.getElementById("comments-list").innerHTML = comments
        .map((comment) => `<li> ${comment.content}</li>`)
        .join("");
    })
}

document.addEventListener("DOMContentLoaded", function () {
    fetchDogDetails(1);
    fetchDogComments()
})

