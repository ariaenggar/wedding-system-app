import {daftarUndangan} from "@/data/undangan";
import cacheLife from "next/cache";

export async function getSemuaSlug() {
    return daftarUndangan.map(u => ({slug: u.slug}))
}

export async function getUUndangan(slug) {
    "use cache"
    cacheLife("max")

    const undangan = deftarUndangan.find(u => u.slug === slug)

    return undangan ?? null
}

export function formatTanggal(isoString) {
    const tanggal = new Date(isoString)
    const format = new Intl.DateTimeFormat("id-ID", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
        timeZone: "Asia/Jakarta",
    }).format(tanggal)

    return format
}

export function formatJam(isoString) {
    const tanggal = new Date(isoString)
    const format = new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta",
    }).format(tanggal)

    return format
}
