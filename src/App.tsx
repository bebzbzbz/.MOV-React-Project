import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Intro from "./pages/Intro"
import Home from "./pages/Home"
import AllMovies from "./pages/AllMovies"
import GenreList from "./pages/GenreList"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Intro/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/movies" element={<AllMovies/>}/>
      <Route path="/:genreID" element={<GenreList/>}/>
    </Route>
  ))

  return (
    <main className="min-h-screen">
  <RouterProvider router={router}/>
    </main>
  )
}

export default App
