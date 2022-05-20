const mongoose = require('mongoose')

const DB1= process.env.DATABASE;


mongoose.connect(DB1,{
    useNewUrlParser:true,

    useUnifiedTopology:true,

})

.then( ()=>{
    console.log(`My first Achievement server connected`)
}).catch((err) =>console.log(err, `no connecton`))   