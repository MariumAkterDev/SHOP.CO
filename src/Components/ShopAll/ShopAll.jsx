import React, { useState } from 'react'
import './ShopAll.css'
import { RiEqualizer3Line } from 'react-icons/ri'
import ProductData from './ProductData/ProductData'


const ShopAll = () => {
    const [select , setSelect]=useState('')
    const [filter , setfilter]=useState('')
    const [filterShow, setFilterShow] = useState(false)
    
    // -----------------handle fun
     const handleFilter = ()=>{
        setFilterShow(!filterShow)
     }

  return (
    <section>
        <div className="container">
            <div className="Main_Shop relative md:px-[0]">
                <RiEqualizer3Line className="filterIcon" onClick={handleFilter}/>
                <div className="shops_side_bar">
                    <div className={`Shop_Side_bar ${filterShow ? 'block' : 'hidden'} `}>
                        <div className="filter">
                            <h2 className='filterH2' >Filters</h2>
                            <RiEqualizer3Line className='Sidebar' />
                        </div>
                        <hr/>
                        <div className="Filter_catagories">
                            <div className="filter_menue">
                                <h3 className='filteMenurH3' >T-shirts</h3>
                                <input type="checkbox"  id="checkbox1" checked={filter === "checkbox1"}
                                    onChange={() => setfilter("checkbox1")} className='check_box' />
                            </div>
                            <div className="filter_menue">
                                <h3 className='filteMenurH3'>Shorts</h3>
                                <input type="checkbox"  id="checkbox2" checked={filter === "checkbox2"}
                                    onChange={() => setfilter("checkbox2")} className='check_box' />
                            </div>
                            <div className="filter_menue">
                                <h3 className='filteMenurH3'>Shirts</h3>
                                <input type="checkbox"  id="checkbox3" checked={filter === "checkbox3"}
                                    onChange={() => setfilter("checkbox3")} className='check_box' />
                            </div>
                            <div className="filter_menue">
                                <h3 className='filteMenurH3'>Hoodie</h3>
                                <input type="checkbox"  id="checkbox4" checked={filter === "checkbox4"}
                                    onChange={() => setfilter("checkbox4")} className='check_box' />
                            </div>
                            <div className="filter_menue">
                                <h3 className='filteMenurH3'>Jeans</h3>
                                <input type="checkbox"  id="checkbox5" checked={filter === "checkbox5"}
                                    onChange={() => setfilter("checkbox5")} className='check_box' />
                            </div>
                        </div>
                      
                        <div className="Shop_size">
                            <div className="size">
                                <h2 className='sizeH2' >Size</h2>
                            </div>
                            <hr />
                            <div className="size_button">
                                <button className='sizeBtn'>XX-Small</button>
                                <button className='sizeBtn'>X-Small</button>
                                <button className='sizeBtn'>Small</button>
                                <button className='sizeBtn'>Medium</button>
                                <button className='sizeBtn'>Large</button>
                                <button className='sizeBtn'>XX-Large</button>
                                <button className='sizeBtn'>3X-Large</button>
                                <button className='sizeBtn'>4X-Large</button>
                            </div>
                        </div>
                       
                        <div className="drees_style">
                            <div className="Style_main">
                                <h2 className='styleH2'>Dress Style</h2>
                            </div>
                            <hr />
                            <div className="Style_catagories">
                                <div className="filter_menue">
                                    <h3>Casual</h3>
                                    <input type="checkbox"  id="checkbox1" checked={select === "checkbox1"}
                                    onChange={() => setSelect("checkbox1")} className='check_box' />
                                </div>
                                <div className="filter_menue">
                                    <h3>Formal</h3>
                                    <input type="checkbox"  id="checkbox2" checked={select === "checkbox2"}
                                    onChange={() => setSelect("checkbox2")} className='check_box' />
                                </div>
                                <div className="filter_menue">
                                    <h3>Party</h3>
                                    <input type="checkbox"  id="checkbox3" checked={select === "checkbox3"}
                                    onChange={() => setSelect("checkbox3")} className='check_box' />
                                </div>
                                <div className="filter_menue">
                                    <h3>Gym</h3>
                                    <input type="checkbox"  id="checkbox4" checked={select === "checkbox4"}
                                    onChange={() => setSelect("checkbox4")} className='check_box' />
                                </div>
                            </div>
                        </div>
                        <div className="Main_filter_button">
                            <button className='mainFilterBtn' >Apply Filter</button>
                        </div>
                    </div>
                </div>
                <div className="shop_products">
                    <div className="main_products">
                        <h2 className='shop_catagory Title'>Casual</h2>
                    </div>
                    {/* ------------------------------------- Single Product ------------------------- */}
                    <div className="card">
                       <ProductData/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopAll