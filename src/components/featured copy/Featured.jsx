import "./Featured.scss"
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsInfoCircle } from 'react-icons/bs'
import { BsInfoCircle } from 'react-icons/bs'


export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                    </select>
                </div>
            )}
            <img
                width="100%"
                src="https://www.gamelegends.it/wp-content/uploads/2022/01/spider-man-no-way-home-1.jpg"
                alt=""
            />
            <div className="info">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Spider-Man-Logo.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip
                    Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip
                    Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip
                    Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
                </span>
                <div className="buttons">
                    <button className="play">
                        <BsPlayCircleFill />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <BsInfoCircle />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
