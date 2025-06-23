// js/githubIcon.js

// Variável que armazena o HTML do ícone SVG com o link
const githubSvgIconHTML = `
    <a href="https://github.com/nunes-francisco" target="_blank" rel="noopener noreferrer">
            <i class="si si-github"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.09.8 2.2 0 1.59-.01 2.88-.01 3.27 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12c0-6.28-5.23-11.5-11.5-11.5z"/>
        </svg></i>Visite meu perfil
        </a>
        <a href="https://github.com/nunes-francisco?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i class="si si-github"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.09.8 2.2 0 1.59-.01 2.88-.01 3.27 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12c0-6.28-5.23-11.5-11.5-11.5z"/>
        </svg></i>Meus Repositórios
        </a>
`;

// Função para inserir o ícone em um elemento HTML
function insertGithubIcon(containerId) {
    const container = document.getElementById(containerId);
    const containerClass = container ? container.className : '';
    if (container) {
        container.innerHTML = githubSvgIconHTML;
        // Opcional: exemplo de como manipular o link após a inserção
        const githubLink = container.querySelector('a');
        if (githubLink) {
            // Você pode até passar parâmetros para esta função para tornar o URL dinâmico
            // Por exemplo: githubLink.href = `https://github.com/${username}`;
        }
    } else {
        console.warn(`Container com ID '${containerId}' não encontrado para inserir o ícone do GitHub.`);
    }
}