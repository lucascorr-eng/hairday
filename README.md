# ✂️ Hairday - Sistema de Agendamento

O **Hairday** é uma aplicação web para gerenciamento de agendamentos de cortes e serviços para salões de beleza ou barbearias. O projeto foi desenvolvido com foco em JavaScript puro (Vanilla JS), manipulação avançada do DOM, consumo de APIs assíncronas e estruturação de ambiente de desenvolvimento com ferramentas modernas de empacotamento (*tooling*).

---

## 🚀 Tecnologias e Ferramentas

O projeto utiliza o ecossistema moderno do ecossistema JavaScript para garantir performance, retrocompatibilidade e organização:

- **JavaScript (ES6+)**: Lógica da aplicação e manipulação dinâmica do DOM.
- **Webpack**: Utilizado como *bundler* para empacotar módulos JS, arquivos CSS e assets em arquivos otimizados para produção.
- **Webpack Dev Server**: Ambiente de desenvolvimento local com suporte a *Hot Module Replacement* (HMR).
- **Babel**: Transpilador utilizado para converter código JS moderno em versões compatíveis com navegadores legados.
- **Day.js**: Biblioteca leve utilizada para a manipulação, cálculo e formatação de datas e horários.
- **JSON Server**: API REST simulada localmente para persistência de dados (criação, listagem e exclusão de agendamentos).

---

## 🛠️ Funcionalidades

- **Filtro por Data**: Listagem dinâmica de agendamentos com base na data selecionada no calendário.
- **Divisão por Períodos**: Organização automática dos agendamentos em blocos visuais: Manhã (até 12h), Tarde (12h às 18h) e Noite (após 18h).
- **Agendamento Inteligente**:
  - Seleção visual e interativa de horários disponíveis.
  - Validação de formulário (bloqueio de envios sem nome ou sem horário selecionado).
  - Persistência automática no banco de dados via requisições `POST`.
- **Cancelamento**: Remoção de agendamentos em tempo real integrada à API via requisições `DELETE`.

---

## 📁 Estrutura do Projeto

A arquitetura do projeto foi dividida seguindo boas práticas de modularização:

```text
hairday/
├── src/
│   ├── assets/          # Ícones, imagens e vetores (SVG)
│   ├── modules/         # Lógica visual e manipulação do DOM (Formulários, Listas)
│   ├── services/        # Integração com a API (Fetch, Configurações de rotas)
│   ├── styles/          # Arquivos de estilização CSS
│   └── main.js          # Ponto de entrada (Entry) do Webpack
├── webpack.config.js    # Configuração de loaders, plugins e saídas do Webpack
├── package.json         # Gerenciamento de dependências e scripts do NPM
└── server.json          # Banco de dados local simulado (JSON Server)
