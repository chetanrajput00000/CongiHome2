const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// connection of mongodb
require('../db/connection')


// acquire schema model 
const User = require("../models/child-schema");
const User2 = require('../models/parent-schema')
const User3 = require('../models/doctor-schema')

router.get('/', (req, res) => {
  res.render('index')
  // res.status(201).render("register");

})


// router.post('/register',  (req, res) => {

//   const { name, email, contact, profession, password, confirmpassword } = req.body;

//   // check all the entries are properly filled by the user
//   if (!name || !email || !contact || !profession || !password || !confirmpassword) {
//     return res.status(422).json({ error: "Please Fill All The Values" })
//   }

//   // check user already exists
//   User.findOne({ email: email })
//     .then((userExists) => {
//       if (userExists) {
//         return res.status(422).json({ error: "User Already Exists " });
//       }

//       const user = new User({ name, email, contact, profession, password, confirmpassword });

//       user.save().then(() => {
//         res.status(201).json({ message: "user register sucessfully " });
//       }).catch((err) => res.status(500).json({ error: "User registrstion failed"}));
//     }).catch((err) => { console.log(err); })
// });



router.post('/register', async (req, res) => {

  const {  firstname, lastname, email, password, dob, age, gender, parentcontact, parentname   } = req.body;

// if (!firstname || !lastname || !email || !password || !dob || !gender || !parentcontact ||!parentname ||!age ||!contact) {
//   return res.status(422).json({ error: "Please Fill All The Values" })
// }
//  res.status(422).json({ error: "reg-sucess" })

try {
  const userExists = await User.findOne({ email: email })

  if (userExists) {
    return res.status(422).json({ error: "User Already Exists " });
  }

  const user = new User({ firstname, lastname, email, password, dob, age,gender, parentcontact, parentname });

  const userRegister = await user.save();

  if (userRegister) {
    // res.status(201).json({ message: "user register sucessfully "
    res.render("child-login")
  // });

  } else {
    res.status(500).json({ error: "User registrstion failed" });
  }

} catch (err) {
  console.log(err);
}

})


// parent-reg

router.post('/register2', async (req, res) => {

  const {  firstname, lastname, email, password, dob, age, gender ,contact  } = req.body;

// if (!firstname || !lastname || !email || !password || !dob || !gender || !parentcontact ||!parentname ||!age ||!contact) {
//   return res.status(422).json({ error: "Please Fill All The Values" })
// }
//  res.status(422).json({ error: "reg-sucess" })

try {
  const userExists = await User2.findOne({ email: email })

  if (userExists) {
    return res.status(422).json({ error: "User Already Exists " });
  }

  const user = new User2({ firstname, lastname, email, password, dob, age,gender, contact});

  
  const userRegister = await user.save();

  if (userRegister) {
    // res.status(201).json({ message: "user register sucessfully " });
    res.render("parent-login")


  } else {
    res.status(500).json({ error: "User registrstion failed" });
  }

} catch (err) {
  console.log(err);
}

})




router.post('/register3', async (req, res) => {

  const {  name, clinic_name, email, password, dob, age, gender ,contact ,address } = req.body;

// if (!firstname || !lastname || !email || !password || !dob || !gender || !parentcontact ||!parentname ||!age ||!contact) {
//   return res.status(422).json({ error: "Please Fill All The Values" })
// }
//  res.status(422).json({ error: "reg-sucess" })

try {
  const userExists = await User3.findOne({ email: email })

  if (userExists) {
    return res.status(422).json({ error: "User Already Exists " });
  }

  const user = new User3({name, clinic_name, email, password, dob, age, gender ,contact ,address});

  
  const userRegister = await user.save();

  if (userRegister) {
    // res.status(201).json({ message: "user register sucessfully " });
    res.render("doctor-login")



  } else {
    res.status(500).json({ error: "User registrstion failed" });
  }

} catch (err) {
  console.log(err);
}

})



// login-route-------

router.post('/login', async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "Invalid Credentials In Login" })
    }

    const userLogin = await User.findOne({ email: email });
    
    if (!userLogin) {
      return res.status(400).json({ message: "Email not verify" });
    }

    const isMatch = (password === userLogin.password); // Compare plain text password with stored password
    
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // res.json({ message: "Login successfully" });
    res.status(201).render("child-page");

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
})


// login-route2parent-------

router.post('/login2', async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "Invalid Credentials In Login" })
    }

    const userLogin2 = await User2.findOne({ email: email });
    
    if (!userLogin2) {
      return res.status(400).json({ message: "Email not verify" });
    }

    const isMatch2 = (password === userLogin2.password); // Compare plain text password with stored password
    
    if (!isMatch2) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // return res.json({ message: "Login successfully" });
    res.status(201).render("parent-page");


  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
})



  // login-route3doctor-------

  router.post('/login3', async (req, res) => {

    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(422).json({ error: "Invalid Credentials In Login" })
      }
  
      const userLogin3 = await User3.findOne({ email: email });
      
      if (!userLogin3) {
        return res.status(400).json({ message: "Email not verify" });
      }
  
      const isMatch3 = (password === userLogin3.password); // Compare plain text password with stored password
      
      if (!isMatch3) {
        return res.status(400).json({ message: "Invalid password" });
      }
  
      // return res.json({ message: "Login successfully" });
      res.status(201).render("doctor-page");

  
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  })
  












module.exports = router;