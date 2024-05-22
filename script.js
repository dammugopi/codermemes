
let memebtn=document.getElementById("getmeme");
// const container = document.getElementById("container")
 
let count= 1;

memebtn.addEventListener('click',getimage);
function getimage(){
   
  // const image= document.createElement('img');
  // image.classList.add('imgdiv')

    
   
  if(count>10){
    count=1;
  }
  const product=document.createElement('div');
  product.classList.add('product')
  
  const image= document.createElement('img');
  image.src=`assests/image${count}.jpg`;
  count++;
  

    product.append(image);
    container.appendChild(product);
    setTimeout(removeimage,2000);
  }
  function removeimage(){
   const k= document.getElementsByClassName('product')
    k[0].remove()
  }




    // 
  
 

 