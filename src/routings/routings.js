const express = require("express");
const router = new express.Router();

// importing the model
const StudentsData = require("../db/schema-model");

//POST
router.post("/students-data", async (req, res) => {
    try {
        console.log(req.body);
        const studentJsObject = req.body;
        const document = new StudentsData(studentJsObject);
        const dataObject = await document.save();
        res.send(dataObject);
    }
    catch (error) {
        res.status(400).send(`error:${error}`);
    }

});

//GET
router.get("/students-data", async (req, res) => {
    try {
        console.log(req.body);
        const allData = await StudentsData.find();
        console.log(allData);
        res.send(allData);
    }
    catch (error) {
        res.status(400).send(`error:${error}`);
    }

});

//GET (with specific id of each document)
router.get("/students-data/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const specificData = await StudentsData.find({ _id });

        if (specificData.length > 0) {
            res.send(specificData);
        } else {
            res.status(404).send("Id not found");
        }
    } catch (error) {
        res.status(500).send(`error: ${error}`);
    }
});

//PATCH
router.patch("/students-data/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedData = await StudentsData.findByIdAndUpdate({ _id }, req.body, { new: true });
        console.log(updatedData);

        if (updatedData) {
            res.send(updatedData);
        } else {
            res.status(404).send("Id not found");
        }
    } catch (error) {
        res.status(500).send(`error: ${error}`);
    }

});

//DELETE
router.delete("/students-data/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedData = await StudentsData.findByIdAndDelete({ _id });
        console.log(deletedData);

        if (deletedData) {
            res.send(deletedData);
        } else {
            res.status(404).send("Id not found");
        }
    } catch (error) {
        res.status(500).send(`error: ${error}`);
    }

});




//export
module.exports = router;