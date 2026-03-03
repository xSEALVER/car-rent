# 🚗 Rento — Application de Location de Véhicules

Application web fullstack de location de véhicules avec gestion des réservations, authentification utilisateur et tableau de bord administrateur.

---

## 📋 Description

**Rento** est une application fullstack composée d'un client **React + Vite** et d'un serveur **Node.js + Express + MySQL**. Elle permet aux utilisateurs de parcourir un catalogue de véhicules, effectuer des réservations avec calcul automatique du prix total, et gérer leurs réservations. Un espace administrateur permet la gestion complète des réservations et des clients.

---

## 🗂️ Structure du projet

```
rento-project/
│
├── client/                         # Frontend React
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home.jsx            # Page d'accueil
│   │   │   ├── SignUp.jsx          # Inscription
│   │   │   ├── SignIn.jsx          # Connexion
│   │   │   ├── Contact.jsx         # Contact
│   │   │   ├── Reservation.jsx     # Page de réservation
│   │   │   ├── Vehicules.jsx       # Liste des véhicules
│   │   │   └── AdminPage.jsx       # Page admin
│   │   │
│   │   ├── Components/
│   │   │   ├── CarListComp.jsx         # Liste des voitures
│   │   │   ├── ReservationsComp.jsx    # Mes réservations
│   │   │   ├── AdminDashboard.jsx      # Dashboard admin
│   │   │   ├── AdminRoute.jsx          # Route protégée admin
│   │   │   ├── NotAuthorized.jsx       # Page 403
│   │   │   ├── UpdateReservation.jsx   # Modifier réservation
│   │   │   ├── CreateReservation.jsx   # Créer réservation
│   │   │   ├── ImgLoader.jsx           # Chargement images
│   │   │   └── TestComponents.jsx      # Tests
│   │   │
│   │   ├── context/
│   │   │   ├── CartContext.jsx     # Gestion du panier
│   │   │   └── UserContext.jsx     # Gestion utilisateur global
│   │   │
│   │   ├── Global.css
│   │   └── App.jsx                 # Routage principal
│   │
│   └── package.json
│
└── backend/                        # Serveur Express
    ├── server.js                   # Point d'entrée & routes API
    └── package.json
```

---

## 🗺️ Routes client

| Route | Composant | Description |
|---|---|---|
| `/` | Home | Page d'accueil |
| `/signup` | SignUp | Inscription |
| `/signin` | SignIn | Connexion |
| `/contact` | Contact | Formulaire de contact |
| `/carlist` | CarListComp | Catalogue des véhicules |
| `/vehicules` | Vehicules | Page véhicules |
| `/Reservation` | Reservation | Faire une réservation |
| `/reservation` | MesReservations | Mes réservations |
| `/create` | CreateReservation | Créer une réservation |
| `/update/:id` | UpdateReservation | Modifier une réservation |
| `/admin` | AdminRoutePage | Route protégée admin |
| `/admin-dashboard` | AdminDashboard | Dashboard admin |
| `/admin-page` | AdminPage | Page admin |
| `/not-auth` | NotAuthorized | Accès refusé |

---

## 🔌 API — Endpoints serveur

Le serveur tourne sur le port **8081**.

### Authentification

| Méthode | Route | Description |
|---|---|---|
| `POST` | `/signup` | Créer un compte client |
| `POST` | `/signin` | Connexion (retourne `id_clients`, `name`, `email`, `role`) |

### Véhicules

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/carlist` | Liste des véhicules (filtres : `?type=` & `?marque=`) |

### Réservations

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/reservation` | Réservations avec détails véhicule (JOIN) |
| `GET` | `/reservationAdmin` | Réservations avec détails client + véhicule (admin) |
| `POST` | `/addReservation` | Créer une réservation simple |
| `POST` | `/create` | Créer une réservation avec calcul du prix total |
| `PUT` | `/update/:id` | Modifier une réservation |
| `DELETE` | `/delete/:id` | Supprimer une réservation |

### Clients

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/` | Liste de tous les clients |

---

## 🗄️ Base de données MySQL

**Base de données :** `rento`

### Tables principales

**`clients`**
```
id_clients | nom_clients | email_clients | telephone_clients | mot_de_passe_clients | role_clients | id_reservation
```

**`vehicules`**
```
id_vehicules | marque_vehicules | modele_vehicules | type_vehicules | prix_vehicules | image_url | id_agence | id_reservation
```

**`reservation`**
```
id_reservation | id_clients | id_vehicules | id_agence | date_reservation | date_fin_reservation | prix_total
```

### Calcul du prix total
Le prix est calculé automatiquement :
```
prix_total = prix_vehicules × nombre_de_jours × 2
```

---

## 🔐 Authentification & Rôles

- Authentification par email/mot de passe stockée en MySQL
- Le champ `role_clients` permet de distinguer les utilisateurs des administrateurs
- Les routes admin (`/admin`, `/admin-dashboard`) sont protégées via `AdminRoute`
- Le contexte `UserContext` gère l'état de l'utilisateur connecté dans toute l'app

---

## 🛠️ Technologies utilisées

### Client
| Technologie | Version | Usage |
|---|---|---|
| React | 18.3.1 | Framework UI |
| Vite | 5.4.21 | Bundler & dev server |
| React Router DOM | 6.26.2 | Navigation SPA |
| Firebase | 10.13.2 | Services Firebase |
| React Datepicker | 7.4.0 | Sélection de dates |
| AOS | 2.3.4 | Animations au scroll |
| Tailwind CSS | 3.4.13 | Styles utilitaires |

### Serveur
| Technologie | Version | Usage |
|---|---|---|
| Node.js + Express | 4.19.2 | Serveur HTTP & API REST |
| MySQL | 2.18.1 | Base de données |
| CORS | 2.8.5 | Gestion des origines |
| bcrypt | 5.1.1 | Hachage de mots de passe |
| axios | 1.7.7 | Requêtes HTTP |
| nodemon | 3.1.7 | Rechargement auto (dev) |

---

## 🚀 Installation & Lancement

### Prérequis
- Node.js (v18+)
- MySQL

### 1. Base de données

Crée la base de données et les tables dans MySQL :

```sql
CREATE DATABASE rento;
USE rento;

CREATE TABLE clients (
  id_clients INT AUTO_INCREMENT PRIMARY KEY,
  nom_clients VARCHAR(100),
  email_clients VARCHAR(100) UNIQUE,
  telephone_clients VARCHAR(20),
  mot_de_passe_clients VARCHAR(255),
  role_clients VARCHAR(20) DEFAULT 'user',
  id_reservation INT
);

CREATE TABLE vehicules (
  id_vehicules INT AUTO_INCREMENT PRIMARY KEY,
  marque_vehicules VARCHAR(100),
  modele_vehicules VARCHAR(100),
  type_vehicules VARCHAR(50),
  prix_vehicules DECIMAL(10,2),
  image_url VARCHAR(255),
  id_agence INT,
  id_reservation INT
);

CREATE TABLE reservation (
  id_reservation INT AUTO_INCREMENT PRIMARY KEY,
  id_clients INT,
  id_vehicules INT,
  id_agence INT,
  date_reservation DATE,
  date_fin_reservation DATE,
  prix_total DECIMAL(10,2)
);
```

### 2. Serveur (backend)

```bash
cd backend
npm install
# Modifier les identifiants MySQL dans server.js si nécessaire
npm start        # Lance avec nodemon sur le port 8081
```

> Par défaut : `host: localhost`, `user: root`, `password: ''`, `database: rento`

### 3. Client (frontend)

```bash
cd client
npm install
npm run dev      # Lance sur http://localhost:5173
```

### Scripts disponibles

```bash
# Client
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Linter ESLint

# Serveur
npm start         # Lance le serveur avec nodemon
```

---

## ⚙️ Configuration

Dans `server.js`, modifier la connexion MySQL si nécessaire :

```js
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',       // Ton mot de passe MySQL
    database: 'rento'
});
```

---

© Rento — 2024
