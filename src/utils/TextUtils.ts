/**
 * Copie une chaîne de caractères dans le presse-papiers.
 * @param text Le texte à copier.
 * @returns Une promesse résolue lorsque le texte est copié avec succès.
 */
export const copyToClipboard = async (text: string): Promise<void> => {
    try {
        await navigator.clipboard.writeText(text)
    } catch (err) {
        console.error('Échec de la copie dans le presse-papiers :', err)
    }
}
