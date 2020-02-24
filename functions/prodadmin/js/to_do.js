
function to_do(){
    auth('prodadmin@test.com',to_do_secured, '/login')
    
}

function to_do_secured(){
    glPageContent.innerHTML = '<h1>TO DO Page</h1>'
    glPageContent.innerHTML = `
    <div class = "input">
        <input type = "text" name="todo-input" id="todo-input"
        class="input-element" placeholder="What's on your agenda?"/>
        <button class = "btn btn-danger" type = "button" name="add-btn" id="add-btn" class="input-btn">ADD TODO</button>
        </div>
    <div class="todo-list" id="list"></div>
    </div>
    <script src= "js/to_do.js"></script>
    `;
    var add_todo_btn = document.getElementById('add-btn');
    var todo_input = document.getElementById('todo-input');
    var list = document.getElementById('list');
    add_todo_btn.addEventListener('click',function (){
        var todo = todo_input.value;
        var item = document.createElement('DIV');
        item.classList.add('item');
        var item_text = document.createElement('DIV');
        item_text.classList.add('item-text');
        item_text.textContent = todo;
        var edit_input = document.createElement('INPUT');
        edit_input.classList.add('edit_input');
        edit_input.classList.add('hide');
        edit_input.name = 'edit-input';
        edit_input.type = 'text';
        edit_input.value = todo;
       var edit_input_btn = document.createElement('BUTTON');
       // UPDATE
      edit_input_btn.textContent = 'UPDATE';
        edit_input_btn.classList.add('action-btn');
        edit_input_btn.classList.add('update-btn');
        edit_input_btn.classList.add('hide');
        edit_input_btn.type = 'button'; 
        var actionBtns = document.createElement('DIV');
        actionBtns.classList.add('action-btns');
        var edit_btn = document.createElement('BUTTON');
        edit_btn.classList.add('actionBtns');
        edit_btn.classList.add('edit_btn');
        edit_btn.textContent = 'EDIT';
        //edit todos
        edit_btn.addEventListener('click', function(){
            edit_input.classList.remove('hide');
            item_text.classList.add('hide');
            edit_input_btn.classList.remove('hide');
            edit_input_btn.addEventListener('click', function (){
                item_text.textContent = edit_input.value;
                edit_input.classList.add('hide');
                item_text.classList.remove('hide');
                edit_input_btn.classList.add('hide');
            });
        }); 
        var remove_btn = document.createElement('BUTTON');
        remove_btn.classList.add('action-btn');
        remove_btn.classList.add('remove-btn');
        remove_btn.textContent = 'REMOVE';
        //remove tods
        remove_btn.addEventListener('click', function(){
            item.parentNode.removeChild(item);
        });

        actionBtns.append(edit_input_btn);
        actionBtns.append(edit_btn);
        actionBtns.append(remove_btn);
        item.append(item_text);
        item.append(edit_input);
        item.append(actionBtns);
        list.append(item);
        todo_input.value = '';
    });
}



