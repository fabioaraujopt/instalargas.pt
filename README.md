# 🔥 InstalarGás - Website Oficial

Website profissional para serviços de instalação de gás natural, propano e butano.

## 📋 Sobre o Projeto

Site estático moderno e responsivo desenvolvido para apresentar os serviços de instalação, inspeção e manutenção de sistemas de gás. Criado com foco em UI/UX profissional, acessibilidade e performance.

## ✨ Características

- 🎨 **Design Moderno e Profissional** - Interface limpa e atrativa
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente
- ♿ **Acessível** - Segue as melhores práticas de acessibilidade web
- 🎯 **SEO Otimizado** - Estrutura semântica e meta tags apropriadas
- 🔥 **Animações Suaves** - Transições e efeitos visuais profissionais

## 🛠️ Tecnologias Utilizadas

- HTML5 (estrutura semântica)
- CSS3 (design moderno com Flexbox e Grid)
- JavaScript Vanilla (interatividade sem dependências)
- Font Awesome 6.5.1 (ícones)
- Google Fonts (tipografia Inter e Poppins)

## 📂 Estrutura do Projeto

```
instalargas.pt/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # JavaScript
├── images/             # Pasta para imagens
├── robots.txt          # Diretrizes para crawlers
├── sitemap.xml         # Mapa do site para SEO
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Visualização Local

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Acesse em: `http://localhost:8000`

### Deploy

Este é um site estático e pode ser hospedado em:

- **Netlify** (recomendado)
  - Arraste a pasta para netlify.com/drop
  - Ou conecte com Git para deploy automático

- **Vercel**
  - Importe o projeto no vercel.com
  - Deploy automático em segundos

- **GitHub Pages**
  - Faça push para um repositório GitHub
  - Ative GitHub Pages nas configurações

- **Servidor Web Tradicional**
  - Faça upload dos arquivos via FTP
  - Configure o domínio instalargas.pt

## ⚙️ Configuração

### Informações de Contacto

Edite no arquivo `index.html` as seguintes informações:

1. **Número de Telefone** - Procure por `+351 XXX XXX XXX` e substitua
2. **Email** - Já configurado como `geral@instalargas.pt`
3. **Localização** - Atualize para a localização específica
4. **Redes Sociais** - Adicione links reais no footer

### Formulário de Contacto

O formulário atual apenas simula o envio (console.log). Para implementar envio real:

**Opção 1: FormSubmit (Mais Simples)**
```html
<form action="https://formsubmit.co/geral@instalargas.pt" method="POST">
```

**Opção 2: Formspree**
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Opção 3: Backend Próprio**
- Implemente uma API para processar os formulários
- Atualize o JavaScript em `js/main.js`

### Adicionar Imagens

1. Coloque imagens na pasta `images/`
2. Formatos recomendados: WebP (melhor performance), JPG, PNG
3. Otimize as imagens antes de adicionar (recomendo TinyPNG.com)

### WhatsApp

Para adicionar botão flutuante do WhatsApp, descomente o código no final do arquivo `js/main.js` e adicione o número.

## 🎨 Personalização

### Cores

Edite as variáveis CSS no início do arquivo `css/styles.css`:

```css
:root {
    --primary-color: #FF6B35;      /* Laranja/vermelho */
    --secondary-color: #004E89;    /* Azul */
    /* ... outras cores ... */
}
```

### Fontes

As fontes atuais são:
- **Poppins** (títulos) - moderna e impactante
- **Inter** (texto) - excelente legibilidade

Para alterar, modifique o link do Google Fonts no `<head>` do HTML.

### Conteúdo

Todo o conteúdo está no arquivo `index.html`. As seções são:

1. **Home/Hero** - Apresentação inicial
2. **Services** - Serviços oferecidos
3. **Why Choose Us** - Diferenciais
4. **About** - Sobre a empresa
5. **Contact** - Formulário e informações de contacto
6. **CTA** - Call-to-action para urgências
7. **Footer** - Links e informações

## 📊 SEO

### Meta Tags

Já incluídas no HTML:
- Title otimizado
- Description
- Keywords
- Open Graph (para redes sociais)

### Melhorias Adicionais

1. Adicione `sitemap.xml` (incluído no projeto)
2. Configure Google Analytics
3. Configure Google Search Console
4. Adicione schema.org markup (LocalBusiness)

```html
<!-- Exemplo de Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InstalarGás",
  "description": "Instalações de gás natural, propano e butano",
  "telephone": "+351-XXX-XXX-XXX",
  "email": "geral@instalargas.pt",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PT"
  }
}
</script>
```

## 🔧 Manutenção

### Atualizar Conteúdo

1. Edite o HTML diretamente
2. Teste localmente
3. Faça upload para o servidor

### Adicionar Nova Seção

1. Copie estrutura de seção existente
2. Mantenha as classes CSS
3. Adicione link no menu de navegação

### Performance

- Otimize imagens (use WebP quando possível)
- Minifique CSS e JS para produção
- Use CDN para assets estáticos
- Ative cache no servidor

## 📱 Compatibilidade

Testado e funcional em:

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Opera (últimas 2 versões)
- ✅ Navegadores mobile (iOS Safari, Chrome Mobile)

## 🐛 Resolução de Problemas

### Menu não abre no mobile
- Verifique se o JavaScript está carregando
- Abra o console do navegador para ver erros

### Formulário não envia
- Configure um serviço de backend
- Verifique a integração com FormSubmit/Formspree

### Animações não funcionam
- Verifique se o JavaScript está ativo
- Alguns navegadores antigos podem não suportar IntersectionObserver

## 📄 Licença

Este projeto foi desenvolvido especificamente para InstalarGás. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas ou suporte técnico:
- Email: geral@instalargas.pt
- Website: https://instalargas.pt

---

**Desenvolvido com ❤️ e ☕**

*Última atualização: Janeiro 2026*

