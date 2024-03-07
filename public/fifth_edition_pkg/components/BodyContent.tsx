import { ReactElement } from "react";

const abilityTitles = {
  Strength: ["Athletics"],
  Dexterity: ["Acrobatics", "Sleight of Hand", "Stealth"],
  Constitution: [],
  Intelligence: ["Arcana", "History", "Investigation", "Nature", "Religion"],
  Wisdom: ["Animal Handling", "Insight", "Medicine"],
  Charisma: ["Deception", "Intimidation", "Performance", "Persuasion"],
};

const globalBonuses: string[] = [
  "Proficiency Bonus",
  "Passive Perception",
  "Inspiration",
];

const combatBonuses: string[] = [
  "Armor Class", 
  "Initiative",
  "Speed"
]



const GlobalBonusBlock = (props: { stat: String }): ReactElement => {
  const tagId = props.stat.split(" ").join("_").toLowerCase();

  return (
    <>
      <div className="flex flex-col border-x-2 px-2 text-sm">
        <label htmlFor={tagId}> {props.stat} </label>

        <input
          id={tagId}
          pattern="\b([1-9]|[12][0-9]|3[0-2])\b"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity("")
          }
          className="peer box-content p-2 text-center text-xl outline-none invalid:text-red-600"
          maxLength={2}
          size={2}
        />
        <p className=" invisible text-xs text-red-600 peer-invalid:visible">
          Reasonable Numbers only!
        </p>
      </div>
    </>
  );
};

const AbilityScoreBlock = (props: {
  stat: String;
  skills: String[] | [] ;
}): ReactElement => {
  

  return (
    <>
      <div className="col-span-2 row-span-1 mx-2 grid grid-flow-col border-4 border-solid">
        <div className="relative box-border h-36 w-36 border-r-4 border-b-4">
          <input
            id={props.stat.toLowerCase() + "Input"}
            className="absolute right-1 top-1 h-16 w-16 box-content p-2 text-center text-2xl hover:outline-dashed"
            maxLength={2}
            size={2}
            placeholder="8"
          />

          <div className="absolute bottom-0 left-0 text-2xl text-center"> {props.stat} </div>
          <input
            id={props.stat.toLowerCase() + "Modifier"}
            className="absolute top-0 box-border h-12 w-12 text-center text-lg border-8 p-2"
            value="0"
            disabled
          />
        </div>

        <div className="grid-flow-row auto-rows-min md:grid">
          <div>
            <input
              type="checkbox"
              value="trained"
              id={props.stat.toLowerCase() + "Trained"}
            />
            <input
              type="number"
              id={props.stat.toLowerCase() + "SavingThrowMod"}
              className="mx-2 w-10 text-center outline-none"
              maxLength={2}
              
            />
            <label htmlFor={props.stat.toLowerCase() + "Trained"}>
              
              Saving Throws{" "}
            </label>
          </div>
          {props.skills.length > 0
            ? props.skills.map((skill: String) => {
                return (
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      value="trained"
                      id={skill.toLowerCase() + "Trained"}
                    />
                    <input
                      type="text"
                      id={skill.toLowerCase() + "Mod"}
                      className="mx-2 w-10 text-center outline-none"
                      maxLength={2}
                    />
                    <label htmlFor={skill.toLowerCase() + "Trained"}>
                      {skill}
                    </label>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

const CombatScoreBlock = (props: {stat: string}): ReactElement => {
    const tagId = props.stat.split(" ").join("_").toLowerCase()

  return(
    <div className=" col-span-1 box-border border-2" id={tagId}>
      <div className="flex flex-col px-2 text-lg items-center">
        <label htmlFor={tagId} className="py-4"> {props.stat} </label>
        <input id={tagId} placeholder="0" className="box-content p-2 text-center text-xl outline-none h-16 w-16" maxLength={2} size={2}></input>
      </div>
    </div>
  )

}

const VitalsBlock = (props: {stat: string | null}): ReactElement => {
  console.log(props.stat)

  return(
    <>
      <div className="row-start-1 row-span-2 border-2">
            Vitals - HP Max, HP Current
      </div>
      <div className="row-start-3 row-span-2 border-2">
      Total XP, XP to next Level
  
      </div>
      <div className="row-start-5 row-span-4 border-2">
      Any Conditions, Level in Each Class,
        
      </div>

    </>
  )
}

const AttacksBlock = (props: {stat: string}): ReactElement => {

  return(
    <>
      <div className="row-start-1 row-span-2 border-2">
      Weapon Attacks
      </div>
      <div className="row-start-3 row-span-2 border-2">
       Attack Bonuses
      </div>
      <div className="row-start-5 row-span-2 border-2">
      Ammo/Ammo Types
      </div>
      <div className="row-start-7 row-span-2 border-2">
      Alt Attacks
      </div>
    </>
  )
}

// const SpellsBlock = (props: {stat: string}): ReactElement => {

// }

export default function BodyContent() {
  return (
    <div className="border-8 border-solid" id="main-sheet">
      <div className="xs:flex xs:flex-col grid-flow-col grid-cols-4 grid-rows-8 gap-4 md:grid">
          {/* Left Column */}
        <div className="col-span-2 row-span-1 mr-2 grid grid-flow-col grid-cols-3 place-content-baseline p-2 text-center">
          { globalBonuses.map((title, indx) => {
            return <GlobalBonusBlock stat={title} key={indx} />;
          })}
        </div>
        {Object.keys(abilityTitles).map((ability, indx) => {
          return (
            <AbilityScoreBlock
              stat={ability}
              skills={abilityTitles[ability as keyof typeof abilityTitles]}
              key={indx}
            />
          );
        })}

        {/* Right Column */}
        <div className="xs:flex xs:flex-col md:grid auto-cols-max grid-cols-3 grid-flow-col col-span-2 col-start-3 ml-2 border-2 border-solid text-center row-start-1 row-span-1">
         
         { combatBonuses.map((stat, indx) => {
           return  <CombatScoreBlock key={indx} stat={stat} />
         })}
          
        </div>
        
        <div className=" col-start-3 col-span-2 row-span-3 mx-2 grid grid-rows-8 grid-flow-col border-4 rounded-lg"> 
            <VitalsBlock stat={"hey"}/>
        </div>
        <div className=" col-start-3 col-span-2 row-span-2 mx-2 grid grid-rows-8 grid-flow-col border-4 rounded-lg"> 
            <AttacksBlock stat={"hey"} />
        </div>
        <div className=" col-start-3 col-span-2 row-span-2 mx-2 grid grid-flow-col border-4 rounded-lg"> 
            Spells- Spell Slots Available, Special Class Abilities
        </div>
        
      </div>
    </div>
    
  );
}
