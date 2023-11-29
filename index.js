// const userInfoEl = document.querySelector(".user-info");
// const infoEl = document.querySelector(".info");
// const postImageEl = document.querySelector(".post-image");
// const likeCountEl = document.querySelector(".like-count");
// const captionEl = document.querySelector(".caption");
// const postContentEl = document.querySelector(".post-content");
const mainSectiontEl = document.querySelector(".main");

console.log(mainSectiontEl);

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let name = "";
let username = "";
let userlocation = "";
let avatar = "";
let post = "";
let comment = "";
let likes = "";

let postContentItems = "";

for (let i = 0; i < posts.length; i++) {
  postContent = posts[i];
  name = postContent.name;
  username = postContent.username;
  userlocation = postContent.location;
  avatar = postContent.avatar;
  post = postContent.post;
  comment = postContent.comment;
  likes = postContent.likes;

  postContentItems += ` 
  <div class= "post-content">
  <div class="user-info">
  <img class="avatar" src=${avatar}/>
  <div class="info">
  <h3>
    ${name}
    <span class="location"> ${userlocation} </span>
  </h3>
</div>
</div>
<div class="post-image">
<img id="post" src=${post}/>
</div>
<div class="post-body">
<div class="icons">
  <img class="post-icons" src="images/icon-heart.png" />
  <img class="post-icons" src="images/icon-comment.png" />
  <img class="post-icons" src="images/icon-comment.png" />
</div>
<div class="like-count">
  <h3> ${likes}<span class="likes"> likes </span></h3>
</div>
<div class="caption">
  <h3>
    ${username}
    <span class="caption"> ${comment}</span>
  </h3>
</div>
</div>
</div>

  `;
}

mainSectiontEl.innerHTML = postContentItems;
