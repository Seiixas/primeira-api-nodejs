const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 01',
    'Projeto 02'
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 01',
    'Projeto 02',
    'Projeto 03'
  ]);
});

app.put('/projects/:id', (request, response) => {
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