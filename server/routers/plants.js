const { Router } = require("express");
const plantList = require("../models/Plant");
const router = Router();

// create, read, update, delete : CRUD

// Create record in MongoDB
router.post("/", (request, response) => {
  const newPlant = new plantList.model(request.body);
  newPlant.save((err, plantList) => {
    return err ? response.sendStatus(500).json(err) : response.json(plantList);
  });
});

// reads all the pizzas/ in use
router.get("/", (request, response) => {
  // curly brackets below allow narrowing selection
  plantList.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// reads pizza by certain ID/ in use
router.get("/:id", (request, response) => {
  plantList.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  plantList.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// router.put("/:id", (request, response) => {
//   const body = request.body;
//   pizza.model.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         crust: body.crust,
//         cheese: body.cheese,
//         sauce: body.sauce,
//         toppings: body.toppings
//       }
//     },
//     (error, data) => {
//       if (error) return response.sendStatus(500).json(error);
//       return response.json(request.body);
//     }
//   );
// });

module.exports = router;
