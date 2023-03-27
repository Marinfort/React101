import "./componentdesign/item.css"
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; 
import "./componentdesign/section1com.css"
import "./App.css"
const Tile = () => {

  const design = { color: 'green', textAlign: 'center', fontSize: '30px' }
  return <h1 style={design}>Account record program</h1>
}

const Tile2 = () => {
  return <p>--- บันทึกข้อมูลรายรับรายจ่าย --- </p>
}

const Item2 = (props) => {
  const {title , amount} = props
  return <li className="item"> {title}<span> -{amount}</span></li>

}

Item2.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

let Transaction = () => {
  const data = [
    {title: "Pun", amount:9000},
    {title: "Ohm ", amount:4000},
    {title: "Tiji ", amount:3000},
    {title:"IM", amount:3000}
  ]
  return (<ul>
    {//data.map(( element )=>{
      //return  <Item2 title = {element.title} amount = {element.amount}/>

    //})
    }

    {data.map(( element )=>{
      return  <Item2 {...element} key = {uuidv4()}/>

    })
    }

    <Item2 title = {data[0].title} amount = {data[0].amount} />
    <Item2 title = {data[1].title} amount = {data[1].amount} />
    <Item2 title = {data[2].title} amount = {data[2].amount} />
    
    <li> ค่ากิน <span> -200</span></li>
    <li> ค่าเช่าบ้าน <span> -200</span></li>
  </ul>);
}

const Item = () => {
  const name = "ค่าโรงแรม"
  const cost = 6000
  return <li className="item"> {name}<span> -{cost}</span></li>

}


// component แม่
function App() {
  return (
    //component ลูก
    <div className="container">
    <section className="section1">
      <Tile />
      <Tile2 />
      <Transaction />
    </section>
    </div>


  );
}



export default App;