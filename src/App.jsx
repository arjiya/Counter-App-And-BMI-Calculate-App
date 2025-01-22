import './App.css'
import BmiCalculator from './components/BmiCalculator'
import Body from './components/Body'
import NavBar from './components/NavBar'
import Card from './components/Card'

function App() {

  return (
    <>
    
    <NavBar/>
    
    <div className="flex gap-2">
      <Body/>
      
  
    </div>
    <section>
    <BmiCalculator/>
    </section>
    {/* <section>
    <Card title="firstnumber"/>
    <Card title="secondnumber"/>
    <Card title="thirdnumber"/>
    <Card title="fourthnumber"/>
    </section> */}
    </>
  )
}

export default App
