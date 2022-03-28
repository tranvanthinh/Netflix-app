import "./ListItem.scss"
import { useState } from "react"
import { IoMdAdd, IoMdPlay } from 'react-icons/io'
import { BiLike, BiDislike } from 'react-icons/bi'


export default function ListItem({ index }) {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://rr2---sn-p5qddn7r.googlevideo.com/videoplayback?expire=1648493512&ei=aK9BYs0Jk8SGBvD0nbAG&ip=198.181.163.103&id=o-AM1tH_AFLEO-ej7js8QPnY8AhVITraL7gFIH29ZtHZPL&itag=22&source=youtube&requiressl=yes&mh=pX&mm=31%2C29&mn=sn-p5qddn7r%2Csn-p5qlsnrr&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=606250&spc=4ocVC8_ghQXgnxGaenD9d7dtXPmn&vprv=1&mime=video%2Fmp4&ns=z4JmuJ3fUv_cBttmd-H75U4G&cnr=14&ratebypass=yes&dur=176.053&lmt=1629842503577282&mt=1648471492&fvip=2&fexp=24001373%2C24007246&c=WEB&txp=5432432&n=Hi2_MqsT9thm5Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgIKrqwXO0qzcQN5iDB-kZNgzlgrKEJU3GtYuYnGbd-2cCICYd8jYMhNcNtD2QSQ4KKNRjbYoTUxSVuNLy2xVoyb6K&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANLZefKsGYHwDUws33wB-K0TgymFTQiD0z-e2ekmPsM1AiBHvC-_YKj5FFMpzQb_NifU98s2cfBpvGgw0Ta5WCpKBg%3D%3D&title=Ng%C6%B0%E1%BB%9Di%20Nh%E1%BB%87n%3A%20Kh%C3%B4ng%20C%C3%B2n%20Nh%C3%A0%20%7C%20Official%20Teaser%20Trailer"

    return (
        <div className="listitem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://www.elleman.vn/wp-content/uploads/2021/12/20/208672/Spider-Man-No-Way-Home_elleman_7.jpg"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <IoMdPlay className="icon" />
                            <IoMdAdd className="icon" />
                            <BiLike className="icon" />
                            <BiDislike className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>2 or 58 mins</span>
                            <span className="limit">+16</span>
                            <span>2021</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip
                            Lorem ipsum dolor sit amet, consectetur adip
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
