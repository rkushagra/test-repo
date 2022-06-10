fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((posts) => {
        previews.innerHTML = `
            <div>
                ${posts.map(Post).join("")}
            <div>`;
    });

const Post = (post) => {
    return`
    <div class="preview"> 
        <div>
            <h2>${post.title}</h2>
            <p>
                ${post.description}
            </p>
            <a href="./posts/javascript.html">Read More..</a>
        </div>
        <img class="preview-image" src="${post.image}" />
    </div>
`;
};

