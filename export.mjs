

class Student{
    constructor(name,matricno,major){
        this.name = name;
        this.matricno=matricno;
        this.major=major;
    }
    get Name(){
        return this.name;
    }
    
    set Name(name){
        this.name = name;
    }
    get Matricno(){
        return this.matricno;
    }
    
    set Matricno(matricno){
        this.matric = matricno;
    }
    
    get Major(){
        return this.major;
    }
    
    set Major(major){
        this.major = major;
    }
    

    
    display=()=>{
        
        console.log(`Name of the student is: ${this.name} his Matric No: ${this.matricno} and his Major: ${this.major}`);
       
    }

    
    }


export{Student};
