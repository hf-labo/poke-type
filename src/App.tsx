import React from 'react'
import './App.css'
import NormalImage from './assets/images/normal.webp'
import FireImage from './assets/images/fire.webp'
import WaterImage from './assets/images/water.webp'
import GrassImage from './assets/images/grass.webp'
import ElectricImage from './assets/images/electric.webp'
import IceImage from './assets/images/ice.webp'
import FightingImage from './assets/images/fighting.webp'
import PoisonImage from './assets/images/poison.webp'
import GroundImage from './assets/images/ground.webp'
import FlyingImage from './assets/images/flying.webp'
import PsychicImage from './assets/images/psychic.webp'
import BugImage from './assets/images/bug.webp'
import RockImage from './assets/images/rock.webp'
import GhostImage from './assets/images/ghost.webp'
import DragonImage from './assets/images/dragon.webp'
import DarkImage from './assets/images/dark.webp'
import SteelImage from './assets/images/steel.webp'
import FairyImage from './assets/images/fairy.webp'

type TypeInfo = {
  id: number,
  name: string,
  img: any,
  compatibility: Array<Number>,  // 0:□ 1:○ 2:△ 3:×
}

const App: React.FC = () => {
  const [current, setCurrent] = React.useState<number>(1)
  const types: Array<TypeInfo> = [
    {id: 1, name: 'ノーマル/Normal', img: NormalImage, 
      compatibility: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 2, 0]
    }, 
    {id: 2, name: 'ほのお/Fire', img: FireImage, 
      compatibility: [0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0]
    }, 
    {id: 3, name: 'みず/Water', img: WaterImage, 
      compatibility: [0, 1, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0]
    }, 
    {id: 4, name: 'でんき/Electric', img: ElectricImage, 
      compatibility: [0, 0, 1, 2, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 2, 0, 0, 0]
    }, 
    {id: 5, name: 'くさ/Grass', img: GrassImage, 
      compatibility: [0, 2, 1, 0, 2, 0, 0, 2, 1, 2, 0, 2, 1, 0, 2, 0, 2, 0]
    }, 
    {id: 6, name: 'こおり/Ice', img: IceImage, 
      compatibility: [0, 2, 2, 0, 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 2, 0]
    }, 
    {id: 7, name: 'かくとう/Fighting', img: FightingImage, 
      compatibility: [1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 2, 2, 1, 3, 0, 1, 1, 2]
    }, 
    {id: 8, name: 'どく/Poison', img: PoisonImage, 
      compatibility: [0, 0, 0, 0, 1, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 3, 1]
    }, 
    {id: 9, name: 'じめん/Ground', img: GroundImage, 
      compatibility: [0, 1, 0, 1, 2, 0, 0, 1, 0, 3, 0, 2, 1, 0, 0, 0, 1, 0]
    }, 
    {id: 10, name: 'ひこう/Flying', img: FlyingImage, 
      compatibility: [0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, 0]
    }, 
    {id: 11, name: 'エスパー/Psychic', img: PsychicImage, 
      compatibility: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 3, 2, 0]
    }, 
    {id: 12, name: 'むし/Bug', img: BugImage, 
      compatibility: [0, 2, 0, 0, 1, 0, 2, 2, 0, 2, 1, 0, 0, 2, 0, 1, 2, 2]
    }, 
    {id: 13, name: 'いわ/Rock', img: RockImage, 
      compatibility: [0, 1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 1, 0, 0, 0, 0, 2, 0]
    }, 
    {id: 14, name: 'ゴースト/Ghost', img: GhostImage, 
      compatibility: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0]
    }, 
    {id: 15, name: 'ドラゴン/Dragon', img: DragonImage, 
      compatibility: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3]
    }, 
    {id: 16, name: 'あく/Dark', img: DarkImage, 
      compatibility: [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 2]
    }, 
    {id: 17, name: 'はがね/Steel', img: SteelImage, 
      compatibility: [0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1]
    }, 
    {id: 18, name: 'フェアリー/Fairy', img: FairyImage, 
      compatibility: [0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0]
    }
  ]
  const showList = (isAttack: boolean, type: number, compatibility: number) => {
    return (
      <div>
        {
          isAttack ?
            types[type - 1].compatibility.map((m, i) => m !== 0 && m === compatibility ? <img src={types[i].img} alt={types[i].name} /> : <></>) : 
            types.map(t => t.compatibility[type - 1] === compatibility ? <img src={t.img} alt={t.name} /> : <></>)
        }
      </div>
    )
  }
  const select = (id: number) => {
    setCurrent(id)
  }
  return (
    <div className="App">
      <div className="select-list">
        {
          types.map(t => {
            return (
              <button className={current === t.id ? "select" : ""} onClick={() => select(t.id)}>
                <img src={t.img} alt={t.name} />
              </button>
            )
          })
        }
      </div>
      <div className="result">
        <div className="attack">
          <h2>攻撃する側</h2>
          <h3>効果は抜群(○)</h3>
          <div className="description">選ぶべき</div>
          {showList(true, current, 1)}
          <h3>効果はいまひとつ(△)</h3>
          <div className="description">選ばないべき</div>
          {showList(true, current, 2)}
          <h3>無効(×)</h3>
          <div className="description">選んではいけない</div>
          {showList(true, current, 3)}
        </div>
        <div className="defence">
          <h2>防御する側</h2>
          <h3>効果は抜群(○)</h3>
          <div className="description">選ばないべき</div>
          {showList(false, current, 1)}
          <h3>効果はいまひとつ(△)</h3>
          <div className="description">選ぶべき</div>
          {showList(false, current, 2)}
          <h3>無効(×)</h3>
          <div className="description">選ぶべき</div>
          {showList(false, current, 3)}
        </div>
      </div>
    </div>
  )
}

export default App
