const BASE_URL = '/api/scores';

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(score) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(score)
  }).then(res => res.json());
}

export default {
  create,
  index
}