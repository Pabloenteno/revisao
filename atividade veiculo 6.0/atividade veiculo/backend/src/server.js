const express = require('express');
const cors = require('cors');
const connection = require('./db-config'); 

const app = express();

app.use(cors());
app.use(express.json());

const port = 3002;

app.post('/cadastrar', (req, res) => {
    const {placa, modelo ,cor ,dono} = req.body

    const query = 'insert into veiculos (placa, modelo, cor, dono) values (?,?,?,?)'

    connection.query(query, [placa, modelo ,cor ,dono], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao cadastrar veiculo' });
          }
          res.json({ success: true, message: 'veiculo cadastrado com sucesso!'});
    })

})

app.post("/buscar", (req, res) => {
    const { placa } = req.body;
  
    const query = "SELECT * FROM veiculos WHERE placa = ?";
  
    connection.query(query, [placa], (err, resultados) => {
      if (err) {
        console.error("Erro na consulta ao banco de dados:", err);
        return res.status(500).json({ mensagem: "Erro interno no servidor." });
      }
  
      if (resultados.length === 0) {
        return res.status(404).json({ mensagem: "Veículo não encontrado." });
      }
  
      res.json(resultados[0]);
    });
  });
  
app.delete("/deletar" , (req, res) =>{
  const { placa } = req.body;

  if (!placa) {
    return res.status(400).json({ mensagem: "Placa do veículo é obrigatória." });
  }

  const query = "delete from veiculos where placa = ?";

  connection.query(query, [placa], (err, resultados) => {
    if (err) {
      console.error("Erro ao excluir veículo:", err);
      return res.status(500).json({ mensagem: "Erro interno no servidor." });
    }

    if (resultados.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Veículo não encontrado." });
    }

    res.json({ success: true, mensagem: "Veículo excluído com sucesso!" });
  });
});  

app.put("/editar", (req, res) => {
  let { placa, placaNova } = req.body;

  if (!placa || !placaNova) {
    return res.status(400).json({ mensagem: "Placa antiga e nova são obrigatórias." });
  }

  // Normalizando as placas para evitar problemas de case-sensitive
  placa = placa.toUpperCase();
  placaNova = placaNova.toUpperCase();

  // Primeiro, verifica se a placa existe
  const checkQuery = "SELECT * FROM veiculos WHERE placa = ?";
  connection.query(checkQuery, [placa], (err, resultados) => {
    if (err) {
      console.error("Erro ao verificar veículo:", err);
      return res.status(500).json({ mensagem: "Erro interno no servidor." });
    }

    if (resultados.length === 0) {
      return res.status(404).json({ mensagem: "Veículo não encontrado." });
    }

    // Se a placa existe, então faz o update
    const updateQuery = "UPDATE veiculos SET placa = ? WHERE placa = ?";
    connection.query(updateQuery, [placaNova, placa], (err, updateResultados) => {
      if (err) {
        console.error("Erro ao editar veículo:", err);
        return res.status(500).json({ mensagem: "Erro interno no servidor." });
      }

      res.json({ success: true, mensagem: "Veículo editado com sucesso!" });
    });
  });
});
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));