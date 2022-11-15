var app = new function(){
    this.el = document.getElementById('tasks');
    this.tasks=[]
    // console.log(this.tasks)
    this.fetch_all = function(){ //displays all tasks
        
        var data='';
        if(this.tasks.length>0){
            for(i=0; i<this.tasks.length; i++){
                data+='<tr>';
                data+= '<td>' + (i+1)+'. '+ this.tasks[i]+'</td>';
                data+='<td><button onclick="app.edit_task(' + i + ')" class="btn btn-warning">Edit</button></td>';
                data+='<td><button onclick="app.delete_task(' + i + ')" class="btn btn-danger">Delete</button></td>';
                data+='</tr>';
            
            }

        }
        this.task_count(this.tasks.length);
        document.getElementById("tasks").innerHTML = data

    };
    this.add_tasks = function(){ //adds a task
        el = document.getElementById('add-todo');
        var t = el.value;
        // console.log(Array.isArray(this.tasks))
        if (t){
            // this.tasks.push(tasks.trim());
            this.tasks.push(t)
            el.value='';
            this.fetch_all();
        }


    };

    this.edit_task = function(item){//edits a task
        el = document.getElementById('edit-todo');
        
        el.value = this.tasks[item]

        document.getElementById('edit-box').style.display='block';
        self = this;
  

        const submitButton = () => { //save button actions
            var t = el.value;
            
            if (t){
                
                // console.log(this)
                this.tasks.splice(item, 1, t.trim());
    
                self.fetch_all();
                CloseInput();
            }

        }

        document.getElementById('save-edit').onsubmit = submitButton //actions for save button

    };

    this.delete_task = function(item) { //deletes a task
        this.tasks.splice(item, 1)
        this.fetch_all();

    };
    this.task_count = function(data){//gives out number of tasks in the list
        var el = document.getElementById('counter');
        var name = 'tasks'
        if (data){
            if (data == 1){
                name = 'task'
            }
            el.innerHTML = data+ ' ' + name;
        }
        else{
            el.innerHTML = "no "+ name;
        }

    };
    
}

app.fetch_all();
function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}
