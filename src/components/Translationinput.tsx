import { useEffect, useState } from 'react'
import { Keyword, Language } from '../types'

const Translationinput = ({ keyword, lang, currentLang, updateTranslation }: { keyword: Keyword, lang: Language, currentLang: Language, updateTranslation: (id: string, language: Language, value: string) => void }) => {
    const [val, setVal] = useState(keyword.translations[lang]);

    useEffect(() => {
        updateTranslation(keyword.id, lang, val)
    }, [val])

    return currentLang === lang ? (
        <input
            className="input-box"
            key={lang}
            style={{ backgroundColor: val === '' ? "rgba(255,127,127,255)" : '', borderColor: 'transparent', color: "black", zIndex: 100 }}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder={lang}
        />
    ) : null;
    
}

export default Translationinput