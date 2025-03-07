document.getElementById("buscar").addEventListener("click", async () => {
  const placa = document.getElementById("placaBusca").value;
  const resultadoDiv = document.getElementById("resultado");

  // Limpa resultados anteriores
  resultadoDiv.innerHTML = "";

  if (!placa) {
    alert("Por favor, insira uma placa.");
    return;
  }

  try {
    // Faz a requisição POST para a API
    const resposta = await fetch("http://localhost:3002/buscar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ placa })
    });

    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(erro.mensagem || "Erro ao buscar veículo.");
    }

    // Converte a resposta para JSON
    const veiculo = await resposta.json();

    // Exibe os detalhes do veículo no HTML
    resultadoDiv.innerHTML = `
      <p><strong>Placa:</strong> ${veiculo.placa}</p>
      <p><strong>Cor:</strong> ${veiculo.cor}</p>
      <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
      <p><strong>Dono:</strong> ${veiculo.dono}</p>
    `;

  } catch (erro) {
    console.error("Erro:", erro);
    resultadoDiv.innerHTML = `<p style="color: red;">${erro.message}</p>`;
  }
});

