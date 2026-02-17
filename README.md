<p align="center">
  <img src="client/public/logo.png" alt="FATV Logo" width="100"/>
</p>

# Fundación Antivirus para la Deserción (FATV)

Plataforma web informativa creada para la **Fundación Antivirus para la Deserción**, una iniciativa que trabaja por reducir la deserción estudiantil en Colombia y fortalecer la permanencia educativa como motor de desarrollo social.

<img src="pagina_fatv.webp" alt="Fundación Antivirus para la Deserción (FATV)" style="display: block; margin: auto; max-width: 500px; width:100%;"/>

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Stack Tecnológico](#stack-tecnológico)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución Local](#ejecución-local)
- [Despliegue](#despliegue)
- [Flujo de Desarrollo (Gitflow)](#flujo-de-desarrollo-gitflow)
- [Contribución](#contribución)

---

## Descripción del Proyecto

En esta página web se presenta contenido relevante y de carácter informativo que sustenta y complementa los objetivos, servicios y proyectos de FATV, entre los cuales se incluyen:

- tecnología y datos
- intervención social
- comunicaciones
- Gestión de la permanencia
- Consultorías en permanencia
- Acompañamiento estudiantil
- Asesorías
- Pro-Vocación
- AtvConecta
- Noticias
- Donación

La plataforma está disponible en **español e inglés** y ofrece un sistema de donaciones integrado con Wompi.

---

## 🛠️ Stack Tecnológico

### Frontend (Cliente)

```
├── React 18.2              → Interfaz de usuario moderna
├── Vite 5.x                → Bundler y servidor dev de alto rendimiento
├── Tailwind CSS 3.x        → Estilos y diseño responsivo
├── React Router 6.25       → Enrutamiento SPA
├── i18next 25.5            → Internacionalización (EN/ES)
├── Firebase 11.5           → Hosting y autenticación
├── Framer Motion 12.x      → Animaciones fluidas
├── TypeScript (opcional)   → Type safety
```

### Servicios Externos

```
├── Firebase Hosting        → Deploying y CDN
├── EmailJS                 → Envío de correos
```

### Desarrollo

```
├── ESLint + Prettier       → Formato y linting
├── Git Flow                → Gestión de ramas
└── npm/yarn                → Gestión de dependencias
```

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** 18+ ([descargar](https://nodejs.org/))
- **npm** 9+ o **yarn** 3+ (se instala con Node.js)
- **Git** 2.30+ ([descargar](https://git-scm.com/))

### Verificar instalación

```bash
node --version    # v18.0.0 o superior
npm --version     # 9.0.0 o superior
git --version     # 2.30.0 o superior
```

---

## ⚡ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Fundacion-Antivirus-para-la-Desercion/pagina_fatv.git
cd pagina_fatv
```

### 2. Instalar dependencias del Frontend

```bash
cd client
npm install
```

---

## 💻 Ejecución Local

### Terminal 1: Iniciar Frontend (en paralelo)

```bash
cd client
npm run dev
```

Output esperado:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Acceder a la aplicación

- **Frontend**: [http://localhost:5173](http://localhost:5173)

### Comandos útiles del Cliente

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview de la build
npm run preview

# Deploy a Firebase
npm run deploy
```

### Descripción de secciones principales:

- **`/components`** → Bloques de construcción reutilizables (Header, Footer, Cards, etc)
- **`/views`** → Páginas completas que usan múltiples componentes
- **`/hooks`** → Lógica customizada de React (useImageByLanguage, etc)
- **`/assets`** → Recursos estáticos (imágenes, iconos)
- **`/locales`** → Traducciones centralizadas (i18n)
- **`/Services`** → Módulos de servicios/consultorías específicas

---

## 💭 Despliegue

🔴 Deploy a Firebase Hosting (Entorno de Pruebas)

La aplicación está configurada para desplegarse en **Firebase Hosting**.  
Actualmente, este despliegue corresponde únicamente al **entorno de pruebas (testing)**.

> ⚠️ Nota: Este entorno es provisional y puede presentar cambios frecuentes.

---

### 📌 Pasos para realizar el despliegue

````bash
# 1. Hacer build del proyecto
cd client
npm run build

# 2. Desplegar a Firebase (desde la raíz del proyecto)
cd ..
npm run deploy
# o directamente
firebase deploy



## 🔀 Flujo de Desarrollo (Gitflow)

Este proyecto sigue la metodología **Git Flow** para gestionar versiones y ramas.

### Ramas principales:

- **`master`** → Producción (releases estables)
- **`develop`** → Integración de features (próxima versión)



### Flujo típico de trabajo:

#### 1. Crear feature desde develop:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nombre-descriptivo
````

#### 2. Trabajar en la rama:

```bash
# Hacer cambios, commits, etc.
git add .
git commit -m "feat: descripción clara del cambio"
git push origin feature/nombre-descriptivo
```

#### 3. Crear Pull Request:

- Ir a GitHub
- Crear PR contra `develop`
- Solicitar code review (al menos 1 aprobación)
- Una vez merged, eliminar la rama

#### 4. Convención usada para Release:

El formato utilizado para nombrar las releases es:

```bash
release DD-MM-YYYY@T_HH_MM_SS
```

Donde:

- `DD-MM-YYYY` corresponde a la fecha.
- `HH_MM_SS` corresponde a la hora en formato 24 horas.

**Ejemplo:**
release/17-02-2026@T12_48_00

### Convención de commits:

```
feat: nueva funcionalidad
fix: corrección de bugs
style: cambios de formato (código, no funcionalidad)
refactor: refactorización de código
```

---

## 🧑‍💻 Créditos

Proyecto desarrollado por **Fundación Antivirus para la Deserción**.

---

**Última actualización:** 📆17 de febrero de 2026
