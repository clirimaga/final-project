import './components.css'
import Navigator from './Navigator';



function PeopleNearBy() {
    return(
        <div>
            <select className='nearBySelect'>
                <option value="5km">5km</option>
                <option value="10km">10km</option>
                <option value="15km">15km</option>
                <option value="+20km">+20km</option>
            </select>

                <div className='nearByCard'>
                    <div className='nearByTop'>
                        <div className='nearByData'>
                            <h5>name:`${undefined}`, distance:`${undefined}` away</h5>
                            <button onClick={undefined} className='messageButton '>Send message</button>
                        </div>
                        <p>${}</p>
                    </div>
                    <div className='nearByImage'>
                        <img className='nearByImage'/>
                    </div>
                </div>
        </div>
    );
}
export default PeopleNearBy;