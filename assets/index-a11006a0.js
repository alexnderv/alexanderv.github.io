import{r as l,j as t,c as a,R as d}from"./vendor-9505b41f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="/assets/react-35ef61ed.svg";function f(){const[c,s]=l.useState(0);return t.jsxs("div",{className:"App",children:[t.jsxs("div",{children:[t.jsx("a",{href:"https://vitejs.dev",target:"_blank",rel:"noreferrer",children:t.jsx("img",{src:"/vite.svg",className:"logo",alt:"Vite logo"})}),t.jsx("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:t.jsx("img",{src:u,className:"logo react",alt:"React logo"})})]}),t.jsx("h1",{children:"Vite + React"}),t.jsxs("div",{className:"card",children:[t.jsxs("button",{type:"button",onClick:()=>s(o=>o+1),children:["count is"," ",c]}),t.jsxs("p",{children:["Edit"," ",t.jsx("code",{children:"src/App.tsx"})," ","and save to test HMR"]})]}),t.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}a.createRoot(document.getElementById("root")).render(t.jsx(d.StrictMode,{children:t.jsx(f,{})}));