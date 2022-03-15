window.onload = () => {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "myName");
  const names = document.createTextNode("Paul and Andy");
  h1.appendChild(names);
  document.body.appendChild(names);

  const ul = document.createElement("ul");
  const liArray = ["Lives in New Jersey.", "Paul has a dog named Gregor.", "Lives in Florida.", "Andy has a dog named Jake."]
  // const newLi = `
  //   <li>Lives in New Jersey.</li>
  //   <li>Paul has a dog named Gregor.</li>
  //   <li>Lives in Florida.</li>
  //   <li>Andy has a dog named Jake.</li>
  // `;

  document.body.appendChild(ul);
  liArray.forEach(text => {
    const li = document.createElement("li")
    let details = document.createTextNode(text)
    li.appendChild(details)
    document.body.appendChild(ul).appendChild(li)
  })
  // ul.innerHTML += newLi;
  // console.log(document.querySelectorAll("li"))
};
