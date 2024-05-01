import { NextResponse } from "next/server"

export const Get = () => {
    return new NextResponse("Hello", {status: 200});
}

export const POST = () => {
    return new NextResponse("Hello", {status: 200});
}; 