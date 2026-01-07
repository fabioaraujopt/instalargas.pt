# Configuração do Domínio no Dominios.pt

Este guia explica como configurar o seu domínio `instalargas.pt` no Dominios.pt para apontar para o GitHub Pages.

## ✅ Status Atual

- ✅ Repositório GitHub criado: https://github.com/fabioaraujopt/instalargas.pt
- ✅ GitHub Pages ativado
- ✅ Arquivo CNAME configurado
- ⏳ Aguardando configuração DNS

## 🌐 Configuração DNS no Dominios.pt

### Opção 1: Usar domínio raiz (instalargas.pt) - RECOMENDADO

Acesse o painel do Dominios.pt e configure os seguintes registros DNS:

#### Registros A (IPv4) - OBRIGATÓRIOS
Crie 4 registros do tipo **A** apontando para os IPs do GitHub Pages:

```
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.111.153
TTL: 3600
```

#### Registro CNAME para www - RECOMENDADO
Para que `www.instalargas.pt` também funcione:

```
Tipo: CNAME
Nome: www
Valor: fabioaraujopt.github.io.
TTL: 3600
```

**IMPORTANTE:** Note o ponto (.) no final de `fabioaraujopt.github.io.`

### Opção 2: Usar apenas subdomínio (www.instalargas.pt)

Se preferir usar apenas `www.instalargas.pt`:

1. Edite o arquivo `CNAME` e altere para `www.instalargas.pt`
2. Configure apenas o registro CNAME:

```
Tipo: CNAME
Nome: www
Valor: fabioaraujopt.github.io.
TTL: 3600
```

## 🔒 Ativar HTTPS (Depois da Configuração DNS)

Após os registros DNS propagarem (pode levar até 24-48h, mas geralmente é mais rápido):

1. Acesse: https://github.com/fabioaraujopt/instalargas.pt/settings/pages
2. Marque a opção **"Enforce HTTPS"**
3. Aguarde a emissão do certificado SSL (alguns minutos)

## 🧪 Como Verificar a Configuração

### 1. Verificar Propagação DNS (pode demorar até 48h)

```bash
# Verificar registros A
dig instalargas.pt +short

# Verificar registro CNAME do www
dig www.instalargas.pt +short

# Verificar em tempo real
https://dnschecker.org/#A/instalargas.pt
```

### 2. Verificar Status no GitHub

```bash
gh api repos/fabioaraujopt/instalargas.pt/pages
```

Ou acesse: https://github.com/fabioaraujopt/instalargas.pt/settings/pages

## ⚡ Passo a Passo no Dominios.pt

1. **Login**: Acesse https://dominios.pt e faça login
2. **Painel**: Vá para "Os Meus Domínios"
3. **Selecione**: Clique em `instalargas.pt`
4. **DNS**: Procure por "Gestão DNS" ou "DNS Management"
5. **Remova**: Delete quaisquer registros A ou CNAME existentes que conflitem
6. **Adicione**: Crie os 4 registros A com os IPs do GitHub
7. **Adicione**: Crie o registro CNAME para www
8. **Salve**: Confirme as alterações

## 📝 Exemplo de Configuração Final

Sua zona DNS deve ficar assim:

| Tipo  | Nome | Valor                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 185.199.108.153         | 3600 |
| A     | @    | 185.199.109.153         | 3600 |
| A     | @    | 185.199.110.153         | 3600 |
| A     | @    | 185.199.111.153         | 3600 |
| CNAME | www  | fabioaraujopt.github.io. | 3600 |

## ⏱️ Tempo de Propagação

- **DNS Local**: 5-30 minutos
- **DNS Global**: até 48 horas (normalmente 4-6 horas)
- **Certificado SSL**: 5-10 minutos após DNS propagar

## 🔧 Resolução de Problemas

### Site não carrega após 48h

1. Verifique se os registros DNS estão corretos
2. Teste com: `nslookup instalargas.pt`
3. Limpe o cache DNS: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` (macOS)

### Erro "DNS check unsuccessful"

- Aguarde mais tempo (pode demorar até 48h)
- Verifique se removeu registros DNS conflitantes
- Certifique-se que o arquivo CNAME está correto no repositório

### HTTPS não funciona

1. Aguarde o DNS propagar completamente
2. Acesse as configurações do GitHub Pages
3. Desmarque e marque novamente "Enforce HTTPS"
4. Aguarde alguns minutos

## 📚 Recursos Adicionais

- [Documentação GitHub Pages](https://docs.github.com/pt/pages)
- [Configurar domínio personalizado](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Verificar DNS](https://dnschecker.org)

## 🎉 Próximos Passos

Após a configuração DNS:

1. ✅ Aguarde propagação (4-48h)
2. ✅ Ative HTTPS no GitHub
3. ✅ Teste o site: http://instalargas.pt e http://www.instalargas.pt
4. ✅ Atualize o sitemap.xml com o domínio correto
5. ✅ Submeta o sitemap ao Google Search Console

---

**Nota**: Este site já está configurado e pronto para receber tráfego assim que o DNS propagar!

