const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const jwt=require("jsonwebtoken")
const Authenticate=require("../middleware/authenticate")
const User = require("../model/modelSchema"); //User k pass sara data aa gya

router.get("/", (req, res) => {
  res.send("hellow i am router");
});

 //for using .then
// router.post("/regi", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "please complete data" });
//   }

//   User.findOne({ email: email }) // findone me  first email haii wo database wala and second email wo user jo fill kr rha haiii
//     .then((userExis) => {
//       if (userExis) {
//         return res.status(422).json({ eror: "email already exist" });
//       }else if(password!==cpassword){
//         return res.status(422).json({ eror: " password wrong" });
//       }else{
//         const user = new User({ name, email, phone, work, password, cpassword });
//         user.save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed to regiser" }));
//     }
// })
//     .catch((err) => {
//       console.log(err);
//     });
      
    
    

//       //  const user =new User(req.body) nhi likha kyunki ye sara data copy kr dega,
//       // in future agar kuch hi data copy krna hua to humm phle wale frmula se krenge ;

//       //user.save ak promise return krta haiii

      
      
// });

router.post("/regi", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please complete data" });
  }
  try {
    const userExis = await User.findOne({ email: email });
    if (userExis) {
      return res.status(422).json({ eror: "email already exist" });
    }else if(password!==cpassword){
            return res.status(422).json({ eror: " password wrong" });
    }else{
        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save();
        res.status(201).json({ message: "user registered successfully" });
    }
      
    
  } catch (error) {
    console.log(error);
  }
});

// LOGIN WALA SCENE

router.post('/signin', async(req,res)=>{
    // console.log(req.body)
    // res.json("login succs")
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(401).json({error:"plese fill data"})
  }
    try {
      let token;
      
       
        const loginUser= await User.findOne({email:email})
        //console.log(loginUser)

        if(loginUser){
        
          token=await loginUser.generateAuthToken();
     
          res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true,
          }); 
           
        if(!loginUser){

          console.log("token",token)
            res.status(400).json({message:"user error"})
        }else{
        res.json({message:"user signin successfully"})
        }
    }} catch (error) {
        console.log(error)
    }
})

// about us ka page
router.get('/about',Authenticate,(req,res)=>{

  res.send(req.rootUser);
})
router.get('/Logout',(req,res)=>{
  console.log("i am logout")
  res.clearCookie('jwtoken',{path:'/'});
  res.status(200).send("userlogout");
})
  

module.exports = router;
