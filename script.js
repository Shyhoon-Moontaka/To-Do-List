const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            
           <input type="checkbox" class="checkbox"> 
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
            
        `;
        taskList.appendChild(taskItem);
        
        taskInput.value = "";
      
        taskItem.querySelector(".delete-button").addEventListener("click", deleteTask);
        
    }
    else{
        document.querySelector(".body").style.backgroundColor="red";
        alert("Warning From Shyhoon!");
        taskInput.addEventListener("click",()=>{
            document.querySelector(".body").style.backgroundColor="cadetblue";
        })
    }
}



function deleteTask(event) {
  const taskItem = event.target.parentNode;
  
taskList.removeChild(taskItem);
   

}
