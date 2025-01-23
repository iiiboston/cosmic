import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      console.error('Missing REPLICATE_API_TOKEN');
      throw new Error('REPLICATE_API_TOKEN is not configured');
    }

    const { prompt } = await request.json();
    console.log('Received prompt:', prompt);

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    console.log('Making request to Replicate...');
    
    // Create the prediction first
    const prediction = await replicate.predictions.create({
      version: "4ad44069012e217c2507981a15d71e9a16a67e256bb2dd37cb5b8d91cb790dc9",
      input: {
        prompt: prompt,
        model: "dev",
        go_fast: false,
        lora_scale: 1,
        megapixels: "1",
        num_outputs: 1,
        aspect_ratio: "1:1",
        output_format: "webp",
        guidance_scale: 3,
        output_quality: 80,
        prompt_strength: 0.8,
        extra_lora_scale: 1,
        num_inference_steps: 28
      }
    });

    console.log('Prediction created:', prediction);

    // Wait for the prediction to complete
    const finalPrediction = await replicate.wait(prediction);
    console.log('Final prediction:', finalPrediction);

    if (!finalPrediction.output || !Array.isArray(finalPrediction.output)) {
      throw new Error(`Invalid prediction output: ${JSON.stringify(finalPrediction)}`);
    }

    const imageUrl = finalPrediction.output[0];
    console.log('Image URL:', imageUrl);

    if (!imageUrl || typeof imageUrl !== 'string') {
      throw new Error(`Invalid image URL: ${JSON.stringify(imageUrl)}`);
    }

    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error
    });
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate image';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 