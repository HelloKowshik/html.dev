let filterInput = document.querySelector('#filter');
let deleteBtn = document.querySelector('.delete-btn');
let productInput = document.querySelector('.product-name');
let priceInput = document.querySelector('.product-price');
let addBtn = document.querySelector('.add-product');
let productListUL = document.querySelector('.collection');
let msg = document.querySelector('.msg');

//let productData = [];
let productData = getLocalData();

function getLocalData(){
    let items = '';
    if(localStorage.getItem('productItems') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('productItems'));
    }
    return items;
}

function setLocalData(item){
    let items = '';
    if(localStorage.getItem('productItems') === null){
        items = [];
        items.push(item);
        localStorage.setItem('productItems',JSON.stringify(items));
    }else{
        items = JSON.parse(localStorage.getItem('productItems'));
        items.push(item);
        localStorage.setItem('productItems',JSON.stringify(items));
    }
}

function deleteLocalData(id){
    let items = JSON.parse(localStorage.getItem('productItems'));
    let result = items.filter(productItem=>{
        return productItem.id !== id
    });
    localStorage.setItem('productItems',JSON.stringify(result));
    if(result.length === 0){
        location.reload();
    }
}

function getData(productList){
    if(productData.length>0){
        msg.innerHTML = '';
        let li = '';
    productList.forEach(product /*({id,name,price})*/ => {
        let {id,name,price} = product;
        li = document.createElement('li');
        li.className = 'list-group-item collection-item';
        li.id = `product-${id}`;
        li.innerHTML = `<strong>${name}</strong>-BDT-
        <span class="price">${price}</span>
        <i class="fas fa-trash float-right delete-btn"></i>`;
        productListUL.appendChild(li);
    });
    }else{
        msg.innerHTML = 'No Product Available!';
        //customMsg(true,null);
    }
}
getData(productData);

addBtn.addEventListener('click',e =>{
    e.preventDefault();
    let name = productInput.value;
    let price = priceInput.value;
    let id;
    if(productData.length === 0){
        id = 0;
    }else{
        id = productData[productData.length - 1].id + 1;
    }
    if(name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))){
        alert('All Fields Are Mandatory!');
    }else{
        let data = {
            id,name,price
        };
        // productData.push({
        //     id,name,price
        // });
        productData.push(data);
        setLocalData(data);
        productListUL.innerHTML = '';
        getData(productData);
        productInput.value = '';
        priceInput.value = '';
    }
});

productListUL.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
        //Remove data from View

        //alert('Delete Item?');
       // e.target.remove();
       //e.target.parentElement.remove();
       let targetElement = e.target.parentElement;
       e.target.parentElement.parentElement.removeChild(targetElement);

    //Remove Data from array

    let id = parseInt(targetElement.id.split('-')[1]);
    let result = productData.filter(product=>{
        return product.id !== id
    });
    productData = result;
    deleteLocalData(id);
   // console.log(result);
    }
    //console.log(e.target);
    
});

// Search 

filterInput.addEventListener('keyup',e=>{
    //console.log(e.target.value);
    let text = e.target.value.toLowerCase();
    let itemLength = 0;
    document.querySelectorAll('.collection .collection-item').forEach(product=>{
        let productName = product.firstElementChild.textContent.toLowerCase();
        // console.log(productName);
        if(productName.indexOf(text) === -1){
          //  msg.innerHTML = 'No items Found!'
            product.style.display = 'none';
           // customMsg(null,true);
        }else{
            product.style.display = 'block';
            ++itemLength;
            //msg.innerHTML = '';
        }
    });
    //console.log(itemLength);
    (itemLength >0) ? msg.innerHTML = '' : msg.innerHTML = 'No items Found!';
})

// function customMsg(fetchMsg,searchMsg){
//     if(fetchMsg){
//         msg.innerHTML = 'Add Items to your Catalog.'
//     }else if(searchMsg){
//         msg.innerHTML = 'No Items Found!';
//     }
// }