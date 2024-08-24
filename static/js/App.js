import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { SessionProvider } from "./contexts/session";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/header";
import Navbar from "./components/layout/navbar/navbar";

import Home from "./pages/home";
import Yo from "./pages/yo";
import PC from "./pages/pc";
import Tourneys from "./pages/tourneys";
import Winners from "./pages/winners";
import Stream from "./pages/stream";

import Jobs from "./pages/jobs";
import JobEntries from "./components/dashboard/jobs/job-participantes";

import Login from "./pages/login";
import Admin from "./pages/admin";
import Proximamente from "./pages/proximamente";
import Error404 from "./pages/_404";

import Noticia from "./pages/noticias/[slug]";
import NoticiaNew from "./pages/noticias/new";
import NoticiaEdit from "./pages/noticias/edit";

import Sorteos from "./pages/sorteos/sorteos";
import SorteoNew from "./pages/sorteos/new";
import SorteoEdit from "./pages/sorteos/edit";
import Sorteo from "./pages/sorteos/[id]";
import SorteoCallback from "./pages/sorteos/sorteo_callback";
import SorteoParticipants from "./pages/sorteos/participantes";

import Events from "./pages/events/events";
import EventParticipants from "./pages/events/participantes";

import theme from "./theme";
import "./styles/animations.css";

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true,
});

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <SessionProvider>
          <BrowserRouter>
            <Header />
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/yo" element={<Yo />}></Route>
              <Route path="/pc" element={<PC />}></Route>
              <Route path="/torneos" element={<Tourneys />}></Route>

              <Route path="/postulaciones" element={<Jobs />}></Route>
              <Route path="/postulaciones/:id/:page" element={<JobEntries />}></Route>

              <Route path="/eventos" element={<Events />}></Route>
              <Route path="/eventos/ganadores" element={<Winners />}></Route>
              <Route
                path="/eventos/:id/participantes"
                element={<EventParticipants />}
              ></Route>
              <Route
                path="/eventos/:id/participantes/:page"
                element={<EventParticipants />}
              ></Route>

              <Route path="/stream" element={<Stream />}></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/proximamente" element={<Proximamente />}></Route>

              <Route path="/sorteos" element={<Sorteos />}></Route>
              <Route path="/sorteos/new" element={<SorteoNew />}></Route>
              <Route
                path="/sorteos/callback"
                element={<SorteoCallback />}
              ></Route>
              <Route path="/sorteos/:id" element={<Sorteo />}></Route>
              <Route path="/sorteos/:id/edit" element={<SorteoEdit />}></Route>
              <Route
                path="/sorteos/:id/participantes"
                element={<SorteoParticipants />}
              ></Route>
              <Route
                path="/sorteos/:id/participantes/:page"
                element={<SorteoParticipants />}
              ></Route>

              <Route path="/noticias/new" element={<NoticiaNew />}></Route>
              <Route path="/noticias/:slug" element={<Noticia />}></Route>
              <Route
                path="/noticias/:slug/edit"
                element={<NoticiaEdit />}
              ></Route>

              <Route path="*" element={<Error404 />}></Route>
            </Routes>
          </BrowserRouter>
        </SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

export default App;
