import "./style.css";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function () {
  if (input.value.trim() === "") return;

  list.innerHTML += `
    <li class="w-[665px] bg-[#111827] text-white px-4 py-3 rounded-3xl flex justify-between items-center mt-3">
      <span>${input.value}</span>

      <div class="flex gap-4">
        <button class="edit text-[#8b5cf6] font-bold">Edit</button>
        <button class="delete text-red-600 font-bold">Delete</button>
      </div>
    </li>
  `;

  input.value = "";

  addEvents();
});

function addEvents() {
  const edits = document.querySelectorAll(".edit");
  const deletes = document.querySelectorAll(".delete");

  edits.forEach(function (editBtn) {
    editBtn.onclick = function () {
      const li = this.parentElement.parentElement;
      const span = li.querySelector("span");

      if (this.textContent === "Edit") {
        span.innerHTML = `<input type="text" value="${span.textContent}" class="bg-[#111827] text-white outline-none">`;

        this.textContent = "Save";
      } else {
        const newInput = span.querySelector("input");

        span.textContent = newInput.value;

        this.textContent = "Edit";
      }
    };
  });

  deletes.forEach(function (deleteBtn) {
    deleteBtn.onclick = function () {
      this.parentElement.parentElement.remove();
    };
  });
}
