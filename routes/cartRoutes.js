const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Obtener todos los productos en el carrito
 *     description: Recuperar todos los productos del carrito
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
router.get('/', cartController.read);

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Añadir un nuevo producto al carrito
 *     description: Añadir un nuevo producto al carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               product:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto agregado al carrito exitosamente
 *       500:
 *         description: ERROR - Servidor 
 */
router.post('/', cartController.create);

/**
 * @swagger
 * /cart/{id}:
 *   get:
 *     summary: Obtener un producto del carrito por ID
 *     description: Obtener un producto del carrito por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del artículo a recuperar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: ERROR - Servidor 
 */
router.get('/:id', cartController.readOne);

/**
 * @swagger
 * /cart/{id}:
 *   put:
 *     summary: Actualizar un producto en el carrito por ID
 *     description: Actualizar un producto en el carrito por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: ERROR - Servidor 
 */
router.put('/:id', cartController.update);

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Eliminar un artículo del carrito por ID
 *     description: Eliminar un artículo del carrito por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       404:
 *         description: Porducto no encontrado
 *       500:
 *         description: ERROR - Servidor 
 */
router.delete('/:id', cartController.delete);

module.exports = router;
