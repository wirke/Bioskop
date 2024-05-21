var express = require('express');
var router = express.Router();
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { protect } = require('../middleware/authMiddleware');

// Ruta za dobijanje korisnika po ID-u
router.get('/:id', async (req, res) =>{
  try{
    const user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({message: "User not found"});
// Pregled profila korisnika
router.get('/profile', protect, async (req, res) => {
    res.json(req.user);
});

// Kreiranje korisnika
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
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
// Pregled korisnika po ID-u
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta za dodavanje korisnika
router.post('/', async (req, res) => {
  try{
    const user = await User.create(req.body);
  } catch(error){
    res.status(400).json({message: error.message});
  }
// Pregled svih korisnika
router.get('/', protect, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta za brisanje korisnika
// Brisanje korisnika
router.delete('/:id', async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(404).json({message: "User not found"});
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    res.json({message: "User deleted successfully"});
  } catch(error){
    res.status(400).json({message: error.message})
  }
});

// Ruta za izmenu korisnika
// Izmena korisnika
router.put('/:id', async (req, res) => {
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!user){
      return res.status(404).json({message: "User not found"});
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    res.json(user);
  } catch(error){
    res.status(400).json({message: error.message})
  }
});

module.exports = router;
