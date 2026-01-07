# Pasta de Imagens

## 📸 Imagens Recomendadas

Para um site profissional, adicione as seguintes imagens nesta pasta:

### Logo
- `logo.png` ou `logo.svg` - Logo da empresa (recomendado: SVG para melhor qualidade)
- Dimensões sugeridas: 200x80px

### Hero/Banner
- `hero-background.jpg` ou `hero-background.webp` - Imagem de fundo da seção principal
- Dimensões sugeridas: 1920x1080px
- Tema: Instalação de gás, técnico trabalhando, equipamentos

### Serviços
- `service-installation.jpg` - Instalação de gás
- `service-inspection.jpg` - Inspeção/certificação
- `service-maintenance.jpg` - Manutenção
- `service-consulting.jpg` - Consultoria
- Dimensões sugeridas: 800x600px cada

### Sobre/Equipa
- `about-profile.jpg` - Foto do técnico/proprietário
- `about-work.jpg` - Em ação, a trabalhar
- Dimensões sugeridas: 800x800px

### Certificações
- `certification-1.jpg` - Certificado de técnico
- `certification-2.jpg` - Outras credenciais
- Dimensões sugeridas: 600x800px

### Galeria (opcional)
- `gallery-1.jpg` até `gallery-12.jpg` - Trabalhos realizados
- Dimensões sugeridas: 800x600px cada

## 🎨 Dicas para Imagens

### Qualidade
- Use imagens de alta qualidade e profissionais
- Evite imagens pixeladas ou de baixa resolução
- Prefira fotos reais a stock photos genéricas

### Formato
- **WebP** - Melhor para web (menor tamanho, boa qualidade)
- **JPG** - Para fotos (compressão com perda)
- **PNG** - Para logos e gráficos (sem perda)
- **SVG** - Para ícones e logos (vetorial, escalável)

### Otimização
Antes de adicionar as imagens, otimize-as:

**Ferramentas Online:**
- [TinyPNG](https://tinypng.com/) - Compressão de PNG e JPG
- [Squoosh](https://squoosh.app/) - Conversor e otimizador Google
- [CloudConvert](https://cloudconvert.com/) - Conversão de formatos

**Ferramentas de Linha de Comando:**
```bash
# Converter para WebP
cwebp input.jpg -q 80 -o output.webp

# Otimizar JPG
jpegoptim --max=85 --strip-all image.jpg

# Otimizar PNG
optipng -o7 image.png
```

### Dimensões e Peso
- **Hero/Banner:** máx. 300KB
- **Serviços/Galeria:** máx. 150KB cada
- **Logo:** máx. 50KB
- **Ícones:** máx. 20KB

### Como Adicionar ao Site

#### 1. Logo no Header
```html
<!-- Substitua o ícone atual por: -->
<a href="#" class="nav__logo">
    <img src="images/logo.svg" alt="InstalarGás Logo" width="150" height="60">
</a>
```

#### 2. Imagem de Fundo no Hero
```css
/* Em css/styles.css */
.home {
    background-image: linear-gradient(rgba(0, 78, 137, 0.8), rgba(255, 107, 53, 0.8)), 
                      url('../images/hero-background.jpg');
    background-size: cover;
    background-position: center;
}
```

#### 3. Imagens de Serviços
```html
<!-- Adicione antes do título de cada serviço: -->
<img src="images/service-installation.jpg" alt="Instalação de Gás" class="service__image">
```

#### 4. Foto no Sobre
```html
<!-- Substitua o .about__image por: -->
<div class="about__image">
    <img src="images/about-profile.jpg" alt="Técnico Certificado">
    <div class="about__certification-badge">
        <i class="fas fa-check-circle"></i>
        <span>Certificado</span>
    </div>
</div>
```

## 📷 Onde Encontrar Imagens

### Fotos Profissionais (Pagas)
- [Shutterstock](https://www.shutterstock.com/)
- [Adobe Stock](https://stock.adobe.com/)
- [iStock](https://www.istockphoto.com/)

### Fotos Gratuitas
- [Unsplash](https://unsplash.com/) - Alta qualidade
- [Pexels](https://www.pexels.com/) - Gratuitas para uso comercial
- [Pixabay](https://pixabay.com/) - Licença livre

### Dica Importante
**Use fotos reais sempre que possível!**
- Tire fotos do trabalho real
- Mostre os equipamentos utilizados
- Fotografe certificações e credenciais
- Imagens autênticas geram mais confiança

## 🎯 Checklist de Imagens

- [ ] Logo da empresa (SVG preferível)
- [ ] Foto de perfil/equipa
- [ ] Imagens de trabalhos realizados (mínimo 6)
- [ ] Certificações digitalizadas
- [ ] Equipamentos utilizados
- [ ] Foto de cabeçalho/hero
- [ ] Favicon personalizado (opcional)

---

**Nota:** Por enquanto, o site usa ícones do Font Awesome. Assim que adicionar imagens reais, o site ficará ainda mais profissional!

