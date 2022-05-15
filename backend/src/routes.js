import { Router } from "express"
import multer from "multer"
import uploadConfig from "./config/upload.js"
import DashboardController from "./controllers/DashboardController.js"

import SessionController from "./controllers/SessionController.js"
import SpotController from "./controllers/SpotController.js"

const routes = Router()
const upload = multer(uploadConfig)

routes.post("/sessions", SessionController.store)

routes.get("/spots", SpotController.index)
routes.post("/spots", upload.single("thumbnail"), SpotController.store)

routes.get("/dashboard", DashboardController.show)

export default routes
