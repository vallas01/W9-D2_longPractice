window.onload = () => {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "myName");
  const names = document.createTextNode("Paul and Andy");
  h1.appendChild(names);
  document.body.appendChild(h1);

  const ul = document.createElement("ul");
  const liArray = [
    "Lives in New Jersey.",
    "Paul has a dog named Gregor.",
    "Lives in Florida.",
    "Andy has a dog named Jake.",
  ];
  // const newLi = `
  //   <li>Lives in New Jersey.</li>
  //   <li>Paul has a dog named Gregor.</li>
  //   <li>Lives in Florida.</li>
  //   <li>Andy has a dog named Jake.</li>
  // `;

  document.body.appendChild(ul);
  liArray.forEach((text) => {
    const li = document.createElement("li");
    let details = document.createTextNode(text);
    li.appendChild(details);
    document.body.appendChild(ul).appendChild(li);
    li.setAttribute("class", "detail");
  });
  // ul.innerHTML += newLi;
  // console.log(document.querySelectorAll("li"))

  //Phase 2

  h1.setAttribute("class", "name");
  ul.setAttribute("class", "my-details");

  //Phase 3

  const today = new Date();
  let newText = document.createTextNode(
    `I live in Princeton, New Jersey, and it's currently ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} here.`
  );
  const newEle = document.createElement("div");
  newEle.appendChild(newText);
  document.body.appendChild(newEle);

  const clock = setInterval(() => {
    const div = document.getElementsByTagName("div");
    const today = new Date();
    div[0].innerText = `I live in Princeton, New Jersey, and it's currently ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} here.`;
  }, 1000);

//Bonus A

const img = document.createElement("img")
img.setAttribute("src","./sample.jpg")
h1.append(img)

};
