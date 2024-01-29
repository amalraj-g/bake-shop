import express from 'express';
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUsers,
    getUserByID,
    updateUser,
  } from '../controllers/userControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js'
import { registerValidation } from '../middleware/validationMiddleware.js'

const router = express.Router();

router.route('/').post(registerValidation, registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUsers).get(protect, admin, getUserByID).put(protect, admin, updateUser);

export default router;