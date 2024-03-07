

export default function PageHeader() {
    return (
        <div className="border-solid border-8 justify-between" id="header-section"> 
            <div className="md:grid grid-rows-3 md:grid-flow-col xs:flex xs:flex-col" >
                <div className="p-4 input-group row-span-3 " id="character-name">
            <label htmlFor="character-name" >Character Name: </label>
            <br/>
            <input type="text" id="character-name" className=" border-black border-solid border" size={30}/>
          </div>
          <div className=" p-4 col-start-2 row-span-1" id="char-race">
            <label htmlFor="char-race" className="pr-3">Race:</label>
            <br/>
            <input className="border-black border-solid border " type="text" id="char-race" />
          </div>
          <div className="p-4 col-start-2 row-span-1" id="char-class">
            <label htmlFor="char-class" className="pr-3">Class(es):</label>
            <br/>
            <input type="text" id="char-class" className=" border-black border-solid border" />
          </div>
           <div className="p-4 col-start-3 row-span-1" id="char-alignment">
            <label htmlFor="char-alignment" className="pr-3">Alignment:</label>
            <br/>
            <input type="text" id="char-alignment" className="border-black border-solid border" />
          </div>
          <div className="p-4 col-start-3 row-span-1" id="char-background">
            <label htmlFor="char-background" className="pr-3">Background:</label>
            <br/>
            <input type="text" id="char-background" className="border-black border-solid border" />
          </div>
        </div>
      </div>
    )
}