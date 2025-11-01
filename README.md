# Automação de Testes E2E - SauceDemo

Este projeto contém a automação de testes end-to-end para o site [SauceDemo](https://www.saucedemo.com/), desenvolvido como parte de uma avaliação técnica para vaga de QA.  
Os testes foram implementados utilizando o Playwright Test com TypeScript.

---

## Tecnologias utilizadas

- Node.js  
- Playwright Test  
- TypeScript  

---

## Funcionalidades testadas

Foram automatizados testes para os seguintes fluxos:

| Cenário | Descrição |
|----------|------------|
| Login | Validação de login com sucesso e falha |
| Carrinho | Adição e remoção de produtos do carrinho |
| Finalização de compra | Fluxo completo de checkout até a tela de confirmação |

As validações incluem:
- Mensagens de erro de login  
- Exibição correta de produtos  
- Atualização do contador do carrinho  
- Cálculo do valor total com taxa de 8%  
- Mensagem final de confirmação de pedido  

---

## Estrutura do Projeto

```
tests/
 ├─ CN1-login/
        └─ login.spec.ts
 ├─ CN2-remover-produtos/
        └─  remover-produtos.spec.ts
 └─  CN3-finalizar-compra/
        └─ finalizar-compra.spec.ts
.gitignore
package.json
playwright.config.ts
README.md
```

---

## Como executar os testes

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar os testes

Para executar os testes no modo **padrão (headless)**:  
```bash
npx playwright test
```

Ou para executar os testes com o **navegador aberto (headed)**:  
```bash
npx playwright test --headed
```


### 3. Visualizar relatório

```bash
npx playwright show-report
```

---

Projeto desenvolvido por **Francisco Alves** para fins de avaliação técnica para vaga de **QA Júnior**.
