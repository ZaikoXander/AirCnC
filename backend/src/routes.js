import { Router } from "express"
import multer from "multer"

import uploadConfig from "./config/upload.js"

import SessionController from "./controllers/SessionController.js"
import SpotController from "./controllers/SpotController.js"
import DashboardController from "./controllers/DashboardController.js"
import BookingController from "./controllers/BookingController.js"

const routes = Router()
const upload = multer(uploadConfig)

routes.post("/sessions", SessionController.store)

routes.get("/spots", SpotController.index)
routes.post("/spots", upload.single("thumbnail"), SpotController.store)

routes.get("/dashboard", DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

export default routes
