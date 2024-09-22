// Declare as variáveis fora das funções, se ainda não estiverem definidas
const atividades = [];
const notas = [];

document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;

    // Adiciona a nova linha na tabela de contatos
    document.getElementById('tabela-contatos').appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById('form-contato').reset();
});

function salvarEmPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("Lista de Contatos", 20, 10);
    
    const tabela = document.querySelector("table");
    const linhas = tabela.querySelectorAll("tr");
    
    linhas.forEach((linha, index) => {
        const colunas = linha.querySelectorAll("td, th");
        colunas.forEach((coluna, colIndex) => {
            doc.text(coluna.innerText, 20 + (colIndex * 40), 20 + (index * 10));
        });
    });

    doc.save("contatos.pdf");
}

function resetarLista() {
    // Limpa os arrays
    atividades.length = 0;
    notas.length = 0;

    // Limpa o conteúdo da tabela
    const corpoTabela = document.getElementById('tabela-contatos');
    corpoTabela.innerHTML = '';

    // Limpa os campos do formulário
    document.getElementById('form-contato').reset();
}



