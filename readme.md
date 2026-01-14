# 🎓 Sistema de Avaliação do Aluno

Projeto desenvolvido em **JavaScript** com foco em lógica de programação, manipulação do DOM e eventos, simulando um sistema real de avaliação de alunos.

---

## 📌 Sobre o projeto

O sistema recebe a **nota** e a **frequência** do aluno e, com base em regras pré-definidas, retorna a situação final:

- ✅ **Aprovado**
- ⚠️ **Recuperação**
- ❌ **Reprovado**
- 🚫 **Dados inválidos**

Além do resultado textual, o sistema também altera o **visual da interface** para tornar a experiência mais clara e intuitiva.

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
