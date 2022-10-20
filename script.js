function getResult() {
  let firstMember = document.querySelector(".proger__input").value;
  let secondMember = document.querySelector(".second__proger__input").value;
  const actions = [
    "выебал",
    "трахнул",
    "лизнул сосок",
    "понюхал попу",
    "поцеловал в губы",
    "поцеловал в шею",
    "поставил засос",
    "отсосал у",
    "укусил за нос",
  ];

  const randomAction = Math.floor(Math.random() * actions.length);
  let result = document.createElement("p");
  result.className = "result_yaoi";
  result.innerHTML = `${firstMember} ${actions[randomAction]} ${secondMember}`;
  document.body.append(result);
  console.log(`${firstMember} ${actions[randomAction]} ${secondMember}`);
}

document.querySelector(".progerRand").addEventListener("click", getResult);
