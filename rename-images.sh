#!/bin/bash
# rename-images.sh — Helper para renombrar fotos rápidamente
# Uso: bash rename-images.sh

echo "🏠 Casa Juriquilla — Asistente de renombrado de imágenes"
echo "=================================================="
echo ""
echo "Este script te ayuda a renombrar tus fotos al formato correcto."
echo "Coloca tus fotos en /img/ primero, luego ejecuta este script."
echo ""

cd ./img 2>/dev/null || { echo "❌ Error: carpeta img/ no encontrada"; exit 1; }

echo "Fotos encontradas en /img/:"
ls -lh *.jpg *.JPG *.jpeg *.JPEG *.png *.PNG 2>/dev/null | awk '{print $9, "(" $5 ")"}'

echo ""
echo "Ejemplos de renombrado:"
echo "  ❌ Foto 1 de la calle.jpg"
echo "  ✅ calle-1.jpg"
echo ""
echo "  ❌ Hab 1 - foto A.jpg"
echo "  ✅ hab1-a.jpg"
echo ""

echo "Nombres esperados:"
echo "  • calle-1.jpg, calle-2.jpg"
echo "  • entrada-1.jpg, entrada-2.jpg"
echo "  • patio-frontal.jpg, sala.jpg, comedor.jpg"
echo "  • cocina-1.jpg, cocina-2.jpg"
echo "  • hab1-a.jpg, hab1-b.jpg, hab1-bano.jpg"
echo "  • hab2-a.jpg, hab2-b.jpg, bano-compartido.jpg"
echo ""
echo "Opción: usa 'mv' para renombrar manualmente:"
echo "  mv \"Foto vieja.jpg\" calle-1.jpg"
echo ""
