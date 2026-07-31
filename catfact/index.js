// get
app.get("/user", async (req, res) => {
  try {
    const user = await Users.find();
    res.json(200).status(user);
  } catch (error) {
    res.json(500).status({ message: error.message });
  }
});

// single user using id
app.get("/user/:id", async (req, res) => {
  try {
    const singleUser = await Users.findById(req.params.id);
    res.json(200).status(singleUser);
  } catch (error) {
    res.json(500).status({ message: error.message });
  }
});

//create user
app.post("/user", async (req, res) => {
  try {
    const createUser = await Users.create(req.body);
    res.json(200).status(createUser);
  } catch (error) {
    res.json(500).status({ message: error.message });
  }
});

// update user
app.put("/user/:id", async (req, res) => {
  try {
    const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(200).status({ message: "User updated successfully" });
  } catch (error) {
    res.json(500).status({ message: error.message });
  }
});

//delete user
app.delete("/user/:id", async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.json(200).status({ message: "User deleted successfully" });
  } catch (error) {
    res.json(500).status({ message: error.message });
  }
});

//product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
  },
  category: {
    type: String,
  },
});

export const Products = mongoose.model("Products", productSchema);

// implement search filter

//search api query
app.get("/users", async(req, res) => {
    
    try {
        const {category} = req.query;
        const search = await Products.find({category});
        res.json(200).status(search);
    } catch (error) {
        res.json(500).status({ message: error.message });
    }
})

/// react code
import { useState, useEffect } from "react";

const [user, setUser] = useState([]);

useEffect(() => {
    fetch("url link"), {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
        // req.body = json.stringify()
    }
    .then((res) => res.json())
    .then((data) => setUser(data))
    .catch((err) => console.log(err));

});


