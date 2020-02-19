//To Do List-Wes Bos

// HTML Code For this project
//  <div class="wrapper">
//           <h2>To Do List</h2>
//           <p></p>
//           <ul class="plates">
//             <li>Loading Task...</li>
//           </ul>
//           <form class="add-items">
//             <input type="text" name="item" placeholder="Item Name" required>
//             <input type="submit" value="+ Add Item">
//           </form>
//         </div>


let addItems = document.querySelector('.add-items');
let itemList = document.querySelector('.plates');
const items =JSON.parse(localStorage.getItem('items')) || [];
//console.log(items);
function addItem(e){
  e.preventDefault();
  const txt = (this.querySelector('[name=item]')).value;
  const item = {
    txt,done:false
  };
  //console.log(item);
  items.push(item);
  populateList(items,itemList);
  localStorage.setItem('items',JSON.stringify(items));
  this.reset();
};
function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemList);
    //console.log(e.target);
};
function populateList(plates = [],plateList){
    plateList.innerHTML = plates.map((plate,i)=>{
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked':''}/>
                <label for="item${i}">${plate.txt}</label>
            </li>
        `;
    }).join("");
};
addItems.addEventListener('submit',addItem);
itemList.addEventListener('click',toggleDone);
populateList(items,itemList);