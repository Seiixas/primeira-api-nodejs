const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 01',
    'Projeto 02'
  ]);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 01',
    'Projeto 02',
    'Projeto 03'
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  console.log(id);

  return response.json([
    'Projeto 01',
    'Projeto 02',
    'Projeto 06'
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 01',
    'Projeto 02',
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Back-end is running!');
});