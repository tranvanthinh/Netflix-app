import './Watch.scss';
import { IoMdArrowBack } from 'react-icons/io'



export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <IoMdArrowBack />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://rr8---sn-n02xgoxufvg3-2gbl.googlevideo.com/videoplayback?expire=1648494967&ei=F7VBYoePFeG2x_APosWtiA4&ip=156.146.60.12&id=o-AO7XekqFthhysFiot942Q5V1ahrLakuULb9_I-_VEYDs&itag=22&source=youtube&requiressl=yes&mh=7p&mm=31%2C29&mn=sn-n02xgoxufvg3-2gbl%2Csn-2gb7sn7s&ms=au%2Crdu&mv=m&mvi=8&pl=24&initcwndbps=1155000&spc=4ocVCxjMShVJ4Xk86bNTPtqevjN7&vprv=1&mime=video%2Fmp4&ns=N91QPLrQVQUyIEZe-0BuqnEG&cnr=14&ratebypass=yes&dur=73.142&lmt=1647828068393541&mt=1648473172&fvip=3&fexp=24001373%2C24007246&c=WEB&txp=4532434&n=BLpJK9_Ct2bxtg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANz8M0hU0F4lId3BaRGn1kd5Bxu2mJ7D2Ml4UUrm4gcKAiEA09xIox-8O7LyaNZa1j0u5SEmD5AZ_EB1pHnh0baulDc%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhALtzoFeqb99PTCTsVaWhehISg33FbJFJYfIW4wERgvHaAiBFucBe_OvesSUfDYFD4DbtXZShucsZXNtG-KZN8i9iJw%3D%3D&title=SPIDER-MAN%3A%20NO%20WAY%20HOME%20-%20The%20Amazing%20Peter%20%233"
            />
        </div>
    )
}
