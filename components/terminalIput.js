    // Script para o efeito de digitação
        const text = "hello, world";
        const typedTextElement = document.getElementById('typed-text');
        let i = 0;
        const speed = 150; // Velocidade de digitação em milissegundos

        function typeWriter() {
            if (i < text.length) {
                typedTextElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Adiciona o cursor piscando após a digitação
                typedTextElement.classList.add('typing-done');
            }
        }

        // Inicia a digitação quando a página carrega
        window.onload = typeWriter;