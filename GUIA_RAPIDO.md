# 🚀 Guia Rápido - InstalarGás.pt

## ✅ O que está Pronto

Site completo e funcional com:
- ✅ Design profissional e moderno
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Telefone configurado: **939 628 871**
- ✅ Email: **geral@instalargas.pt**
- ✅ Google Maps integrado com vosso perfil
- ✅ Todas as informações atualizadas
- ✅ SEO otimizado

## 🎯 Informações no Site

### Serviços Destacados:
1. **Projetos de Engenharia** (OE)
2. **Instalação Profissional** (DGEG)
3. **Certificação e Inspeção**
4. **Aconselhamento Técnico**

### Setores:
- Moradias
- Edifícios
- Restauração
- Hotelaria
- Comércio
- Indústria

### Área: Grande Lisboa • Todo Portugal

## 🖼️ Próximos Passos: Adicionar Imagens

### Onde Encontrar Imagens Gratuitas

**Sites Recomendados:**
1. **Unsplash** (https://unsplash.com/)
2. **Pexels** (https://pexels.com/)
3. **Pixabay** (https://pixabay.com/)

**Termos de Pesquisa:**
- `gas installation`
- `plumber professional`
- `gas pipes`
- `industrial pipes`
- `technician work`
- `construction worker`
- `home renovation`

### Imagens Necessárias

Guarda todas as imagens na pasta `images/`:

1. **hero-background.jpg** (1920x1080px)
   - Foto de técnico a trabalhar ou tubagem de gás
   - Opcional: pode usar overlay do CSS

2. **service-*.jpg** (800x600px cada)
   - Fotos de instalações, projetos, certificados

3. **sector-*.jpg** (600x600px cada)
   - Fotos representativas de cada setor

4. **about-team.jpg** (800x800px)
   - Foto profissional (pode ser stock inicialmente)

### Como Adicionar Imagens ao Site

#### 1. Background do Hero
No ficheiro `css/styles.css`, adiciona depois da linha `.home {`:

```css
.home {
    background: linear-gradient(rgba(0, 78, 137, 0.85), rgba(255, 107, 53, 0.85)), 
                url('../images/hero-background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```

#### 2. Foto "Sobre Nós"
No ficheiro `index.html`, substitui a section `.about__image`:

```html
<div class="about__image">
    <img src="images/about-team.jpg" alt="Equipa InstalarGás" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">
    <div class="about__certification-badge">
        <i class="fas fa-check-circle"></i>
        <span>Certificado</span>
    </div>
</div>
```

## 🧪 Testar o Site

### Opção 1: Abrir Diretamente
1. Vai à pasta do projeto
2. Duplo clique em `index.html`
3. Abre no browser

### Opção 2: Servidor Local (Recomendado)

**Com Python:**
```bash
cd /Users/fabioaraujo/instalargas.pt
python3 -m http.server 8000
```
Depois abre: http://localhost:8000

**Com Node.js:**
```bash
cd /Users/fabioaraujo/instalargas.pt
npx http-server -p 8000
```

### ✅ Checklist de Testes

- [ ] Testar no **Chrome**
- [ ] Testar no **Safari**
- [ ] Testar no **telemóvel** (Safari/Chrome mobile)
- [ ] Clicar em todos os botões
- [ ] Testar formulário de contacto
- [ ] Verificar que o número de telefone abre app de chamadas
- [ ] Testar link do Google Maps
- [ ] Scroll suave entre secções
- [ ] Menu mobile funciona
- [ ] Botão "Scroll to Top" aparece

## 📤 Como Publicar o Site

### Opção 1: Netlify (MAIS FÁCIL) ⭐

1. Vai a https://www.netlify.com/
2. Regista-te (grátis)
3. Arrasta a pasta do projeto para o Netlify Drop
4. O site fica online em segundos!
5. Depois configura o domínio instalargas.pt

**Vantagens:**
- ✅ Grátis
- ✅ SSL automático (HTTPS)
- ✅ CDN global
- ✅ Deploy em segundos

### Opção 2: Vercel

1. Vai a https://vercel.com/
2. Importa o projeto
3. Deploy automático

### Opção 3: Servidor Próprio (Tradicional)

1. Liga-te ao servidor por FTP
2. Faz upload de todos os ficheiros
3. Configura o domínio para apontar para a pasta

## 🔧 Configurações Finais

### Formulário de Contacto

O formulário atual apenas mostra mensagem de sucesso. Para receber emails reais:

**Solução Simples - FormSubmit:**

No `index.html`, linha ~469, substitui:
```html
<form class="contact__form" id="contact-form" 
      action="https://formsubmit.co/geral@instalargas.pt" 
      method="POST">
```

E adiciona antes do botão submit:
```html
<input type="hidden" name="_next" value="https://instalargas.pt#contact">
<input type="hidden" name="_subject" value="Novo contacto do site">
<input type="hidden" name="_captcha" value="false">
```

### Google Analytics (Opcional)

Adiciona antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Schema.org para SEO

Adiciona antes do `</head>` no HTML:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InstalarGás",
  "description": "Projetos, instalação e certificação de gás natural, propano e butano",
  "image": "https://instalargas.pt/images/logo.png",
  "telephone": "+351939628871",
  "email": "geral@instalargas.pt",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lisboa",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.7223",
    "longitude": "-9.1393"
  },
  "url": "https://instalargas.pt",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-19:00"
}
</script>
```

## 📱 WhatsApp Button (Opcional)

No ficheiro `js/main.js`, descomenta as linhas finais (está lá o código pronto).

Ou adiciona o teu WhatsApp diretamente no footer como botão adicional.

## 🎨 Personalizar Cores

Se quiseres mudar as cores do site, edita no `css/styles.css` (linhas 2-10):

```css
:root {
    --primary-color: #FF6B35;      /* Cor principal (laranja) */
    --secondary-color: #004E89;    /* Cor secundária (azul) */
}
```

## 📞 Suporte

Se tiveres dúvidas:
1. Lê o `README.md` completo
2. Verifica a consola do browser (F12) para erros
3. Testa sempre em modo incognito primeiro

---

**🔥 Boa sorte com o site! Está profissional e pronto para usar!**

