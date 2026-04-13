const tasks = [
  "財布の中からレシートを1枚捨てる",
  "スマホの不要なスクショを1枚削除",
  "カバンの中のゴミを1つ捨てる",
  "冷蔵庫の中で期限が怪しいものを1つ確認",
  "テーブルの上の不要な紙を1枚処分",
  "引き出しを1つだけ開けて、いらない物を1つ捨てる",
  "使っていないペンを1本捨てる",
  "靴箱から履いてない靴を1足だけ見直す",
  "ティッシュ箱や空箱を1つ捨てる",
  "今日一度も使ってない物を1つ見直す",
];

const taskTextElement = document.querySelector("#task-text");
const nextTaskButton = document.querySelector("#next-task-btn");

function showRandomTask() {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  taskTextElement.textContent = tasks[randomIndex];
}

showRandomTask();
nextTaskButton.addEventListener("click", showRandomTask);
