import "./styles.css";

const OnClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

const addIncompleteList = (text) => {
  // div作成
  const div = document.createElement("div");
  div.className = "list-content";
  // divの子要素作成
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);
  // 完了ボタン 作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    addCompleteList(completeButton.parentElement.firstChild.innerText);
    deleteFromIncompleteList(completeButton.closest(".list-row"));
  });
  // 削除ボタン 作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.closest(".list-row"));
  });
  // ボタン divに追加
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // li 作成
  const li = document.createElement("li");
  li.className = "list-row";
  li.appendChild(div);
  // リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

const addCompleteList = (text) => {
  // div作成
  const div = document.createElement("div");
  div.className = "list-content";
  // divの子要素作成
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);
  // 戻すボタン 作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    addIncompleteList(backButton.parentElement.firstChild.innerText);
    deleteFromCompleteList(backButton.closest(".list-row"));
  });
  // ボタン divに追加
  div.appendChild(backButton);
  // li 作成
  const li = document.createElement("li");
  li.className = "list-row";
  li.appendChild(div);
  // リストに追加
  document.getElementById("complete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => OnClickAdd());
