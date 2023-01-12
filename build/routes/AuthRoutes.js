"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { loginUser, registerUser } = require('../controllers/AuthControllers');
router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports = router;