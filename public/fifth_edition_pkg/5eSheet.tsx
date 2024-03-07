import BodyContent from "./components/BodyContent"
import PageFooter from "./components/PageFooter"
import PageHeader from "./components/PageHeader"

function FifthEdSheet() {
  
    return (
      <div className="bg-stone-100 flex flex-row">

      {/* Header Section */}
      <PageHeader />

      {/* Body Content */}
      <BodyContent /> 

      {/* Footer Section */}
      <PageFooter />

      </div>
    ) 
    
  }
   
  export default FifthEdSheet