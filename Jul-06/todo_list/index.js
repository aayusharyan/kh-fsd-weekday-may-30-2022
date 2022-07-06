function add_new_task() {
  let input_element = document.getElementById("ip");
  let new_task_value = input_element.value;

  let new_li = document.createElement("li");
  new_li.innerText = new_task_value;

  let container = document.getElementById("task_container");
  container.appendChild(new_li);
}