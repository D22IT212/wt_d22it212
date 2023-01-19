console.log("Hello")
class person{
    constructor(name,age){
        this.age=age;
        this.name=name;
        
    }
    get personName() {
        returnthis.name;
    }
    set personName(name){
        this.name =name;
    }

    showDetails() {
        console.log(`name is $(this.name) and age is $(this.age)`);
    }
}

class Student extends person{
    constructor(name,age,ID,semester){
        super(name,age,);
        this.ID=ID;
        this.semester=semester;
    }
}
const studentlist =[];
 
studentlist.push(new Student("Prachi",18,"D22IT212",4));
studentlist.push(new Student("Hitanshi",18,"D22IT201",4));
studentlist.push(new Student("Pari",18,"D22IT190",4));

const displayAt = document.getElementById("idShowData");

const ul=document.createElement("ul");

for(obj of studentlist){
    const li=document.createElement("li");
    li.textContent=obj.name;
    ul.appendChild(li);
}
displayAt.appendChild(ul);