import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async() => {
    const cookieLocale = (await cookies()).get("AKANOMA_LOCALE")?.value || "en";
    const locale = cookieLocale;

    return {
        locale,
        messages: (await import(`../language/${locale}.json`)).default,
    }
})