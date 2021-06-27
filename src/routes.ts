import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAutenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", ensureAutenticated, ensureAdmin, createTagController.handle);
router.post("/compliment", complimentController.handle)
router.post("/login", authenticateUserController.handle);
router.get("/users/compliments/send", ensureAutenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAutenticated, listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAutenticated, listTagsController.handle)
router.get("/users", ensureAutenticated, listUsersController.handle)


export { router };
