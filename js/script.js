//Store students and access them
const studentItems = document.querySelectorAll(".student-item");

let pageNumber = 2;


//Show only 10 students per page. 
const showPage = (list, page) => {
   
    let start = (page * 10) - 11;
    let end = page + 10;    
    for(let i = 0; i < list.length; i++) { 
      if(start >= i && i <= end ){
        //to show students if true
        list[i].style.display = 'block';
      } else {
          //to hide students if falses
          list[i].style.display = 'none';
      }
    }
    return;
};
   
   


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


const appendPageLinks = (list) => {
   const pageNum = Math.ceil(list.length/10);
   const pageContent = document.createElement('div');
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   const a = document.createElement('a');
   pageContent.className = "page"; 
   li.appendChild(a);
   ul.appendChild(li);  
   div.appendChild(ul);

   for(let i = 0; i < pageNum; i++){
      
      
      }
   }
   
   /*** 
   create a loop that uses the pageNum variable to interate the correct number of LI 
   elements
   create a nested UL element containing one LI for every ten students on the 
   list.
   Each LI needs to contain an A element with and HREF attribute of #.
   the text also needs to be set to 1, 2 etc.
   Looping this would be wise as well.

   Add active class name to the first pagination link INITIALLY.
   Add a "click" event listening to each A element LOOP THIS TOO.

   The active class name should be added to the link that was just clicked.
   The target property of the event object should be useful here.

   The function to show a page should be called, passing in as arguments, 
   the global variable for the list items, and the page number that should be shown. 
   The text content of the A element that was just clicked can be helpful here.

   **/

   

  



