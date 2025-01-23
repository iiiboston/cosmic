# AI Image Generator with Next.js

This project uses Next.js and Replicate API to generate images based on text prompts.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/iiiboston/cosmic.git
cd cosmic
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
REPLICATE_API_TOKEN=your_replicate_api_token
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Features
- Text-to-image generation using Replicate API
- Real-time image preview
- Responsive design

## Environment Variables
Required environment variables:
- `REPLICATE_API_TOKEN`: Your Replicate API token

## Deployment
This app can be deployed on Vercel. Make sure to:
1. Set up the `REPLICATE_API_TOKEN` in your Vercel project settings
2. Configure image domains in `next.config.js`

## Tech Stack
- Next.js 14
- React
- Replicate API
- Tailwind CSS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
