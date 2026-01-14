# 🎓 Sistema de Avaliação do Aluno

Projeto desenvolvido em **JavaScript** com foco em lógica de programação, manipulação do DOM e eventos, simulando um sistema real de avaliação de alunos.

---

## 📌 Sobre o projeto

O sistema recebe a **nota** e a **frequência** do aluno(a), com base em regras pré-definidas, retorna a situação final:

- ✅ **Aprovado**
- ⚠️ **Recuperação**
- ❌ **Reprovado**
- 🚫 **Dados inválidos**

Além do resultado textual, o sistema também altera o **visual da interface**, tornando a experiência mais clara e intuitiva para o usuário.

---

## 📷 Screenshots

### Tela inicial
![Tela inicial](/assets/tela-inicial.png)

### Resultado aprovado
![Aprovado](/assets/resultado-aprovado.png)

### Resultado recuperação
![Recuperação](/assets/resultado-recuperacao.png)

### Resultado reprovado
![Reprovado](/assets/resultado-reprovado.png)

### Dados inválidos
![Dados inválidos](/assets/dados-invalidos.png)

---

## ⚙️ Funcionalidades

- Entrada de nota (0 a 10)
- Entrada de frequência (0 a 100%)
- Validação de dados inválidos
- Lógica condicional com regras reais
- Manipulação do DOM
- Feedback visual com cores
- Uso de eventos com `addEventListener`

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
  - DOM
  - Eventos
  - Condições (`if / else`)

---

## 🧠 Regras de avaliação

- **Nota < 4** ou **frequência < 75%** → ❌ Reprovado  
- **Nota entre 4 e 6.9** e **frequência ≥ 75%** → ⚠️ Recuperação  
- **Nota ≥ 7** e **frequência ≥ 75%** → ✅ Aprovado  
- Valores fora do intervalo permitido → 🚫 Dados inválidos  

---

## 🚀 Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/borgesfariasj2-create/Primeiro-projeto-em-JavaScript.git
