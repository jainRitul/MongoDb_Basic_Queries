const mongoose = require('mongoose')
//mongoose help kr rha h connect krne m index.js ko database k sath jiske link hum provide ki h

//promise 
//connection establishment
main()
.then(()=>{
   console.log("connection successfully build");
 })
.catch((err)=>console.log(err));
//await isliye kyuki hoskta h db s connection banane m time hojye
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');//database link h
}



//defiening schema for collection
const userSchema = new  mongoose.Schema({
    name : String,
    email:String,
    age:Number
})


//creating collection
const User = mongoose.model("User",userSchema);
//model k andhar vala Employee collection ka name h or const k sath vala jo h vo model ka naam h
// const Employee = mongoose.model("Employee",userSchema);

// //findByIdAndDelete 
// User.findByIdAndDelete('65c86231cf085c32849118c2').then((res)=>{
//     console.log(res);
// })




//findOneAndDelete 
User.findOneAndDelete({name:"chini"}).then((res)=>{
    console.log(res);
})




//delete
// User.deleteMany({age:{$gt:30}}).then((res)=>{
//     console.log(res);
// })



//findOneAndUpdate and findByIdAndUpdate
// User.findOneAndUpdate({name:"Adam"},{name : "Prinjal"},{new : true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
//findByIdAndUpdate
// User.findByIdAndUpdate('65c86369d085f7893f565b21',{email:"rituljain@gamil.com"},{new : true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })




//update
// User.updateMany({age : {$gt: 40}},{age:20})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })




//find
// User.findById('65c86369d085f7893f565b21')
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })





//insertMany
// User.insertMany([
//     {name:"diya",email:"diya@gmail.com",age:39},
//     {name:"mimi",email:"mimi@gmail.com",age:59},
//     {name:"chiku",email:"chiku@gmail.com",age:32},
//     {name:"chini",email:"chini@gmail.com",age:12},
// ]).then((res)=>{
//     console.log(res);
// })






//insertOne
//documents insertion
// const user1 = new User({
//     name : "Adam",
//     email:"adam@yahoo.in",
//     age : 48
// })
// user1.save()

// const user2 = new User({
//     name :"eve",
//     email:"eve@yahoo.in",
//     age:23
// })
// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
