async function google_books() {
  try {
    let data = await fetch("https://fakestoreapi.com/products/");
    let books_data = await data.json();
    console.log(books_data);
    let container = document.createElement("div");
    container.className = "container";
    let row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < books_data.length; i++) {
      let col = document.createElement("div");
      col.className = "col-md-4 col-sm-6";
      col.innerHTML = `<div class="card w-100" style="width: 18rem;">
      <img src="${books_data[i].image}" class="card-img-top imgcls" alt="...">
      <div class="card-body">
        <h5 class="card-title">Price : $${books_data[i].price}</h5>
        <h5 class="card-title">${books_data[i].title}</h5>
        <p class="card-text">${books_data[i].description}</p>
        <a href="#" class="btn btn-primary w-100">Hyrry Up..</a>
      </div>
    </div>`;
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
  } catch (error) {
    console.log("Error while getting data...");
  }
}
google_books();
