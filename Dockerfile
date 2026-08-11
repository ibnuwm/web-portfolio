# ============================================================
# Ibnu WM Portfolio — Production Dockerfile (Next.js 15 standalone)
# Build:  docker build -t ibnuwm-portfolio .
# Run:    docker compose up -d
# ============================================================

# ---------- Stage 1: dependencies ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- Stage 2: build ----------
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* di-inline saat build — wajib lewat build args (bukan env runtime)
ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ARG NEXT_PUBLIC_GTM=
ENV NEXT_PUBLIC_GTM=${NEXT_PUBLIC_GTM}
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
ARG NEXT_PUBLIC_EMAIL=
ENV NEXT_PUBLIC_EMAIL=${NEXT_PUBLIC_EMAIL}
ARG NEXT_PUBLIC_PHONE=
ENV NEXT_PUBLIC_PHONE=${NEXT_PUBLIC_PHONE}
ARG NEXT_PUBLIC_WHATSAPP=
ENV NEXT_PUBLIC_WHATSAPP=${NEXT_PUBLIC_WHATSAPP}
ARG NEXT_PUBLIC_RESUME_URL=
ENV NEXT_PUBLIC_RESUME_URL=${NEXT_PUBLIC_RESUME_URL}
ARG NEXT_PUBLIC_ADDRESS=
ENV NEXT_PUBLIC_ADDRESS=${NEXT_PUBLIC_ADDRESS}
ARG NEXT_PUBLIC_OFFICE_ADDRESS=
ENV NEXT_PUBLIC_OFFICE_ADDRESS=${NEXT_PUBLIC_OFFICE_ADDRESS}
ARG NEXT_PUBLIC_OFFICE_HOURS=
ENV NEXT_PUBLIC_OFFICE_HOURS=${NEXT_PUBLIC_OFFICE_HOURS}

RUN npm run build

# ---------- Stage 3: runtime (minimal) ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# only what standalone needs (public assets, server, static chunks)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
