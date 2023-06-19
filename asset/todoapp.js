console.log("script is running")

let ul = document.querySelector('ul');
let deleteButton = document.getElementById('delete-btn');


function deleteItems(){

    let checkedItems = ul.querySelectorAll('.checkbox:checked');
let checkedIds = [];
for(let item of checkedItems){
    checkedIds.push(item.dataset.todoid);
}


const url = "http://localhost:8000/delete-todo";
const data = {checkedIds};


// sent request to server and delete
fetch(url, {
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        "Content-Type": "application/json",
    }
})
.then((status)=>{
    location.reload();

})
.catch((err)=>console.log(err));

}





deleteButton.addEventListener('click', deleteItems);

// setInterval(()=>{location.reload()}, 1000);