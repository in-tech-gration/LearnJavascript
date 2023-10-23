import { useTranslation } from 'react-i18next';

export default function Page(){
  const { t } = useTranslation();
  return (
    <h2>Page: { t('welcome') }</h2>
  )
}