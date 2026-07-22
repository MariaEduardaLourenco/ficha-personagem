const iconesDisponiveis = [
    { nome: 'Amuleto', arquivo: 'amuleto.png' },
    { nome: 'Baralho', arquivo: 'baralho.png' },
    { nome: 'Carvão', arquivo: 'carvao.png' },
    { nome: 'Corda', arquivo: 'corda.png' },
    { nome: 'Escudo', arquivo: 'escudo.png' },
    { nome: 'Gaze', arquivo: 'gaze.png' },
    { nome: 'Isqueiro', arquivo: 'mais-leve.png' },
    { nome: 'Martelo', arquivo: 'martelo.png' },
    { nome: 'Pá', arquivo: 'pa.png' },
    { nome: 'Poção P', arquivo: 'pocao-magica.png' },
    { nome: 'Espada', arquivo: 'espada.png' },
    { nome: 'Mapa', arquivo: 'mapa.png' },
    { nome: 'Cruz', arquivo: 'cruz.png' },
    { nome: 'Licor', arquivo: 'licor.png' },
    { nome: 'Espelho', arquivo: 'espelho.png' },
    { nome: 'Pão', arquivo: 'saco-de-pao.png' }
];

function popularSelects() {
    for (let i = 1; i <= 4; i++) {
        const select = document.getElementById(`equipamento_${i}`);
        if (!select) continue;
        
        select.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Slot';
        select.appendChild(defaultOption);
        
        iconesDisponiveis.forEach(icone => {
            const option = document.createElement('option');
            option.value = icone.arquivo;
            option.textContent = icone.nome;
            select.appendChild(option);
        });
    }
}

function selecionarIcone(id) {
    const select = document.getElementById(`equipamento_${id}`);
    const arquivo = select.value;
    
    const container = select.parentElement;
    const existingImg = container.querySelector('.icone-preview');
    if (existingImg) {
        existingImg.remove();
    }
    
    if (arquivo) {
        const icone = iconesDisponiveis.find(item => item.arquivo === arquivo);
        if (icone) {
            const img = document.createElement('img');
            img.src = `icones/${icone.arquivo}`;
            img.style.width = '24px';
            img.style.height = '24px';
            img.style.objectFit = 'contain';
            img.style.position = 'absolute';
            img.style.left = '8px';
            img.style.top = '50%';
            img.style.transform = 'translateY(-50%)';
            img.style.pointerEvents = 'none';
            img.className = 'icone-preview';
            
            container.style.position = 'relative';
            container.appendChild(img);
        }
    }
}

document.getElementById('foto').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fotoDiv = document.querySelector('.foto');
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.minHeight = '200px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '3px';
            img.style.border = '3px solid #6E6C67';
            img.style.boxSizing = 'border-box';
            img.style.flex = '1';
            
            const label = fotoDiv.querySelector('label');
            fotoDiv.innerHTML = '';
            fotoDiv.appendChild(label);
            fotoDiv.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

function validarFormulario() {
    const nome = document.getElementById('nome');
    const protecao = document.getElementById('protecao');
    const vida_atual = document.getElementById('vida_atual');
    const vida_total = document.getElementById('vida_total');
    const forca = document.getElementById('forca');
    const carisma = document.getElementById('carisma');
    const inteligencia = document.getElementById('inteligencia');
    const velocidade = document.getElementById('velocidade');
    const habilidade_tipo = document.getElementById('habilidade_tipo');
    const h_dado = document.getElementById('h_dado');
    const habilidade_nome = document.getElementById('habilidade_nome');
    const descricao = document.getElementById('descricao');
    const equipamento = document.getElementById('equipamento');

    if (nome.value.trim() === '') {
        alert('Preencha o Nome do personagem.');
        nome.focus();
        return false;
    }

    if (protecao.value === '' || parseInt(protecao.value) < 1 || parseInt(protecao.value) > 11) {
        alert('Proteção deve ser entre 1 e 11.');
        protecao.focus();
        return false;
    }

    if (vida_atual.value === '' || parseInt(vida_atual.value) < 0 || parseInt(vida_atual.value) > 30) {
        alert('Vida Atual deve ser entre 0 e 30.');
        vida_atual.focus();
        return false;
    }

    if (vida_total.value === '' || parseInt(vida_total.value) < 20 || parseInt(vida_total.value) > 30) {
        alert('Vida Total deve ser entre 20 e 30.');
        vida_total.focus();
        return false;
    }

    if (parseInt(vida_atual.value) > parseInt(vida_total.value)) {
        alert('Vida Atual não pode ser maior que Vida Total.');
        vida_atual.focus();
        return false;
    }

    const atributos = [
        { campo: forca, nome: 'Força' },
        { campo: carisma, nome: 'Carisma' },
        { campo: inteligencia, nome: 'Inteligência' },
        { campo: velocidade, nome: 'Velocidade' }
    ];

    let somaAtributos = 0;

    for (let attr of atributos) {
        const valor = parseInt(attr.campo.value) || 0;
        if (valor < 1 || valor > 3) {
            alert(`${attr.nome} deve ser entre 1 e 3.`);
            attr.campo.focus();
            return false;
        }
        somaAtributos += valor;
    }

    if (somaAtributos > 7) {
        alert(`A soma dos atributos não pode ser maior que 7. (Atual: ${somaAtributos})`);
        forca.focus();
        return false;
    }

    if (habilidade_tipo.value === '') {
        alert('Selecione o tipo de Habilidade.');
        habilidade_tipo.focus();
        return false;
    }

    if (h_dado.value === '') {
        alert('Selecione o dado da Habilidade.');
        h_dado.focus();
        return false;
    }

    if (habilidade_nome.value.trim() === '') {
        alert('Preencha o Nome da Habilidade.');
        habilidade_nome.focus();
        return false;
    }

    if (descricao.value.trim() === '') {
        alert('Preencha a Descrição do personagem.');
        descricao.focus();
        return false;
    }

    if (equipamento.value.trim() === '') {
        alert('Preencha a lista de Equipamento.');
        equipamento.focus();
        return false;
    }

    return true;
}

function gerarPDF() {
    if (!validarFormulario()) {
        return;
    }

    const btn = document.querySelector('button');
    const textoOriginal = btn.textContent;
    
    btn.textContent = 'Preparando PDF...';
    btn.disabled = true;
    
    document.body.classList.add('exportando-pdf');
    
    setTimeout(() => {
        window.print();
        
        setTimeout(() => {
            btn.textContent = textoOriginal;
            btn.disabled = false;
            document.body.classList.remove('exportando-pdf');
        }, 1000);
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    popularSelects();
});