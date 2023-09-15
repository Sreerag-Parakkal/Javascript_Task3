fetch("https:jsonplaceholder.typicode.com/users")
 .then((data)=>data.json())
 .then((users)=>console.log(users))
 .catch((err)=>console.log(err.message));

 function abc(){
     let x=10;
     function cde(){
         console.log(x);
     }
     cde();
    }

 abc()
