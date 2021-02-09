const Score = require('../models/score');

async function create(req, res) {
  const score = await Score.create(req.body)
  res.json(score);
}

async function index(req, res) {
  const scores = await Score.find({})
    .sort({numGuesses: 1, seconds: 1})
    .limit(req.query.limit || 20);
  res.json(scores);
}

module.exports = {
  create,
  index
};

