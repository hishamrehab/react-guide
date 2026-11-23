import { Button } from "./components/ui/button"
// import { Card } from "./components/ui/card"
import { CardDemo } from "./CardDemo"
import PaginationDemo from "./PaginationDemo"

const App = () => {
  return (
    <div>
      <Button variant="default">Button</Button>
      <CardDemo />
      <PaginationDemo /> 
    </div>
  )
}

export default App