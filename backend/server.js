const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;
const path = require('path');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const persons = [
    {
      id: 1,
      name: "moh",
      age: 21,
      gender: "male",
      email: "fassdf@gmail.com",
    },
    {
      id: 2,
      name: "farouk",
      age: 211,
      gender: "male",
      email: "fa@gmail.com",
    },
    {
        id: 3,
        name: "faros",
        age: 26,
        gender: "male",
        email: "fassdf@gmail.com",
      },
      {
        id: 4,
        name: "faro",
        age: 23,
        gender: "male",
        email: "fassdf@gmail.com",
      },

      {
        id: 5,
        name: "far",
        age: 22,
        gender: "male",
        email: "fassdf@gmail.com",
      },
      {
        id: 6,
        name: "mohamed",
        age: 24,
        gender: "male",
        email: "fassdf@gmail.com",
      }


  ];

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


app.get("/persons", (req, res) => {
  res.json(persons);
});




app.post("/persons", (req, res) => {
    const person = req.body;
    const id = persons.length + 1;
    person.id = id;
    persons.push(person);
    res.json(person);
  });


  app.get("/persons/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const person = persons.find((p) => p.id === id);
  
    if (!person) {
      res.status(404).json({ error: "Person not found" });
    } else {
      res.json(person);
    }
  });


  app.get("/persons", (req, res) => {
    res.json(persons);
  });




  app.put("/persons/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPerson = req.body;
    const index = persons.findIndex((p) => p.id === id);
  
    if (index === -1) {
      res.status(404).json({ error: "Person not found" });
    } else {
      persons[index] = { ...updatedPerson, id };
      res.json(persons[index]);
    }
  });



  app.delete("/persons/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = persons.findIndex((p) => p.id === id);
  
    if (index === -1) {
      res.status(404).json({ error: "Person not found" });
    } else {
      persons.splice(index, 1);
      res.json({ message: "Person deleted successfully" });
    }
  });

  






















































  




// app.get("/persons/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const person = persons.find((p) => p.id === id);
  
//     if (!person) {
//       res.status(404).json({ error: "Person not found" });
//     } else {
//       res.json(person);
//     }
//   });


//   app.post("/persons", (req, res) => {
//     const person = req.body;
//     const id = persons.length + 1;
//     person.id = id;
//     persons.push(person);
//     res.json(person);
//   });


//   // PUT update an existing person
// app.put("/persons/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const updatedPerson = req.body;
//     const index = persons.findIndex((p) => p.id === id);
  
//     if (index === -1) {
//       res.status(404).send("Person not found");
//     } else {
//       persons[index] = { ...updatedPerson, id };
//       res.json(persons[index]);
//     }
//   });
  
//   // DELETE an existing person
//   app.delete("/persons/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = persons.findIndex((p) => p.id === id);
  
//     if (index === -1) {
//       res.status(404).send("Person not found");
//     } else {
//       persons.splice(index, 1);
//       res.send("Person deleted successfully");
//     }
//   });
  
  
