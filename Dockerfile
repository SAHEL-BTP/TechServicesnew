FROM node:23-alpine AS builder

WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste du projet
COPY . .

# Build l’app Next.js
RUN npm run build

# --- Étape 2 : Exécution ---
FROM node:23-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copie les fichiers nécessaires depuis le builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Installe uniquement les dépendances de prod
RUN npm install --omit=dev

# Expose le port 3000
EXPOSE 3000

# Démarre Next.js
CMD ["npm", "start"]