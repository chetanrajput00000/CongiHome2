const mongoose=require('mongoose')

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log('connection sucessful');
  }).catch((err)=>{
    console.log('NO CONNECTION '+err);
  })