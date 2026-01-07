# 📧 Como Fazer o Formulário Funcionar

## 🎯 OBJETIVO
Enviar emails para:
- ✉️ araujogas@hotmail.com
- ✉️ fabioaraujoorg@gmail.pt

---

## ✅ OPÇÃO 1: WEB3FORMS (RECOMENDADO!) ⭐

### Porquê?
- ✅ **100% GRÁTIS** (250 submissions/mês)
- ✅ **SEM SERVIDOR** necessário
- ✅ **Múltiplos emails** suportado
- ✅ **SEM VERIFICAÇÃO** prévia
- ✅ **Spam protection** incluído
- ✅ **Fácil configuração** (5 minutos)

### PASSO A PASSO:

#### 1. Registar em Web3Forms
```
URL: https://web3forms.com

1. Clica "Get Started"
2. Email: fabioaraujoorg@gmail.pt
3. Recebe Access Key por email
4. Guarda o Access Key (exemplo: a1b2c3d4-e5f6-...)
```

#### 2. Atualizar o Formulário HTML

Vou criar a versão atualizada do teu formulário:

```html
<!-- NO index.html, substituir a secção do formulário por: -->

<form class="contact__form" id="contact-form" action="https://api.web3forms.com/submit" method="POST">
    
    <!-- Access Key (SUBSTITUI pelo teu!) -->
    <input type="hidden" name="access_key" value="SEU_ACCESS_KEY_AQUI">
    
    <!-- Emails para receber (múltiplos separados por vírgula) -->
    <input type="hidden" name="email" value="araujogas@hotmail.com,fabioaraujoorg@gmail.pt">
    
    <!-- Configurações Web3Forms -->
    <input type="hidden" name="subject" value="Novo Contacto InstalarGás">
    <input type="hidden" name="from_name" value="InstalarGás Website">
    <input type="hidden" name="redirect" value="https://instalargas.pt/#contact">
    
    <!-- Campos do formulário -->
    <div class="form__group">
        <label for="name" class="form__label">Nome Completo *</label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            class="form__input" 
            placeholder="O seu nome"
            required>
    </div>
    
    <div class="form__group">
        <label for="email" class="form__label">Email *</label>
        <input 
            type="email" 
            id="email" 
            name="email_from" 
            class="form__input" 
            placeholder="seuemail@exemplo.com"
            required>
    </div>
    
    <div class="form__group">
        <label for="phone" class="form__label">Telefone *</label>
        <input 
            type="tel" 
            id="phone" 
            name="phone" 
            class="form__input" 
            placeholder="+351 912 345 678"
            required>
    </div>
    
    <div class="form__group">
        <label for="service" class="form__label">Serviço Pretendido</label>
        <select id="service" name="service" class="form__input" required>
            <option value="">Selecione um serviço</option>
            <option value="Projeto de Gás">Projeto de Gás</option>
            <option value="Instalação Gás Natural">Instalação Gás Natural</option>
            <option value="Instalação Propano/Butano">Instalação Propano/Butano</option>
            <option value="Certificação DGEG">Certificação DGEG</option>
            <option value="Inspeção de Gás">Inspeção de Gás</option>
            <option value="Ligação à Rede">Ligação à Rede</option>
            <option value="Outro">Outro</option>
        </select>
    </div>
    
    <div class="form__group form__group--full">
        <label for="message" class="form__label">Mensagem *</label>
        <textarea 
            id="message" 
            name="message" 
            class="form__input form__textarea" 
            rows="5" 
            placeholder="Descreva o que precisa..."
            required></textarea>
    </div>
    
    <!-- Honeypot (anti-spam) -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    
    <div class="form__group form__group--full">
        <button type="submit" class="button button__primary">
            <i class="fas fa-paper-plane"></i>
            Enviar Mensagem
        </button>
    </div>
    
    <div class="form__message" id="form-message"></div>
</form>
```

#### 3. Atualizar JavaScript (main.js)

Adiciona isto no fim do `js/main.js`:

```javascript
/*=============== WEB3FORMS CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Mostrar loading
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> A enviar...';
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                showFormMessage('✅ Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');
                contactForm.reset();
            } else {
                throw new Error(data.message || 'Erro ao enviar');
            }
        } catch (error) {
            showFormMessage('❌ Erro ao enviar mensagem. Por favor tente ligar: 939 628 871', 'error');
            console.error('Form error:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form__message ${type}`;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}
```

#### 4. CSS para mensagens (adicionar em styles.css)

```css
.form__message {
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    display: none;
    text-align: center;
    font-weight: 500;
}

.form__message.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.form__message.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

.hidden {
    display: none !important;
}
```

---

## ✅ OPÇÃO 2: FORMSPREE (ALTERNATIVA)

### Features:
- ✅ Grátis (50 submissions/mês)
- ✅ Múltiplos emails
- ⚠️ Precisa verificar email

### Setup:
```
1. Vai a https://formspree.io
2. Regista-te
3. Cria novo formulário
4. Adiciona os 2 emails
5. Recebe form endpoint
6. Usa no action do form
```

---

## ✅ OPÇÃO 3: EMAILJS (JAVASCRIPT)

### Features:
- ✅ Grátis (200 emails/mês)
- ✅ Totalmente JavaScript
- ✅ Templates customizáveis
- ⚠️ Mais complexo

### Setup:
```
1. https://www.emailjs.com/
2. Regista-te
3. Adiciona email service (Gmail)
4. Cria template
5. Usa SDK JavaScript
```

---

## ✅ OPÇÃO 4: FORMSUBMIT (SIMPLES)

### Features:
- ✅ 100% Grátis
- ✅ Super simples
- ⚠️ Precisa verificar email

### Setup Ultra-Rápido:
```html
<form action="https://formsubmit.co/araujogas@hotmail.com" method="POST">
    <!-- Teus campos -->
    <input type="hidden" name="_cc" value="fabioaraujoorg@gmail.pt">
    <input type="hidden" name="_subject" value="Novo Contacto InstalarGás">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="box">
</form>
```

**Nota:** Recebes email de confirmação no primeiro envio.

---

## ✅ OPÇÃO 5: PHP NO SERVIDOR (Se tiveres hosting PHP)

### Só se tiveres servidor com PHP + mail()

Cria `enviar.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email_from']);
    $telefone = htmlspecialchars($_POST['phone']);
    $servico = htmlspecialchars($_POST['service']);
    $mensagem = htmlspecialchars($_POST['message']);
    
    $destinatarios = "araujogas@hotmail.com, fabioaraujoorg@gmail.pt";
    $assunto = "Novo Contacto InstalarGás - " . $servico;
    
    $corpo = "
    NOVO CONTACTO - InstalarGás.pt
    
    Nome: $nome
    Email: $email
    Telefone: $telefone
    Serviço: $servico
    
    Mensagem:
    $mensagem
    ";
    
    $headers = "From: noreply@instalargas.pt\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (mail($destinatarios, $assunto, $corpo, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false]);
    }
}
?>
```

---

## 🎯 RECOMENDAÇÃO FINAL

### Para ti, recomendo: **WEB3FORMS** 🏆

**Porquê:**
1. ✅ **Grátis** e sem limites chatos
2. ✅ **Zero configuração servidor**
3. ✅ **Múltiplos emails** nativamente
4. ✅ **Setup em 5 minutos**
5. ✅ **Funciona imediatamente**
6. ✅ **Spam protection incluído**
7. ✅ **Profissional e confiável**

---

## 📋 CHECKLIST IMPLEMENTAÇÃO

### Agora (15 minutos):
```
□ Regista em Web3Forms.com
□ Copia Access Key
□ Atualiza index.html (formulário)
□ Atualiza main.js (JavaScript)
□ Atualiza styles.css (mensagens)
□ Testa o formulário!
```

### Testar:
```
□ Preenche todos os campos
□ Envia formulário
□ Verifica ambos os emails
□ Testa em mobile
□ Testa validação campos
```

---

## 🔧 TROUBLESHOOTING

### Não recebeste email?
- ✅ Verifica spam/lixo
- ✅ Confirma Access Key está correto
- ✅ Verifica emails estão corretos
- ✅ Espera 1-2 minutos

### Erro ao enviar?
- ✅ Abre DevTools (F12)
- ✅ Vê Console para erros
- ✅ Verifica Network tab
- ✅ Confirma Internet funciona

---

## 💰 COMPARAÇÃO CUSTOS

```
Web3Forms:   GRÁTIS (250/mês)  ⭐ RECOMENDADO
Formspree:   GRÁTIS (50/mês)   ⭐ Alternativa
FormSubmit:  GRÁTIS (ilimitado) ⭐ Simples
EmailJS:     GRÁTIS (200/mês)  ⭐ Avançado
PHP próprio: €0-5/mês          ⚠️ Precisa hosting
```

---

## 🎉 VANTAGENS vs EMAIL DIRETO

### Com serviço (Web3Forms):
- ✅ Anti-spam automático
- ✅ Múltiplos destinatários
- ✅ Templates customizáveis
- ✅ Analytics (quantos enviaram)
- ✅ Validação automática
- ✅ Funciona sempre

### Email direto (mailto:):
- ❌ Abre cliente email
- ❌ Má experiência usuário
- ❌ Pode não funcionar
- ❌ Sem proteção spam
- ❌ Parece amador

---

## ✅ IMPLEMENTAÇÃO RÁPIDA

Queres que eu implemente o Web3Forms agora no código?

Só precisas de:
1. Ir a https://web3forms.com
2. Registar com fabioaraujoorg@gmail.pt
3. Copiar o Access Key que recebes
4. Dar-me o Access Key
5. Eu atualizo tudo! 

Ou preferes fazer tu mesmo seguindo o guia? 😊

