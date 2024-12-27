const express = require('express');
const route = express.Router();
const Task = require('../models/taskModel'); 

route.get('/tasks',(req,res)=>{
    //FIND AY OBJET ST3MLNAH TGAD BL MODEL TASK /// {}n9der ndir wahd l conidtion
 Task.find({}) .then(resultat=>{
    res.send(resultat)})
})
route.post('/tasks',  (req, res) => {
        console.log('Requête reçue :', req.body);
        const { name, description, status } = req.body;
        // Create a new task
        const newTask = new Task({
            name,description,status: status || false,});
        const savedTask =  newTask.save();
        console.log('Tâche sauvegardée :', savedTask);
        // Return the saved task
        res.status(201).json(savedTask);
    
});
route.delete('/tasks/:id', async (req, res) => {
   await Task.findByIdAndDelete(req.params.id);
       
        res.send( "La tâche a été supprimée avec succès");
   
});

route.put('/tasks/:id', async (req, res) => {
    
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { name: req.body.name },
            { new: true } )
        if (!updatedTask) {
            return res.status(404).send({ message: "La tâche n'a pas été trouvée" });
        }
        res.send("Mise à jour effectuée avec succès");
   
});



module.exports = route;
