# otl.fi

Personal website hosted on GitHub Pages.

## Local Development

Open `index.html` in a browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deployment

The site automatically deploys to GitHub Pages when you push to `main`.

## DNS Setup

To point `otl.fi` to GitHub Pages, configure these DNS records at your registrar:

### A Records (apex domain)

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### CNAME Record (www subdomain)

```
www.otl.fi → OlliTapio.github.io
```

### After DNS propagates

1. Go to https://github.com/OlliTapio/website/settings/pages
2. Verify custom domain shows as configured
3. Check "Enforce HTTPS" once the certificate is provisioned
