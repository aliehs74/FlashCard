import { Language } from "../types"

const Dropdown = ({ setCurrentLang,className }: { setCurrentLang: (lang: Language) => void,className?:string }) => {

    return (
        <select className={`dropdown ${className}`} defaultValue={Language.FA} onChange={(e) => setCurrentLang(e.target.value as Language)}>
            {Object.values(Language).map(lang => (
                <option key={lang} value={lang}>{lang}</option>
            ))}
        </select>
    )
}

export default Dropdown