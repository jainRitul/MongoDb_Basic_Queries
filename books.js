const mongoose = require('mongoose')

main().then(()=>{
    console.log("Connection Established");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
   title :{
    type : String,
    required : true,
    maxLength : 20
   },
   author :{
    type : String,
   },
   price :{
    type : Number,
    min : [1 , "Price is too low for amazon selling"]
   },
   discount :{
    type : Number,
    default : 0
   },
   category : {
    type : String,
    enum : ["fiction","non fiction"]
   }
})

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book(
//     {title:"Bhoot Nath",price:1,category:"non fiction"}
//      );

// book1.save().then((res)=>{
//     console.log(res);
// });

Book.findByIdAndUpdate('65c870a8223f8164e48023fd',{price : -400},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})