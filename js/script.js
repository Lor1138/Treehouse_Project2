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
 
//This function creates elements to append to the page with 10 students per link

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

// creates buttons that dynamically add page links depending on the amount of students
      for(let i = 0; i < studentsPerPage; i++){

        const pageLink = document.createElement('a');
        let paginationLi = document.createElement('li');
        const pageLinkLabel = document.createTextNode(`${i+1}`);
        pageLink.appendChild(pageLinkLabel);
        pageLink.href = '#';
        paginationLi.appendChild(pageLink);
        pageUL.appendChild(paginationLi);
        if (i === 0) {
            pageLink.classList.add('active');
        } else {
            pageLink.classList.remove('active');
        }
      
        // when the link is clicked, it gives it the 'active' class, and then removes it when another 
        //link is clicked.
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
   //call the functions to interact with the HTML and DOM
   showPage(studentItems, 1);
   appendPageLinks(studentItems);
   

