
        document.getElementById('botaoLoginLink').addEventListener('click', function (event) {
            event.preventDefault();
            const formulario = document.getElementById('formularioCadastro');
            formulario.style.display = 'block'; // ou 'flex' se você quiser estilizar
        });
function fazerCadastro() {
    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const imagem = document.getElementById('imagemPerfil').files[0];

    if (!nome || !email || !senha || !imagem) {
        alert("Por favor, preencha todos os campos e envie uma imagem.");
        return;
    }

    // Leitura da imagem para substituir a imagem padrão
    const leitor = new FileReader();
    leitor.onload = function (e) {
        const fotoUsuario = document.getElementById('foto-usuario');
        fotoUsuario.src = e.target.result; // Substitui a imagem
    };
    leitor.readAsDataURL(imagem); // Converte a imagem para Base64

    alert("Cadastro realizado com sucesso!");

    // Limpa os campos
    document.getElementById('nomeUsuario').value = '';
    document.getElementById('emailUsuario').value = '';
    document.getElementById('senhaUsuario').value = '';
    document.getElementById('imagemPerfil').value = '';

    // Esconde o formulário
    document.getElementById('formularioCadastro').style.display = 'none';
}
// Mostrar a pré-visualização da imagem
document.getElementById('imagemPerfil').addEventListener('change', function () {
    const arquivo = this.files[0];
    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function (e) {
            const preview = document.getElementById('previewImagem');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        leitor.readAsDataURL(arquivo);
    }
});
function cancelarCadastro() {
    document.getElementById('formularioCadastro').style.display = 'none';
}
    
