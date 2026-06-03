import { lazy } from "react";

// Главная страница (НЕ Header!)
export const Home = lazy(() => import("../components/Home"));

// Контакты
export const Contact = lazy(() => import("../components/page/Contac"));

// Наши проекты
export const Nasha = lazy(() => import("../components/page1/nasha"));
export const Comanda = lazy(() => import("../components/page2/Comanda"));
export const Dom = lazy(() => import("../components/page3/Dom"));
export const OdnaDom = lazy(() => import("../components/page4/OdnaDom"));
export const NotFound = lazy(() => import('../NotFout'))