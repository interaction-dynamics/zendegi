<h1 align="center">
  Zendegi
</h1>

## Getting Started

1. install [vercel CLI](https://vercel.com/docs/cli)
2. be sure you have a vercel account linked to the project

```bash
vercel env pull .env.local

pnpm dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native-events`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/) for zendegi events
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
