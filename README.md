# Dadinhos - Ficha de Personagem

![Ficha de Personagem](https://img.shields.io/badge/status-concluído-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Ficha de personagem interativa para RPG, com funcionalidade de exportação para PDF.

## Sobre o Projeto:

É uma ficha de personagem para o sistema de rpg "dadinhos" desenvolvida para facilitar a criação dos personagens.

### Funcionalidades:

- Preenchimento completo de dados do personagem como: Atributos (Força, Carisma, Inteligência, Velocidade), sistema de vida (Atual/Total), etc.
- upload de imagem do personagem (suporte para PNG, JPEG e WebP).
- Pré-visualização automática
- Equipamentos com ícones
- Exportação para PDF

## Como Usar?

### Acesse Online

O projeto está disponível em: https://github.com/MariaEduardaLourenco/ficha-personagem

### Uso Local

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/ficha-personagem.git
```

2. Abra o arquivo `ficha-personagem.html` no seu navegador

3. Preencha os campos da ficha

4. Clique em "Criar personagem" para gerar o PDF

## Configurações de Impressão

⚠ **IMPORTANTE - Configurações obrigatórias para impressão:**

### Para gerar o PDF corretamente, configure:

- Layout: Retrato
- Tamanho: A4
- Escala: 120% (MUITO IMPORTANTE)!! essencial para preencher toda a página.
- Margens: Nenhuma (0)
- Cabeçalho e Rodapé: Desabilitados

# ficha-personagem

## Estrutura do Projeto

**ficha-personagem/**
- ficha-personagem.html
- ficha-personagem.css
- contorno-do-cubo-de-dados.png
- **icones/**
  - amuleto.png
  - baralho.png
  - carvao.png
  - corda.png
  - escudo.png
  - gaze.png
  - mais-leve.png
  - martelo.png
  - pa.png
  - pocao-magica.png
  - espada.png
  - mapa.png
  - cruz.png
  - licor.png
  - espelho.png
  - saco-de-pao.png
- README.md

## Responsividade
O projeto se adapta a Desktop, Tablet e celular.

## Personalização

### Adicionar novos ícones:

1. Adicione a imagem na pasta `icones/`
2. No JavaScript, adicione ao array `iconesDisponiveis`:

```javascript
{ nome: 'Item', arquivo: 'item.png' }
```

### Ajustar layout do PDF:

No `@media print`, modifique as propriedades CSS conforme necessário.

- **Autor:** Maria Eduarda Lourenço.
- **Email:** mariaedulourenconascimento@gmail.com.
- **GitHub:** @MariaEduardaLourenco (https://github.com/MariaEduardaLourenco)

[Poppins Font](https://fonts.google.com/specimen/Poppins) - Fonte utilizada
[Flaticon](https://www.flaticon.com/) - Ícones utilizados

Se este projeto te ajudou, não esqueça de dar uma estrela!
```
