//Store students and access them
const studentItems = document.querySelectorAll(".student-list > .student-item");


//Show only 10 students per page. 
function showPage (list, page) {
   
    let start = page * 10 - 10;
    let end = page * 10;    
    studentItems.innerHTML = "";
    for(let i = 0; i < list.length; i++) { 
      if(i >= start && i < end ){
        list[i].style.display = 'block';
      } else {
          list[i].style.display = 'none';
      }
   
    }
   
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks(list) {
   const studentsPerPage = Math.ceil(list.length/10);
   console.log({list, studentsPerPage})
   const pageDomElement = document.querySelector('.page');
   const pageContent = document.createElement('div');
   pageContent.classList.add('pagination');
   const pageUL = document.createElement('ul');
   // 
   pageDomElement.appendChild(pageContent);
   pageContent.appendChild(pageUL);
   document.body.appendChild(pageContent);

// create 5 buttons    
      for(let i = 0; i < studentsPerPage; i++){

        const pageLink = document.createElement('a');
        let paginationLi = document.createElement('li');
        const pageLinkLabel = document.createTextNode(`${i+1}`);
        // paginationLi += studentItems/10;
        pageLink.appendChild(pageLinkLabel);
        pageLink.href = '#';
        paginationLi.appendChild(pageLink);
        pageUL.appendChild(paginationLi);
        if (i === 0) {
            pageLink.classList.add('active');
        } else {
            pageLink.classList.remove('active');
        }
      

      pageLink.addEventListener('click', (event) => { 
         const pageNumbers = pageUL.querySelectorAll('a');
            showPage(list, i+1);
            for (let j = 0; j < pageNumbers.length; j++) {
                pageNumbers[j].classList.remove('active');
                event.target.classList.add('active');
         }
       });
      }
  
   }

   showPage(studentItems, 1);
   appendPageLinks(studentItems);
   

