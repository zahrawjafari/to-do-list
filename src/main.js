import "./style.css";
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function () {
  list.innerHTML += `
  
  <li
        id="one"
        class="w-[665px] h-[55px] bg-[#111827] text-white px-2.5 rounded-3xl"
      >
      <span>${input.value}</span>
        <button class="text-[#8b5cf6] text-3xl font-bold justify-end">
          Edit
        </button>
        <button class="text-red-600 justify-end">delete</button>
      </il>
  `;
});
