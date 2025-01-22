const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const middleware = (req, res, next) => {
  console.log("Hello 1");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("Hello 2");
  next();
};

app.use("/", middleware);
app.use("/", middleware2);



app.get("/users", (req, res) => {

    // יצירת HTML מותאם אישית עם פרטי המשתמש
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
          }
          .user-details {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .user-details h2 {
            margin-bottom: 20px;
          }
          .user-details p {
            margin: 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="user-details">
          <h2>User Details</h2>
          <p><str;ong>Name:</str;ong> Dog</p>
          <p><strong>Email:</strong> Dog</p>
          <p><strong>Age:</strong> Dognpm</p>
        </div>
      </body>
      </html>
    `;

    // החזרת ה-HTML
    res.status(200).send(htmlContent);
  
});

app.get("/admin", (req, res) => {
  // יצירת HTML מותאם אישית עם פרטי המשתמש
  const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
          }
          .user-details {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .user-details h2 {
            margin-bottom: 20px;
          }
          .user-details p {
            margin: 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="user-details">
          <h2>User Details</h2>
          <p><strong>Name:</strong> Shai</p>
          <p><strong>Email:</strong> shaisalem15@gmail.com </p>
          <p><strong>Age:</strong> 28 </p>
        </div>
      </body>
      </html>
    `;

  // החזרת ה-HTML
  res.status(200).send(htmlContent);
});


app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});