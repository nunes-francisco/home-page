// js/main.js

// Importa a função de githubIcon.js (no navegador, isso é feito pela ordem dos scripts no HTML)
// Em ambientes modernos (com bundlers como Webpack/Vite), você usaria import:
// import { insertGithubIcon } from './githubIcon.js';

// Função para inicializar o aplicativo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado e analisado.');

    // Chama a função para inserir o ícone do GitHub no container específico
    // Certifique-se de que insertGithubIcon esteja disponível globalmente ou importado
    if (typeof insertGithubIcon !== 'undefined') {
        insertGithubIcon('githubIconContainer');

        // Exemplo de manipulação adicional ou lógica de aplicação
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            pageTitle.textContent = "Meu Projeto com JS Organizado!";
        }
    } else {
        console.error("Função 'insertGithubIcon' não encontrada. Verifique a ordem dos scripts.");
    }
});