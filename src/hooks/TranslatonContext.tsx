import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    type FC,
    type ReactNode
} from 'react'

interface TranslationContextProps {
    translate: (key: string) => string
    language: string
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined)

export const TranslationProvider: FC<{ children: ReactNode }> = ({ children }) => {
    /**
     * Charge dynamiquement le fichier de traduction JSON depuis le dossier public
     * @param lang
     */
    const loadTranslations = async (lang: string): Promise<Record<string, string>> => {
        const response = await fetch(`/locales/${lang}.json`)
        if (!response.ok) {
            throw new Error(`Impossible de charger les traductions pour la langue : ${lang}`)
        }
        return await response.json()
    }

    /**
     * Récupération du langage du navigateur
     */
    const getBrowserLanguage = (): string => {
        const browserLang = navigator.language.split('-')[0]
        return ['en', 'fr'].includes(browserLang) ? browserLang : 'en'
    }

    const [language] = useState<string>(getBrowserLanguage())
    const [translations, setTranslations] = useState<Record<string, string>>({})

    /**
     * Charge les traductions lors du chargement ou changement de langue
     */
    useEffect(() => {
        loadTranslations(language)
            .then((data) => { setTranslations(data) })
            .catch((error) => {
                console.error(error)
                // Fallback en anglais si erreur
                void loadTranslations('en').then(setTranslations)
            })
    }, [language])

    /**
     * Retourne la clé de traduction correspondante
     * @param key
     */
    const translate = (key: string): string => {
        const result = key.split('.').reduce<string | Record<string, string>>(
            (obj, part) => (typeof obj === 'object' && obj ? obj[part] : ''),
            translations
        )
        return typeof result === 'string' && result ? result : key
    }

    return (
        <TranslationContext.Provider
            value={{
                translate,
                language
            }}
        >
            {children}
        </TranslationContext.Provider>
    )
}

/**
 * Hook pour utiliser la traduction dans les composants
 */
export const useTranslation = (): TranslationContextProps => {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider')
    }
    return context
}
