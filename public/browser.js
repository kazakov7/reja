console.log("Brwoser ishga tushdi");

let creatField = document.getElementById("create-field");
function itemTemplate(item) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>

          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              Ozgartirish
            </button>

            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
          </div>
        </li>`;
}

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: creatField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      creatField.value = "";
      creatField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan urining!", err);
    });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("/delete-me", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling", err);
        });
    }
  }

  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirishni kiriting: ",
      e.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML,
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          e.target.parentElement.parentElement.querySelector(
            ".item-text",
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qaytdan urining!");
        });
    }
  }
});

document.querySelector(".clean-all").addEventListener("click", () => {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
