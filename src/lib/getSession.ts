import { cookies } from "next/headers";
import { scalekit } from "./scalekit";

export async function getSession() {
    const session = await cookies()
    const token = session.get("access_token")?.value
    if (!token) {
        return null
    }
    try {
        const result: any = await scalekit.validateToken(token)
        const user = await scalekit.user.getUser(result.sub)
        return user
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error)
        if (message.includes("\"exp\" claim") || message.includes("ScalekitValidateTokenFailureException")) {
            return null
        }
        console.error("Unexpected session validation error:", error)
        return null
    }
}