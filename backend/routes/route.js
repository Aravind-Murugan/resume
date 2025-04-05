const express = require("express");
const router = express.Router();

const { defaultAPIPageFunction } = require("../controllers/backendController")

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Retrieve a welcome message
 *     description: Returns a welcome message from the backend application.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Message:
 *                   type: string
 */
router.route("/hello").get(defaultAPIPageFunction);

module.exports = router;
