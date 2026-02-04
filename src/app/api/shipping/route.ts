import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { zipCode } = await request.json();

  if (!zipCode || zipCode.length < 8) {
    return NextResponse.json(
      { error: 'CEP inválido' },
      { status: 400 }
    );
  }

  // Simulated shipping calculation
  const firstDigit = parseInt(zipCode[0]);
  
  // Calculate based on region (simplified)
  let standardPrice = 19.90;
  let expressPrice = 34.90;
  let standardDays = '5-8 dias úteis';
  let expressDays = '2-3 dias úteis';

  // Southeast (faster/cheaper)
  if (firstDigit >= 0 && firstDigit <= 3) {
    standardPrice = 14.90;
    expressPrice = 29.90;
    standardDays = '3-5 dias úteis';
    expressDays = '1-2 dias úteis';
  }
  // South
  else if (firstDigit >= 8 && firstDigit <= 9) {
    standardPrice = 19.90;
    expressPrice = 39.90;
    standardDays = '4-6 dias úteis';
    expressDays = '2-3 dias úteis';
  }
  // Northeast
  else if (firstDigit >= 4 && firstDigit <= 5) {
    standardPrice = 24.90;
    expressPrice = 44.90;
    standardDays = '6-10 dias úteis';
    expressDays = '3-4 dias úteis';
  }
  // North/Center-West
  else {
    standardPrice = 29.90;
    expressPrice = 49.90;
    standardDays = '8-12 dias úteis';
    expressDays = '4-5 dias úteis';
  }

  return NextResponse.json({
    standard: {
      price: standardPrice,
      days: standardDays,
    },
    express: {
      price: expressPrice,
      days: expressDays,
    },
  });
}
