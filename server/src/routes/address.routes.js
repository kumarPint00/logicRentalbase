import { Router } from "express";
import { createAddress, getAddressById, updateAddressById, deleteAddressById, getAllAddress } from '../controllers/address.controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route('/createAddress').post( createAddress)
router.route('/getAddressById/:id').get(getAddressById)
router.route('/getAllAddress').get( getAllAddress)
router.route('/updateAddressById/:id').patch( updateAddressById)
router.route('/deleteAddressById/:id').delete( deleteAddressById)

export default router