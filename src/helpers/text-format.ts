export function formatSubtitle(subtitle: string): string {
    // Reemplazar guiones con espacios
    const replacedSubtitle = subtitle.replace(/-/g, ' ');

    // Capitalizar primera letra
    const formattedSubtitle = replacedSubtitle.charAt(0).toUpperCase() + replacedSubtitle.slice(1);

    return formattedSubtitle;
}