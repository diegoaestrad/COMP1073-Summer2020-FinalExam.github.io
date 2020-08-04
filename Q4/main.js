let button = document.querySelector("button");
button.onclick = () => {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", "https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json", false);
   xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
         JSON.parse(xhr.response).cats.forEach((cat) => {
            let container = document.createElement("div");

            container.appendChild(document.createElement("hr"));

            let species = document.createElement("h1");
            species.innerHTML = "Species: " + cat.species;
            container.appendChild(species);

            let name = document.createElement("h2");
            name.innerHTML = "Name: " + cat.name;
            container.appendChild(name);

            let age = document.createElement("h3");
            age.innerHTML = "Age: " + cat.age;
            container.appendChild(age);

            let favFoods = document.createElement("ul");
            cat.favFoods.forEach((food) => {
               let favFood = document.createElement("li");
               favFood.innerHTML = food;
               favFoods.appendChild(favFood);
            });
            container.appendChild(favFoods);

            document.body.appendChild(container);
         });
      }
   };
   xhr.send();
};
