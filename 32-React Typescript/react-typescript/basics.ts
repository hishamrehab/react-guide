// Primiteves 

let  age: number;
age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;
 
isInstructor = true;

// More Complex Types
     let hobbies : string[];

    hobbies =["Sports" , "Cooking"];
 
     type Person =   {
        name: string;
        age: number;
    };

    let person : Person;
     

    person = {
        name: "Max",
        age: 12
    };

    let people: Person[];

    // Type Inference
    let course: string | number =  "React - The complete Guide" 
    
    
    // Functions & Types

    function add(a: number , b: number) : number {
        return a + b;
    }
     
    
    function print(value: any) {
        console.log(value);
    }

    

    // Generics 
    function inserAtBegging<T>(array: T[] , value: T) {
        const newArray= [ value , ...array];
        return newArray;
    }

    const demoArray = [1 , 2 , 3 ];

    const updatedArray = inserAtBegging(demoArray , -1);
    const stringArray =   inserAtBegging(['a' , 'b' , 'c' ] ,'d');


    // updatedArray[0].split('');

