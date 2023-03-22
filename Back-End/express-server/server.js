const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
    console.log(req);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1><p>My email is: ariel.maj@hotmail.com</p>");
});

app.get("/about", (req, res) => {
    res.send(
        "<h1>About Page</h1><p>Ever since my childhood, I've always been fascinated\
         by complex and \"difficult-to-learn\" skills. After I started studying algorithms, \
         programming languages, software development, and web/mobile development, I was \
         completely in love. Now, as a Master's student in Computer Science, I'm more \
         excited than ever to expand my knowledge and apply it in real-world situations. \
         Currently, I work developing solutions for small businesses and on personal projects\
         and I'm eager to take on new challenges and develop my skills through different \
         perspectives. I believe that learning and working as a team is fundamental for \
         professional and personal growth, and I'm looking forward for new opportunities \
         that allow me to collaborate with other creative minds. I deeply value every \
         experience and learning opportunity in my work and life, and I'm committed to \
         continuous growth and to applying this knowledge for creating great solutions for\
         clients. If you are looking for a passionate, dedicated professional, who is \
         always looking for challenges, then you've found the right person! I'm looking \
         forward to contributing to your company with my experience and skills.</p>"
    );
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
