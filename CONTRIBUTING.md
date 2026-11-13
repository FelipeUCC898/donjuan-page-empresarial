# Contribuir a Barbería Don Juan

## Flujo recomendado

1. Actualiza `develop` y crea una rama descriptiva:

   ```bash
   git switch develop
   git pull origin develop
   git switch -c feature/nombre-corto
   ```

2. Mantén los commits pequeños y usa esta convención:

   - `feat:` nueva funcionalidad
   - `fix:` corrección
   - `docs:` documentación
   - `style:` estilos sin cambio de comportamiento
   - `refactor:` reorganización técnica
   - `test:` pruebas
   - `chore:` mantenimiento

3. Verifica antes de abrir el Pull Request:

   ```bash
   npm run lint
   npm run build
   ```

4. Abre el Pull Request hacia `develop`. El cambio debe incluir descripción, capturas si afecta UI y una lista de verificación.

5. Cuando `develop` esté validada, abre un Pull Request hacia `main` para publicar.

## Reglas

- No trabajar directamente en `main` ni `develop`.
- No subir credenciales, teléfonos privados ni tokens de servicios.
- Mantener componentes accesibles: textos alternativos, foco visible y contraste suficiente.
- Preferir cambios pequeños y reversibles.
