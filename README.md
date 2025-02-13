# Ingénieur-e Au Féminin - Projet Hackathon

## 📌 À propos du projet

### 👥 Auteurs
- Othmane Makboul  
- Amine Abidi  
- Aya Ouddo  
- Cortes Carlos  

Ce projet a été développé le **13 février 2025** dans le cadre du **hackathon organisé par l'association Ingénieur-e Au Féminin (IAF)**.  
L'objectif était de **créer un site web pour l’association**, intégrant des pages essentielles ainsi que des fonctionnalités supplémentaires introduites sous forme de mini-défis tout au long de l'événement.

---

## 🌐 Objectifs du projet

Le site web comprend :
- Une **page de présentation** de l’association.
- Une **page des partenaires**, affichant leurs logos.
- Une **page des événements**, répertoriant les activités passées.
- Une **page d'actualités**, affichant dynamiquement les derniers posts des réseaux sociaux.

---

## ⚡ Mini-défis implémentés

1. **Intégration d’un chatbot 🤖💬**  
   - Un chatbot capable de répondre aux questions sur l’association.  
   - Implémenté avec **WebAgent AI API** ([webagent.ai/chatbots](https://webagent.ai/chatbots)).  

2. **Formulaire de contact 📩**  
   - Permet aux utilisateurs d’envoyer des messages sans accéder directement à une adresse e-mail.  
   - Implémenté avec **EmailJS** ([emailjs.com](https://www.emailjs.com/)).  

3. **Page d'actualités 📰**  
   - Affiche automatiquement les derniers posts de l’association sur les réseaux sociaux.  
   - Utilisation de **Apify API** ([console.apify.com](https://console.apify.com/actors?tab=recently-used)) pour récupérer les données.  

---

## 🚀 Déploiement local

### 🔧 Installation & exécution

Pour exécuter le projet en local, suivez ces étapes :

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/ouddoua/Hackathon_IAF_10.git
   cd Hackathon_IAF_10
    ```

2. **Installer les dépendances:**
   ```bash
   npm install
   ```

3. **Exécuter le serveur de développement:**
   ```bash
   npm run dev
   ```

4. **Ouvrez votre navigateur et visitez le site :**
   ```
   http://localhost:5173/
   ```

---

## 🔗 APIs & Services Utilisés

- **API Chatbot :** [WebAgent AI](https://webagent.ai/chatbots) – Alimente le chatbot qui répond aux questions sur l’association.  
- **API de Web Scraping :** [Apify](https://console.apify.com/actors?tab=recently-used) – Récupère les derniers posts des réseaux sociaux.  
- **Service d’e-mails :** [EmailJS](https://www.emailjs.com/) – Permet aux utilisateurs d’envoyer des messages sans exposer d’adresse e-mail.  

---

## 🛠️ Technologies Utilisées

- **Frontend :** React, Next.js  
- **Stylisation :** Tailwind CSS  
- **APIs :** WebAgent AI, Apify, EmailJS  

---

## 🤝 Contributeurs

Ce projet a été réalisé dans le cadre du **Hackathon IAF** par notre équipe dévouée.  
Un grand merci aux mentors et aux organisateurs pour leur soutien !  

---