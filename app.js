const express = require("express")
const bodyParser = require("body-parser");
const request =require("request");
const http = require("https");
const { url } = require('inspector');
const { response } = require('express');
const mailchimp = require("@mailchimp/mailchimp_marketing");
const e = require("express");
const app = express();

mailchimp.setConfig({
    apiKey:"b18e1a5f045c1d697ff016dc7c19e3eb-us21",
    server:"us21"
});

app.use(bodyParser.urlencoded({extended: true}));

// Accessing the css and image files in express js. just adding the fonders to "public "folder.
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signup.html")
})

app.post("/",(req,res)=>{

// const {email} = bodyParser;

const listId = "6cc004f7ba";
const subscribingUser = {
  email: req.body.email
};

async function run() {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
    // merge_fields: {
    //   FNAME: subscribingUser.firstName,
    //   LNAME: subscribingUser.lastName
    // }
  });

  // app.get('/', (req, res) => {
  
  // });

  res.sendFile(__dirname + "/success.html")

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
  );
}
console.log("running run function");
run();

})




app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is running on port dynamically.")
})

//API KEY
//0e2a2237c1dfe77a19cd0830289d7678-us21

//Audience/List ID
//6cc004f7ba

//us21

    //Temp Get request location
// const api_key = "b18e1a5f045c1d697ff016dc7c19e3eb-us21"
// const server_url = "us21"

// mailchimp.setConfig({
//   apiKey: api_key,
//   server: server_url,
// });

// async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }
// run();





// app.post("/",(req,res)=>{
//     const firstname =req.body.fname
//     const lastname =req.body.nname
//     const email =req.body.email

//     // console.log(firstname, lastname, email)

//     const data = {
//         members:[
//             {
//                 email_address:email,
//                 status: "subscribed",
//                 merge_fields:{
//                     FNAME: firstname,
//                     LNAME: lastname
//                 }
//             }
//         ]
//     }
//     const jasonData = JSON.stringify(data);

//     const url = "https://us21.api.mailchimp.com/"

//     https.request(url, options, (response)=>{

//     })

// })





   
// // })

//     app.post("/",(req,res)=>{
//     // Creating a audience, before creating a contact.
//     const event = {
//         name: "JS Developers Meetup"
//       };
      
//       const footerContactInfo = {
//         company: "Mailchimp",
//         address1: "675 Ponce de Leon Ave NE",
//         address2: "Suite 5000",
//         city: "Atlanta",
//         state: "GA",
//         zip: "30308",
//         country: "US"
//       };
      
//       const campaignDefaults = {
//         from_name: "Gettin' Together",
//         from_email: "gettintogether@example.com",
//         subject: "JS Developers Meetup",
//         language: "EN_US"
//       };
      
//       async function run() {
//         const response = await mailchimp.lists.createList({
//           name: event.name,
//           contact: footerContactInfo,
//           permission_reminder: "permission_reminder",
//           email_type_option: true,
//           campaign_defaults: campaignDefaults
//         });
      
//         console.log(
//           `Successfully created an audience. The audience id is ${response.id}.`
//         );
//       }
      
//       run();

// // Creating a contact for a audiance list


// async function run() {

//     const listId = "";
// const subscribingUser = {
//   firstName: "req.body.fiName",
//   lastName: "req.body.laName",
//   email: "req.body.email"
// };

//   const response = await mailchimp.lists.addListMember("6cc004f7ba", {
//     email_address: subscribingUser.email,
//     status: "subscribed",
//     merge_fields: {
//       FNAME: subscribingUser.firstName,
//       LNAME: subscribingUser.lastName
//     }
//   });

//   console.log(
//     `Successfully added contact as an audience member. The contact's id is ${
//       response.id
//     }.`
//   );
// }

// run();

// res.send("Email successsful")
// })
 












//     const {email} = req.body;
//     console.log(req.body)

//     const mcData = {
//         members:[{
//             // first_name: finame,
//             // last_name: laname,
//             email_address: email,
//             status: 'subscribed'
//             }

//         ]
//     }

//     const mcDataPost = JSON.stringify(mcData);

//     const options = {
//         url: 'https://us21.admin.mailchimp.com/lists/6cc004f7ba',
//         methord: 'POST',
//         headers: {
//             Authorization: 'auth b18e1a5f045c1d697ff016dc7c19e3eb-us21'
//         },
//         body:mcDataPost
//     }

//     if(email) {
//         request(options, (err, response,body)=>{
//             if(err){
//                 res.json({error: err})
//             }else{
//                 // if(js){
//                 //     res.sendStatus(200);}
                
//                     res.redirect('success.html')
                
//             }
//         })
//     }else{
//         res.status(404).send({message: 'Failed'})
//     }

// })