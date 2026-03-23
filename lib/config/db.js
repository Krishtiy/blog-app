import mongoose from'mongoose';
export const ConnectDB=async () =>{
await mongoose.connect('mongodb+srv://krishti:Krishti0059@cluster0.9h5xup8.mongodb.net/Blog-App');
console.log("DB Connected");
}
    