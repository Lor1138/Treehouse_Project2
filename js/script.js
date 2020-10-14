//Store students and access them
const studentItems = document.querySelectorAll(".student-list");


//Show only 10 students per page. 
function showPage (list, page) {
   
    let start = page * 10 - 10;
    let end = page * 10;    
    for(let i = 0; i < list.length; i++) { 
      if(i >= start && i < end ){
        //to show students if true
        list[i].style.display = 'block';
      } else {
          //to hide students if false
          list[i].style.display = 'none';
      }
   
    }
   
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks(list) {
   const pageNum = Math.ceil(list.length/10);
   const pageList = document.getElementsByClassName('.page');
   const pageContent = document.createElement('div');
   const pageUL = document.createElement('ul');
   pageList.appendChild(pageContent);
   pageContent.className = "pagination"; 
   pageContent.appendChild(pageUL);
   console.log(list);
   
      for(let i = 0; i < pageNum; i++){
        const pageLink = document.createElement('a');
        const paginationLi = document.createElement('li');
        const pageLinkLabel = document.createTextNode(`${i+1}`)
        a.appendChild(pageLinkLabel);
        a.href = '#';
        paginationLi.appendChild(pageLink);
        pageUL.appendChild(paginationLi);
        if (i === 0) {
            pageLink.classList.add('active');
        } else {
            pageLink.classList.remove('active');
        }
      

      pageLink.addEventListener('click', (event) => { 
         const pageNumbers = document.querySelectorAll('.pagination a');
            showPage(list, pageLinkLabel);
            for (let j = 0; j < pageNumbers.length; j++) {
                pageNumbers[j].classList.remove('active');
                event.target.classList.add('active');
         }
       });
      }
  
   }

   showPage(studentItems, 1);
   appendPageLinks(studentItems);
   

