
// let mainSection = document.getElementById("data-list-wrapper");

// // pitch
// let pitchTitleInput = document.getElementById("pitch-title");
// let pitchImageInput = document.getElementById("pitch-image");
// let pitchCategoryInput = document.getElementById("pitch-category");
// let pitchfounderInput = document.getElementById("pitch-founder");
// let pitchPriceInput = document.getElementById("pitch-price");
// let pitchCreateBtn = document.getElementById("add-pitch");

// // Update pitch
// let updatePitchIdInput = document.getElementById("update-pitch-id");
// let updatePitchTitleInput = document.getElementById("update-pitch-title");
// let updatePitchImageInput = document.getElementById("update-pitch-image");
// let updatePitchfounderInput = document.getElementById("update-pitch-founder");
// let updatePitchCategoryInput = document.getElementById("update-pitch-category");
// let updatePitchPriceInput = document.getElementById("update-pitch-price");
// let updatePitchBtn = document.getElementById("update-pitch");

// //Update price
// let updatePricePitchId = document.getElementById("update-price-pitch-id");
// let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
// let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

// //sort and filter
// let sortAtoZBtn = document.getElementById("sort-low-to-high");
// let sortZtoABtn = document.getElementById("sort-high-to-low");
// let filterFood = document.getElementById("filter-Food");
// let filterElectronics = document.getElementById("filter-Electronics");
// let filterPersonalCare = document.getElementById("filter-Personal-Care");

// //Search by title/founder

// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");

// // Problem 1. List of pitches on page load




// // function fetchdata() {
// //     fetch('http://localhost:3000/pitches')
// //         .then((res) => res.json())
// //         .then((data) => {
// //             const store = data.map((ele) =>
// //                 adddata(ele.id, ele.image, ele.title, ele.founder, ele.category, ele.price)
// //             );
// //             mainSection.innerHTML = store.join('');
// //         })
// //         .catch((err) => console.log("Error fetching data:", err));
// // }
// // fetchdata();


// // function adddata(id, image, title, founder, category, price) {

// //     return `
// //     <div class="card" data-id="${id}">
// //         <div class="card-img">
// //             <img src="${image}" alt="${title}"> 
// //         </div>
// //         <div class="card-body">
// //             <h4 class="card-title">${title}</h4>
// //             <p class="card-founder">Founded by: ${founder}</p>
// //             <p class="card-category">Category: ${category}</p>
// //             <p class="card-price">Price: ${price}</p>
// //             <button data-id="${id}" class="card-edit">Edit</button>
// //             <button data-id="${id}" class="card-delete">Delete</button>
// //         </div>
// //     </div>
// //     `;
// // }


// // function postdata() {
// //     pitchCreateBtn.addEventListener('click', () => {
// //         let adddata = {
// //             title: pitchTitleInput.value,
// //             image: pitchImageInput.value,
// //             category: pitchCategoryInput.value,
// //             founder: pitchfounderInput.value,
// //             price: pitchPriceInput.value
// //         }
// //         fetch('http://localhost:3000/pitches', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(adddata)
// //         })
// //             .then((res) => res.json())
// //             .then((data) => {
// //                 alert("data inserted successfully")
// //             })
// //             .catch((err) => console.log(err));
// //     })
// // }
// // postdata();


// // document.addEventListener('click',()=>{
// //     if(el.target.classlist.contains("card-button"))
// //     {
// //         deleteTask(el.target.dataset.id)

// //     }
// // })

// // function deleteTask(id)
// // {
// //     fetch("http://localhost:3000/pitches/${id}") ,{
// //     method:"DELETE"
// //     }
// //     .then((res)=>res.json())
// //     .then((data)=>{
// //         alert("delete successfully")
// //     })
// //     .catch((err)=>console.log(err))
// // }

// // function fetchdata() {
// //     fetch('http://localhost:3000/pitches')
// //         .then((res) => res.json())
// //         .then((data) => { 
// //             card(data)
// //             productdata = data
// //         })
// //         .catch((err) => console.log("Error fetching data:", err));
// // }
// // fetchdat

// let productdata = [];

// // fetch data
// function fetchdata() {
//     fetch('https://sharktank-server.onrender.com/pitches')
//         .then((res) => res.json())
//         .then((data) => {
//             card(data)
//             productdata = data
//         })
//         .catch((err) => console.log("Error fetching data:", err));
// }
// fetchdata();

// function card(data) {
//     const store = data.map((ele) =>
//         adddata(ele.id, ele.image, ele.title, ele.founder, ele.category, ele.price)
//     );
//     mainSection.innerHTML = store.join('');
// }
// card

// function adddata(id, image, title, founder, category, price) {

//     return `
//     <div class="card" data-id="${id}">
//     <a href = "dscription.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&founder=${encodeURIComponent(founder)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}">
//         <div class="card-img">
//             <img src="${image}" width:"200px">
//         </div>
//         </a>
//         <div class="card-body">
//             <h4 class="card-title">${title}</h4>
//             <p class="card-founder">Founded by: ${founder}</p>
//             <p class="card-category">Category: ${category}</p>
//             <p class="card-price">Price: ${price}</p>
//             <a href="#"  data-id="${id}" class="card-edit">Edit</a>
//             <a href="#"  data-id="${id}" class="card-edit-price">Edit</a>
//             <button data-id="${id}" class="card-button">Delete</button>
//         </div>
//     </div>
//     `;
// }



// // add data (post)
// function postdata() {
//     pitchCreateBtn.addEventListener('click', () => {
//         let adddata = {
//             title: pitchTitleInput.value,
//             image: pitchImageInput.value,
//             category: pitchCategoryInput.value,
//             founder: pitchfounderInput.value,
//             price: pitchPriceInput.value
//         }
//         fetch('https://sharktank-server.onrender.com/pitches', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(adddata)
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 alert("data inserted successfully")
//             })
//             .catch((err) => console.log(err));
//     })
// }
// postdata();



// // delete data
// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains('card-button')) {
//         deletedata(e.target.dataset.id);
//     }
// });

// function deletedata(id) {
//     fetch(`https://sharktank-server.onrender.com/pitches/${id}`, {
//         method: 'DELETE',
//     })
//         .then((res) => res.json())
//         .then((value) => {
//             alert("delete successfully!")
//             console.log(value)
//         })
//         .catch((err) => console.log("Error during delete:", err));
// }



// // filter based on category
// filterFood.addEventListener('click', () => {
//     let store = productdata.filter((el) =>
//         el.category == 'Food'
//     )
//     card(store)
// })

// filterElectronics.addEventListener('click', () => {
//     let store = productdata.filter((el) =>
//         el.category == 'Electronics'
//     )
//     card(store)
// })

// filterPersonalCare.addEventListener('click', () => {
//     let store = productdata.filter((el) =>
//         el.category == 'Personal Care')
//     card(store)
// })



// //  Sort Based On Price
// sortAtoZBtn.addEventListener('click', () => {
//     let stored = productdata.sort((a, b) => a.price - b.price)
//     card(stored)
// })

// sortZtoABtn.addEventListener('click', () => {
//     let stored = productdata.sort((a, b) => b.price - a.price)
//     card(stored)
// })

// // update all input

//  document.addEventListener("click", (e) => {
//     if (e.target.classList.contains('card-edit')) {
//         editdata(e.target.dataset.id);
//     }
// });

// function editdata(id) {
  
//     fetch(`https://sharktank-server.onrender.com/pitches/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
           
//             updatePitchIdInput.value = data.id;
//             updatePitchTitleInput.value = data.title;
//             updatePitchImageInput.value = data.image;
//             updatePitchfounderInput.value = data.founder;
//             updatePitchCategoryInput.value = data.category;
//             updatePitchPriceInput.value = data.price;

//             console.log('Fetched data:', data);
//         })
//         .catch((err) => console.error('Error fetching data:', err));
// }

// updatePitchBtn.addEventListener('click',()=>{
// function saveUpdatedData() {
//     const id = updatePitchIdInput.value; 
//     const updatedData = {
//         title: updatePitchTitleInput.value,
//         image: updatePitchImageInput.value,
//         founder: updatePitchfounderInput.value,
//         category: updatePitchCategoryInput.value,
//         price: updatePitchPriceInput.value,
//     };

 
//     fetch(`https://sharktank-server.onrender.com/pitches/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedData),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('PATCH request successful:', data);
//         })
//         .catch((error) => console.log('Error updating data:', error));
// }
// saveUpdatedData();
// })



// // update price and id
// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains('card-edit-price')) {
//         changedata(e.target.dataset.id);
//     }
// });


// function changedata(id) {
//     fetch(`https://sharktank-server.onrender.com/pitches/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//             // Populate fields with the fetched data
//             updatePricePitchId.value = data.id;
//             updatePricePitchPrice.value = data.price;

//             console.log('Fetched data for price update:', data);
//         })
//         .catch((err) => console.error('Error fetching data:', err));
// }


// updatePricePitchPriceButton.addEventListener('click', ()=>{
// function saveUpdatedData() {
//     const id = updatePricePitchId.value; 
//     const changedData = {
//         price: updatePricePitchPrice.value, 
//     };

//     console.log('Updating data:', changedData);

//     fetch(`https://sharktank-server.onrender.com/pitches/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(changedData),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('PATCH request successful:', data);
//         })
//         .catch((error) => console.error('Error updating data:', error));
// }
// saveUpdatedData()
// });


// Problem 1. List of pitches on page load [3}

let mainSection = document.getElementById("data-list-wrapper");

let productdetails=[]


function myfunction(){
    fetch("https://sharktank-server.onrender.com/pitches")
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        productdetails=data;
        display(data);
    }).catch((err)=>{
        console.log("ERROR 404",err);
    })
}

myfunction();

function display(prod){
    prod.map((product)=>{
      let store1=show(product.image,product.id,product.founder,product.category,product.price,product.title);
        mainSection.innerHTML+=store1;
    })

}



function show(image,id,founder,category,price,title) {
    let store = `<div class="card-list">
    <div class="card" data-id="${id}">
      <div class="card-img">
        <img src="${image}" alt="${title}">
      </div>
      <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <p class="card-founder">${founder}</p>
        <p class="card-category">${category}</p>
        <p class="card-price">${price}</p>
        <a href="#" data-id="${id}" class="card-link">Edit</a>
        <button class="card-button" data-id="${id}">Delete</button>
      </div>
    </div>
  </div>`;
    return store;
  }


// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");


pitchCreateBtn.addEventListener('click',()=>{
    let details={
        title:pitchTitleInput.value,
        image:pitchImageInput.value,
        category:pitchCategoryInput.value,
        founder:pitchfounderInput.value,
        price:pitchPriceInput.value,
       
       
    }  



    fetch("https://sharktank-server.onrender.com/pitches",{
    method:"POST",
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(details),
    }).then((rec)=>{
        return rec.json();
    }).then((data)=>{
        console.log(data);
        alert("added successfully");
         window.location.reload();
        display(data);
    }).catch((err)=>{
        console.log("ERROR 404",err);
    })
})


// delete 

document.addEventListener('click',(el)=>{
    if(el.target.classList.contains("card-button")){
        alert("conform to delete");
         deletedata(el.target.dataset.id);
    }
    
})

function deletedata(id){
    fetch(`https://sharktank-server.onrender.com/pitches/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
      .then((data) => {
        alert("Deleted successfully");
        window.location.reload();

      })
      .catch((err) => console.log("ERROR 404", err));
}


// fillter

let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");
 

filterFood.addEventListener("click", () => {
    let data1 = productdetails.filter((el) => {
      return el.category === "Food";
    });

     mainSection.innerHTML = "";
    display(data1);
  });

  
  filterElectronics.addEventListener("click", () => {
    let data1 = productdetails.filter((el) => {
      return el.category === "Electronics";
    });

     mainSection.innerHTML = "";
    display(data1);
  });

  
  filterPersonalCare.addEventListener("click", () => {
    let data1 = productdetails.filter((el) => {
      return el.category === "Personal Care";
    });

     mainSection.innerHTML = "";
    display(data1);
  });
  

// sort base
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

// low to high
sortAtoZBtn.addEventListener('click',()=>{
     let price=productdetails.filter((el)=>{
        return el.price;
     })
     let sortdata=price.sort((a,b)=>{
        return a.price-b.price;
     })
     
     mainSection.innerHTML = "";
     display(sortdata);
})
// high to low
sortZtoABtn.addEventListener('click',()=>{
    let price=productdetails.filter((el)=>{
        return el.price;
    })
    let sorthigh=price.sort((a,b)=>{
        return b.price-a.price;
    })
    mainSection.innerHTML = "";
    display(sorthigh);
    
})

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");
searchByButton.addEventListener('click', () => {
    let searchBy = searchBySelect.value;
    if(searchBy==="title"){
        let searchValue = searchByInput.value;
        let search = productdetails.filter((details) => {
          return details.title===searchValue;
        })
        mainSection.innerHTML="";
        display(search);
    }else if(searchBy==="founder"){
        let searchValue = searchByInput.value;
        let search = productdetails.filter((details) => {
          return details.founder===searchValue;
        })
        mainSection.innerHTML="";
        display(search);
    }else{
        alert("wrong input");
    }
  })

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

document.addEventListener('click',(el)=>{
  if(el.target.classList.contains("card-link")){
    editdata(el.target.dataset.id);
  }
  
})


function editdata(id){
 fetch(`https://sharktank-server.onrender.com/pitches/${id}`)
 .then((res)=>{
   return res.json();
 }).then((data)=>{
    console.log(data);
    updatePitchIdInput.value=data.id;
    updatePitchTitleInput.value=data.title;
    updatePitchImageInput.value=data.image;
    updatePitchfounderInput.value=data.founder;
    updatePitchCategoryInput.value=data.category;
    updatePitchPriceInput.value=data.price;
  display(data);
 }).catch((err)=>{
  console.log("error 404",err);
 })
}

updatePitchBtn.addEventListener('click',()=>{

   let updateobj ={
    id:updatePitchIdInput.value,
    title: updatePitchTitleInput.value,
    image: updatePitchImageInput.value,
    price: updatePitchPriceInput.value,
    founder: updatePitchfounderInput.value,
    category: updatePitchCategoryInput.value
  }
 
   fetch(`https://sharktank-server.onrender.com/pitches/${updateobj.id}`,{
     method:"PUT",
     headers:{
       'Content-Type':'application/json',
     },
     body:JSON.stringify(updateobj)
        }).then((res)=>{
          return res.json();
        }).then((data)=>{
           console.log(data);
           alert("updated successfully")
           window.location.reload();
           display(data)
        }).catch((err)=>{
          console.log("Erorr 404",err);
        })

})



//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");



document.addEventListener('click',(el)=>{
  if(el.target.classList.contains("card-link")){
     editprice(el.target.dataset.id);
  }
})

function editprice(id){
  fetch(`https://sharktank-server.onrender.com/pitches/${id}`)
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
    updatePricePitchId.value=data.id;
    updatePricePitchPrice.value=data.price;
  })
 
  updatePricePitchPriceButton.addEventListener('click',()=>{
    let updateprice={
      id:updatePricePitchId.value,
      price:updatePricePitchPrice.value,
    }

   fetch(`https://sharktank-server.onrender.com/pitches/${updateprice.id}`,{
    method:"PATCH",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(updateprice)
   }).then((res)=>{
    return res.json()
   }).then((data)=>{
    alert("price updated successfully");
    window.location.reload();
    console.log(data);
   }).catch((err)=>{
    console.log("Erorr 404",err);
   })

  })
}