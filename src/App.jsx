import './App.css'
import EmployeeList from "./EmployeeList.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"

function App() {

  return (
    <>
    <div className="flex">
      <header>
        <Header />
      </header>
      <main>
        <EmployeeList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  )
}

export default App
