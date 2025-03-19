import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

    </Route>
  ))

  return (
    <main>
  <RouterProvider router={router}/>
    </main>
  )
}

export default App
