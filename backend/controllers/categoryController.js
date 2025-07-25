const Category = require('../models/Category');

exports.addCategory = async (req, res, next) => {
  try {
    const { name, icon } = req.body;
    if (!name || !icon) {
      return res.status(400).json({ error: 'Name and icon are required' });
    }
    const category = new Category({ name, icon });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
}; 