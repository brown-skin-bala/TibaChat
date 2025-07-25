const FAQ = require('../models/FAQ');

exports.addFAQ = async (req, res, next) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' });
    }
    const faq = new FAQ({ question, answer });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    next(error);
  }
};

exports.getFAQs = async (req, res, next) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    next(error);
  }
}; 