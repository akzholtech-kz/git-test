// function hello() {
//     console.log("Hello", this)
// }

// const person = {
//     name: "Akzhol",
//     age: 25,
//     sayhello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }


// const fati = {
//     name: "Fati",
//     age: 24
// }

// const fnFatiInfo = person.logInfo.bind(fati, "Frontend", "8777777777")

// fnFatiInfo()

//============

let array = [1, 2, 3, 4, 5];

// function mlt() {
//     let newArray = array.map((ele)=>{
//         ele * 2;
//     })
//     console.log(newArray)
// }

Array.prototype.mlt = function(n) {
    return this.map((i)=> {
        return i * n;
    })
}

console.log(array.mlt(2));