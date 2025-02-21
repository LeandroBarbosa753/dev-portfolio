import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      success: true,
      message: "hle!",
      data: {
        message: "Mensagem e e-mail enviados com sucesso!",
      },
    },
    { status: 200 }
  );
}
