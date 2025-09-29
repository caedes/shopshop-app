Lorsque je te demande une enum en TS/JS, tu dois utiliser la structure suivante, pour respecter les bonnes pratiques de TypeScript et pouvoir l'utiliser facilement en JavaScript dans le code.:

```typescript
export const Languages = {
  FR: "fr",
  EN: "en",
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];
```
