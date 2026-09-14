# Galeria de Imagens - Projeto L3D UFF

Esta pasta é destinada para armazenar as fotos e imagens do **Laboratório L3D UFF**.

### Como adicionar novas fotos:
1. Copie seus arquivos de imagem (`.jpg`, `.jpeg`, `.png`, `.webp`) para esta pasta:
   `assets/images/l3d/`
2. No arquivo `projeto-l3d.html`, localize a seção `<div class="gallery-grid" id="l3d-gallery-grid">`.
3. Adicione um novo bloco `<div class="gallery-card">` apontando para a sua imagem:

```html
<div class="gallery-card" data-full-img="assets/images/l3d/sua-foto.jpg" data-caption="Descrição da foto">
  <div class="gallery-img-wrapper">
    <img src="assets/images/l3d/sua-foto.jpg" alt="Descrição" loading="lazy">
    <span class="gallery-zoom-badge">Ampliar</span>
  </div>
  <div class="gallery-info">
    <span class="gallery-tag-pill">Categoria / Tag</span>
    <h4 class="gallery-caption">Título da Foto</h4>
  </div>
</div>
```

Alternativamente, você pode simplesmente enviar as imagens no chat que faremos a inserção imediata para você!
