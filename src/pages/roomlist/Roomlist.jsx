import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import './roomlist.css'
import Topbar from '../../components/topbar/Topbar'
import { DateRange } from 'react-date-range'
import { format, setDate} from 'date-fns'
import RoomItem from '../../components/roomitem/RoomItem'
import Searchbar from '../../components/searchbar/Searchbar'


const Roomlist = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] =useState(false)
    const [options, setOptions] =useState(location.state.options)

    //navigate
    const navigate = useNavigate()

    // handleSearch 검색
    const handleSearch = () => {
        navigate("/rooms",{state:{destination,date,options}});
        console.log({state:{destination,date,options}})
    } 

    // 인원 선택
    const [openOptions, setOpenOptions] = useState(false)

    // 증가 감소 함수
    const handleOption = (name, operation) =>{
        setOptions(prev=>{return{
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
        }})
    }

    // open 하면 다른 건 닫히게
    const handleDate = () => {
        setOpenDate(!openDate)
        openOptions ? setOpenOptions(!openOptions) : setOpenOptions(openOptions)
    }

    const handleOptions = () => {
        setOpenOptions(!openOptions)
        openDate ? setOpenDate(!openDate) : setOpenDate(openDate)
    }

    
  return (
    <>
        <Topbar/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="listTitle">ㅁㄴㅇㄹ</h1>
                    <div className="listItem">
                        <label>목적지</label>
                        <input placeholder={destination} type="text" onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="listItem">
                        <label>여행 기간</label>
                        <span onClick={handleDate}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            onChange={(item) =>setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                        />}
                    </div>
                    <div className="listItem">
                        <label>인원 수</label>
                        <span onClick={handleOptions} className="headerSearchText">{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optioncounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                    <span className="optioncounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optioncounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                    <span className="optioncounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optioncounter">
                                    <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                    <span className="optioncounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <button onClick={handleSearch}>재검색</button>
                </div> {/* 검색창 끝 */}

                <div className="listRooms">
                    <h1 className="listRoomsTitle">객실</h1>
                    <RoomItem />
                    <RoomItem />
                    <RoomItem />
                    <RoomItem />
                </div>
            </div>
        </div>
    </>
  )
}

export default Roomlist