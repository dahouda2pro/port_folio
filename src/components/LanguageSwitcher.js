import React from 'react';
import styled from 'styled-components';
const Controls=styled.div`display:flex;gap:5px;button{border:1px solid #dce5f0;background:#fff;color:#52647b;border-radius:7px;padding:7px 9px;font-size:12px;font-weight:800;cursor:pointer}button[aria-pressed="true"]{background:#2468c7;color:#fff;border-color:#2468c7}`;
export default function LanguageSwitcher({value,onChange}){return <Controls aria-label="Select language">{['FR','EN','KR'].map(code=><button key={code} type="button" aria-label={code==='FR'?'Français':code==='EN'?'English':'한국어'} aria-pressed={value===code} onClick={()=>onChange(code)}>{code}</button>)}</Controls>;}
