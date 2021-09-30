const btn = document.querySelector('button')
const input = document.getElementById('task')
const list = document.querySelector('.list')
const completed = document.querySelector('.completed')
const notCompleted = document.querySelector('.notCompleted')


btn.addEventListener('click', addToList)
input.addEventListener('keyup', (e) =>{
    (e.keyCode === 13 ? addToList(e) : null);
})

function addToList(e) {
    e.preventDefault();
 const li = document.createElement('li');
 const checkBtn = document.createElement('button');
 const delBtn = document.createElement('button');
 li.classList.add('taskNotCompleted')

 checkBtn.innerHTML = '<i class="fa fa-check"></i>';
 delBtn.innerHTML = '<i class="fa fa-trash"></i>';
if(input.value !== '') {
 li.appendChild(document.createTextNode(`${input.value}`))
 notCompleted.appendChild(li);

 li.appendChild(checkBtn);
 li.appendChild(delBtn);

 input.value = '';
}
 checkBtn.addEventListener('click', function(e) {
    e.preventDefault();
    li.classList.add('taskCompleted')

    completed.appendChild(li);
    checkBtn.remove();
 })

  delBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentNode;
      parent.remove();
  })
}

