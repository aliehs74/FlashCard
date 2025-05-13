import { motion } from "framer-motion";
import { Language } from '../types';
import { DraggableList } from "../components/DraggableList";
import {  useState } from "react";
import { useAppContext } from "../context/AppContext";
import { SortableItem } from "../components/SortableItem";
import Dropdown from "../components/Dropdown";
import Translationinput from "../components/Translationinput";
import Divider from "../components/Divider";

export const Dashboard = () => {
  const { keywords, addKeyword, updateTranslation } = useAppContext();
  const [newKey, setNewKey] = useState("");
  const [currentLang, setCurrentLang] = useState(Language.FA);

  const handleAdd = () => {
    const keywordSet = new Set(keywords.map(keyword => keyword.key));
    if (newKey.trim() && /^[a-zA-Z]+$/.test(newKey) && !keywordSet.has(newKey)) {
      addKeyword(newKey);
      setNewKey("");
    alert("کلمه با موفقیت اضافه شد");
    } else if (keywordSet.has(newKey)) {
      alert("کلمه وارد شده تکراری است");
    } else {
      alert("فقط کارکتر انگلیسی مجاز است");
    }
  };


  return (
    <div className="center" style={{ backgroundColor: 'white', borderRadius: "10px", minWidth: "50vw", padding: '16px' }}>

      <div className="page-header">
        <h3>Translation Management</h3>
        <Dropdown setCurrentLang={setCurrentLang} className='' />
      </div>

      <section style={{ maxHeight: '60vh', overflowY: 'auto', padding: '8px' }}>
        <DraggableList >
          {keywords.map((keyword) => (
            <div style={{ marginBottom: '8px' }} key={keyword.id + 'container'}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} key={keyword.id + 'div'}>

                <SortableItem key={keyword.id} id={keyword.id}>
                  <motion.div key={keyword.id + 'motion.div'} layout style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <input value={keyword.key} key={keyword.id + 'disabledInput'} disabled className="input-box" style={{ backgroundColor: 'transparent', borderColor: 'transparent', textAlign: 'left', padding: 0 }} />
                  </motion.div>
                </SortableItem>

                {Object.values(Language).map(lang => <Translationinput keyword={keyword} key={keyword.id + lang} lang={lang} currentLang={currentLang} updateTranslation={updateTranslation} />)}

              </div>
              <Divider />
            </div>
          ))}
        </DraggableList>
      </section>


      <div className="add-new-keyword">
        <input
          className="input-box"
          style={{ flex: 1 }}
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          placeholder="New keyword in english"
          pattern="[A-Za-z]+"
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd} className="add-button">+ Add Keyword </button>
      </div>
    </div>
  );
};