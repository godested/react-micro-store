import t,{createContext as e,useReducer as r,useContext as n}from"react";const c=e({state:{},dispatch:()=>{}});function o(e){const{initialState:n={},children:o,reducer:i,context:a}=e,s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(r[n[c]]=t[n[c]])}return r}(e,["initialState","children","reducer","context"]),[l,p]=r(i,n),u=a||c;return t.createElement(u.Provider,Object.assign({value:{state:l,dispatch:p}},s),o)}function i(t,e,r){const{state:o,dispatch:i}=n(r||c),a=t?t(o):o,s=e?e(i):{dispatch:i};return Object.assign({},a,s)}export{o as MicroStoreProvider,i as useMicroStore};
