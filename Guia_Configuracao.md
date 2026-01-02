# Guia de Configuração: GitHub Secrets e Token

Para que o formulário continue funcionando, você precisa configurar 3 itens de segurança.

## 1. Senha de App no Gmail
*(Permite o envio de e-mails)*

1.  Acesse sua conta Google: https://myaccount.google.com/
2.  Vá em **Segurança** > ative **Verificação em duas etapas**.
3.  Busque por **"Senhas de app"**. O Google vai pedir sua senha.
4.  Crie uma nova senha com o nome "Site Imobiliaria".
5.  **Copie a senha de 16 letras** gerada.

## 2. Configurar Segredos no GitHub (Secrets)
*(Protege suas senhas)*

1.  Vá ao seu repositório: [Settings > Secrets and variables > Actions](https://github.com/eusourogeriosilva/deus-e-fiel-imobiliaria-landing-page/settings/secrets/actions).
2.  Adicione **New repository secret**:
    *   Nome: `MAIL_USERNAME` | Valor: `rogeriomilla17@gmail.com`
3.  Adicione outro:
    *   Nome: `MAIL_PASSWORD` | Valor: *(A senha de 16 letras do passo 1)*

## 3. Gerar Token do GitHub
*(Permite o site salvar dados)*

1.  No GitHub, clique na sua foto > **Settings** > **Developer settings** (lá embaixo no canto esquerdo).
2.  Vá em **Personal access tokens** > **Fine-grained tokens**.
3.  **Generate new token**:
    *   Nome: `Site Form`
    *   Expiration: 90 dias (ou o que preferir).
    *   **Repository access:** Selecione "Only select repositories" -> Escolha o `deus-e-fiel...`
    *   **Permissions:** Clique em "Repository permissions", ache **Contents** e mude para **Read and Write**.
4.  Gere o token e **COPIE** ele (começa com `github_pat_...`).

## 4. Onde colar o Token?

*   **No seu computador (Teste):**
    Abra o bloco de notas, cole o código abaixo e salve como `.env` na pasta do projeto:
    ```
    VITE_GITHUB_TOKEN=seu_token_aqui_sem_aspas
    ```

*   **Ao publicar o site na internet:**
    Nas configurações da hospedagem (Vercel/Netlify), adicione a variável `VITE_GITHUB_TOKEN` com o valor do token.
