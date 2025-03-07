
async function cadastrar() {

      const placa = document.getElementById('placa').value;
      const modelo = document.getElementById('modelo').value;
      const cor = document.getElementById('cor').value;
      const dono = document.getElementById('dono').value;

      if (!placa || !cor || !modelo || !dono) {
        alert('Preencha todos os campos!');
        return;
    }

      const response = await fetch('http://localhost:3002/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ placa, modelo , cor,dono  })
      });

      const result = await response.json();

      if (result.success) {
        alert("cadastro bem-sucedido!");
        window.location.href = "listar.html";
      } else {
        alert("Usuário ou senha incorretos!");
      }

};

document.getElementById('cadastrar').addEventListener('click', cadastrar);