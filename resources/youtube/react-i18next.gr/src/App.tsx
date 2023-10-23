// @ts-nocheck
import "./styles.css";
// npm install react-i18next i18next --save
// npm i react-i18next i18next
import React, { useState, Suspense } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation, Trans } from "react-i18next";
import Page from "./Page";

const enTrans = { translation: { 
  // In the case of => count: 1
  products: "You have {{ items }} item on your basket.", 
  // In the case of => count: 2+
  products_other: "You have {{ items }} items on your basket.", 
  // In the case of => count: 0 (Optional)
  products_zero: "You have {{ items }} #item# on your basket.", 
  choose: "Choose Language: ", welcome: "Welcome to React!", title: "Learning how to translate React apps." } }
const grTrans = { translation: {
  products: "Έχετε {{ items }} προϊόν στο καλάθι σας.", 
  products_other: "Έχετε {{ items }} προϊόντα στο καλάθι σας.", 
  choose: "Επιλέξτε γλώσσα: ", 
  welcome: "Καλώς Ήλθατε στην React!", title: "Μαθαίνοντας μετάφραση στις εφαρμογές React. " }  }
const deTrans = { translation: { welcome: "Willkommen in React" }}
// import resources from "./translations";

i18n
// .use( PLUGIN_NAME1 )
// .use( PLUGIN_NAME2 )
.use(initReactI18next)
.init({
  // resources
  resources: {
    en: enTrans,
    gr: grTrans,
    de: deTrans,
    fr: {}
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})

export default function App() {

  const [ items, setItems ] = useState(0);

  const { t } = useTranslation();

  const changeLang = (e: React.FormEvent<HTMLSelectElement>) =>{
    const element = e.target as HTMLSelectElement;
    console.log(element.value);
    i18n.changeLanguage(element.value); // Switch Language
  }
  return (
    // <Suspense fallback={<Loading />}>
    <Suspense fallback="Loading...">
      <div className="App">
        <label htmlFor="lang">{ t('choose') }</label>
        <select id="lang" onChange={changeLang}>
          <option value="en">English</option>
          <option value="gr">Ελληνικά</option>
          <option value="de">Deutsch</option>
        </select>
        <h6>React-i18next</h6>
        <h1>{ t('welcome') }</h1>
        <h3>{ t('title') } </h3>
        <hr />
        <h1>
          <Trans>welcome</Trans>
        </h1>
        <h3>
          <Trans>title</Trans>
        </h3>
        <mark>  
          <Trans count={items} values={{items}}>products</Trans>
        </mark>  

        <button onClick={()=> setItems(items+1)}>Buy</button>
        <p>Items: { items }</p>
        <p>{ t('products', { count: items, items }) }</p>
        {/* <p>{ t('foo') } </p> */}
        <Page />
      </div>
    </Suspense>
  );
}
