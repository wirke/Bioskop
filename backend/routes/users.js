var express = require('express');
var router = express.Router();
const User = require('../models/user');

// Ruta za dobijanje korisnika po ID-u
router.get('/:id', async (req, res) =>{
  try{
    const user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    res.json(user);
    }catch(error){
      res.status(500).json({message: error.message});
  }
});

// Ruta za dobijanje svih korisnika
router.get('/', async (req, res) =>{
  try {
    const user = await User.find();
    res.json(user);
  }catch (error) {
    res.status(500).json({message: error.message});
  }
});

// Ruta za dodavanje korisnika
router.post('/', async (req, res) => {
  try{
    const user = await User.create(req.body);
  } catch(error){
    res.status(400).json({message: error.message});
  }
});

// Ruta za brisanje korisnika
router.delete('/:id', async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    res.json({message: "User deleted successfully"});
  } catch(error){
    res.status(400).json({message: error.message})
  }
});

// Ruta za izmenu korisnika
router.put('/:id', async (req, res) => {
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    res.json(movie);
  } catch(error){
    res.status(400).json({message: error.message})
  }
});

module.exports = router;
