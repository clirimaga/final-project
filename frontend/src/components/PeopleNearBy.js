import './components.css'
import Navigator from './Navigator';


function PeopleNearBy() {
    return(
        <div>
 
            <Navigator />
 
            <select className='nearBySelect'>
                <option value="500m">500m</option>
                <option value="1km">1km</option>
                <option value="2km">2km</option>
                <option value="4km">4km</option>
                <option value="8km">8km</option>
                <option value="16km">16km</option>
                <option value="32km">32km</option>
                <option value="64km">64km</option>
            </select>

                <div className='nearByCard'>
                    <div className='nearByTop'>
                        <div className='nearByData'>
                            <h5>name:`${undefined}`, distance:`${undefined}` away</h5>
                            <button onClick={undefined} className='messageButton'>Send message</button>
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