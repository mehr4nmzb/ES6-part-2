import {Student} from './export.mjs';
import readline from 'readline';

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout
    
    });
    
    rl.question('Name :',(name) =>{
        rl.question('Matric no : ' ,(matricno) =>{
            rl.question('Major : ',(major) =>{
               let student = new Student(name,matricno,major);
                    student.display();
                
                rl.close();
            });    
        });
    });
