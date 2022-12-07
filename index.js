const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html")
})
/*
app.post("/", function (req, res) {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }
  
  const jsonData = JSON.stringify(data)
  
  const apiKey = "41b9a9a0d5129e3a7330a3ef42c57273-us21"
  const apiServer = "us21"
  const listID = "d9ed77d558"
  
  const url = "https://" + apiServer + ".api.mailchimp.com/3.0/lists/" + listID

  const options = {
    method: "POST",
    auth: "scarosaurus:" + apiKey
  }

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data))
    })
  })

  request.write(jsonData)
  request.end()
})

app.post("/failure", function (req, res) {
  res.redirect("/")
})
*/
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 300");  
})

