const title = document.getElementById("title");
const button = document.getElementById("changeBtn");
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");


greetBtn.addEventListener("click", () => {
    const name = nameInput.value;
  
    if (name.trim() === "") {
      title.textContent = "이름을 입력해주세요!";
    } else {
      title.textContent = `안녕, ${name}님! 👋`;
    }
  });