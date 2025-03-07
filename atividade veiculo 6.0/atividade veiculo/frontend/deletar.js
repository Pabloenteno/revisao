document.getElementById("deletar").addEventListener("click", async () => {
    const placa = document.getElementById("placaBusca").value;

    const resposta = await fetch("http://localhost:3002/deletar", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ placa })
      });
  
      const result = await resposta.json();

      if (result.success) {
        alert("Veiculo excluiodo");
      } else {
        alert("placa não encontrada ou incorreta!");
      }

});

document.getElementById("editar").addEventListener("click", async () => {
    const placa = document.getElementById("placaBusca2").value.trim();
    const placaNova = document.getElementById("placaNova").value.trim();

    // Verifica se os campos foram preenchidos
    if (!placa || !placaNova) {
        alert("Por favor, preencha os dois campos antes de editar.");
        return;
    }

    try {
        const resposta = await fetch("http://localhost:3002/editar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ placa, placaNova })
        });

        const result = await resposta.json();

        if (resposta.ok) {
            alert(result.mensagem); // Exibe a mensagem vinda da API
        } else {
            alert(result.mensagem || "Erro ao editar o veículo.");
        }
    } catch (erro) {
        console.error("Erro na requisição:", erro);
        alert("Erro ao conectar-se ao servidor. Verifique sua conexão.");
    }
});


