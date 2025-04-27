# Lyrics Finder

A modern web application built with Next.js that allows users to search for and display song lyrics quickly and easily.

## Features

- **Simple Search Interface**: Search for lyrics by artist name and song title
- **Real-time Results**: Get lyrics immediately after submitting your search
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Minimalist interface with a focus on readability

## Technology Stack

- **Frontend Framework**: Next.js 15.3.1
- **UI Library**: React 19
- **Styling**: CSS Modules
- **Icons**: react-icons
- **API**: Lyrics.ovh API for fetching lyrics data

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a component-based architecture with:
- Reusable UI components in `/app/components`
- Custom React hooks in `/app/hooks`
- Global and component-specific styles

## How to Use

1. Enter an artist name in the "Artist" field
2. Enter a song title in the "Song Title" field
3. Click "Find Lyrics" to search
4. View the lyrics displayed below the search form

## Learn More

This project was built with Next.js. To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
