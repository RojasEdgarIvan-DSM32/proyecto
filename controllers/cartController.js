const Cart = require('../models/Cart');

exports.read = async (req, res) => {
  try {
    const items = await Cart.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};

exports.readOne = async (req, res) => {
  const { id } = req.body;

  try {
    const Cart = await Cart.findByPk(id);
    if (!Cart) return res.status(404).json({ message: 'Producto No Encontrado' });

    res.json(Cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
}

exports.create = async (req, res) => {
  const { pr_name, description, price } = req.body;

  try {
    const newCart = await Cart.create(newCart({ pr_name, description, price }));

    res.status(201).json({ message: 'Producto Creado Correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { pr_name, description, price } = req.body;

  try {
    const Cart = await Cart.findByPk(id);
    if (!Cart) return res.status(404).json({ message: 'Producto No Encontrado' });
    
    if (pr_name) Cart.pr_name = pr_name;
    if (description) Cart.description = description;
    if (price) Cart.price = price;
    await Cart.save();

    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await Cart.findByPk(id);
    if (!cartItem) return res.status(404).json({ message: 'Producto No Encontrado' });

    await cartItem.destroy();

    res.json({ message: 'Producto Eliminado Correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};
