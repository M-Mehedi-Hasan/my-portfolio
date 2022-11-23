import { Contact, Footer, Navbar, Portfolio, Profile, Skills } from './components'

const App = () => {
  return (
    <div className='min-h-screen bg-[#0F1624] max-w-[1280px] w-full mx-auto'>

      <Navbar />
      <Profile />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />  

    </div>
  )
}

export default App