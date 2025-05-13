import { useState } from "react";
import { Language } from "../types";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import Dropdown from "../components/Dropdown";

export const PublicView = () => {
  const { keywords } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentLang, setCurrentLang] = useState(Language.FA);

  const filtered = keywords.filter(k =>
    k.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    Object.values(k.translations).some(t => t.toLowerCase().includes(searchTerm))
  );


  return (
    <div style={{ backgroundColor: 'white', borderRadius: "10px", minWidth: "50vw" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: '8px',gap:"8px" }}>
        <input
          className="input-box"
          style={{flex:1}}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Dropdown setCurrentLang={setCurrentLang} />
      </div>
      <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>

        <motion.div layout>
          {filtered.map(keyword => (
            <motion.div key={keyword.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ border: "1px solid #ccc", marginBottom: '8px', borderRadius: '6px', padding: '8px' }}>
                <h5>{keyword.key}</h5>
                <p style={{ color: "gray", fontSize: " 0.7rem" }}>{keyword.translations[currentLang as keyof typeof keyword.translations] || "No translation yet"}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};