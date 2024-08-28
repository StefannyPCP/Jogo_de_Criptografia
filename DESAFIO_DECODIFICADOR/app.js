// Validação do texto para permitir apenas letras minúsculas sem acentos
function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
}

// Função para criptografar o texto
function criptografar() {
    const texto = document.getElementById("input-text").value;
    document.getElementById("input-text").value = ''; // Limpa o campo de entrada

    if (!validarTexto(texto)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }

    const textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("output-text").textContent = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
    const textoCriptografado = document.getElementById("output-text").textContent;

    if (!validarTexto(textoCriptografado)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }

    const textoDescriptografado = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    // Exibir o texto descriptografado
    document.getElementById("output-text").textContent = textoDescriptografado;
}


// Vinculação dos botões às funções
document.getElementById("criptografar-btn").addEventListener("click", criptografar);
document.getElementById("descriptografar-btn").addEventListener("click", descriptografar);