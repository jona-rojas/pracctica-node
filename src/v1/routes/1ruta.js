import { Router } from "express";
import { getAllWorkouts, getOneWorkout } from '../../controllers/control.js';
const router = Router();

router
    .get("/", getAllWorkouts)

    .get("/:id", getOneWorkout)

    /*.post("/", createWorkout)

    .patch("/:id", updateOneWorkout)

    .delete("/:id", deleteOneWorkout)*/

export default router

