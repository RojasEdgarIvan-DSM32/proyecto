const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener detalles del usuario
 *     description: Obtener detalles de un usuario por nombre de usuario y contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Detalles del usuario recuperados exitosamente
 *       400:
 *         description: Nombre de usuario o contraseña incorrecta
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: ERROR - Servidor
 */
router.get('/', userController.read);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crear un nuevo usuario con nombre, usuario y contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *       400:
 *         description: Usuario ya existe
 *       500:
 *         description: ERROR - Servidor
 */
router.post('/', userController.create);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Actualizar datos del usuario
 *     description: Actualizar detalles de un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: ERROR - Servidor
 */
router.put('/:id', userController.update);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: ERROR - Servidor
 */
router.delete('/:id', userController.delete);

module.exports = router;
