/** @jsxImportSource @emotion/react */

import React, { Fragment } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FloatingMusic from '../components/FloatingMusic/Loadable';

import '../App.css';
import '../assets/css/style.css';
import '../assets/css/bootstrap.css';
import WelcomeSection from "../components/WelcomeSection";
import CountContainer from "../components/WelcomeSection/CountContainer";

import BackgroundTimeDate from '../assets/images/bg-wedding.jpg';
import AndLove from '../assets/images/and-love.png';
import Bride from '../assets/images/p-santi.jpg';
import Groom from '../assets/images/p-amin.jpg';

import StoryArrow1 from '../assets/images/story-arrow-1.png';
import StoryArrow2 from '../assets/images/story-arrow-2.png';
import StoryArrow3 from '../assets/images/story-arrow-3.png';

import StoryArrowMobile1 from '../assets/images/arrow-story-mobile-1.png';
import StoryArrowMobile2 from '../assets/images/arrow-story-mobile-2.png';
import StoryArrowMobile3 from '../assets/images/arrow-story-mobile-3.png';

import { styWrapper } from "../components/WelcomeSection/styles";

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            isInvitationOpen: false,
            currentPage: "welcome",
            cloud: false
        }
        this.audioRef = React.createRef();
    }

    changePage = (newPage) => {
        if (this.state.cloud) return;

        // Mulai animasi awan
        this.setState({ cloud: true });

        // Tunggu sampai awan menutup layar
        setTimeout(() => {
            this.setState({ currentPage: newPage });
        }, 500);

        // Setelah component baru selesai dirender,
        // awan bergerak keluar
        setTimeout(() => {
            this.setState({ cloud: false });
        }, 1000);

        // this.audioRef.current.play();
    };

    playAudio = () => {
        this.audioRef.current.playAudio();
    };

    render() {
        return (
            <div style={{ width: '100%' }} >
                {this.state.currentPage === "welcome" && <WelcomeSection onClickDetail={() => { this.changePage("home"); this.playAudio() }} />}
                {this.state.currentPage  === "home" && (
                    <div className="container" style={{ paddingTop: 230, width: '100%' }} >
                        <div style={{
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            width: '100%',
                            backgroundColor: '#fc8ddd',
                            paddingTop: 10,
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <CountContainer />
                        </div>
                        <Page1 />
                        <Page2 />
                        <Page3 />
                    </div>
                )}
                {this.state.currentPage === "home" && (<Page4 />)}
                {this.state.currentPage === "home" && (
                    <div>
                        <footer id="fh5co-footer" role="contentinfo">
                            <div className="container">
                                <div className="row copyright">
                                    <div className="col-md-12 text-center">
                                        <p>
                                            <small className="block">&copy; 2026 Amin & Santi Wedding. All Rights Reserved.</small>
                                            <small className="block">
                                                Background Image by <a href="https://pixabay.com/users/kollsd-14736411/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4985011">Dung Tran</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4985011">Pixabay</a>
                                            </small>
                                            <small className="block">
                                                Music by{' '}
                                                <span>
                                                    Wedding Piano - Leberch (Pixabay)
                                                </span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>)}

                {/* CLOUD TRANSITION */}
                <div className={`cloud-transition ${this.state.cloud ? "active" : ""}`}>
                    <div className="cloud cloud1"></div>
                    <div className="cloud cloud2"></div>
                    <div className="cloud cloud3"></div>
                </div>

                <div style={{ position: 'fixed', bottom: 10, left: 10 }} >
                    <FloatingMusic ref={this.audioRef} style={{ height: 50, width: 50 }} />
                </div>
            </div>
        )
    }
}

function Page1({ }) {
    return (
        <Fragment>
            <div id="fh5co-couple" css={styWrapper} style={{ marginBottom: 100 }} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2 className="main-font italianno-regular" style={{ color: 'black' }} >Assalamualaikum Wr. Wb</h2>
                            <p className="info">
                                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                                keberkahan.
                            </p>
                        </div>
                    </div>
                    <div className="couple-box">
                        <div className="groom-box" >
                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: 5 }} >
                                <h3 style={{ color: '#000' }} className="italianno-regular" >Amin Subagiyo</h3>
                                <p style={{ color: '#000' }} >
                                    Putra Bapak Ali Erfan (Alm.) <br />& Ibu Mariyem
                                </p>
                            </div>
                            <div>
                                <img src={Groom} alt="groom" className="rounded-image" />
                            </div>
                        </div>
                        <p className="and-hearth-box">
                            <img src={AndLove} className="and-heart" />
                        </p>
                        <div className="bridge-box" >
                            <div>
                                <img src={Bride} alt="bridge" className="rounded-image" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >
                                <h3 style={{ color: '#000' }} className="italianno-regular" >Susantih, S.E.</h3>
                                <p style={{ color: '#000' }} >
                                    Putri Bapak Nursidin <br />& Ibu Wasiah
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

function Page2() {
    return (
        <div
            style={{
                width: '100%',
                position: 'relative',
                marginBottom: 50
            }}
        >
            <img src={BackgroundTimeDate} height={400} width={'100%'} style={{ objectFit: 'cover' }} ></img>
            <div style={{ backgroundColor: 'black', opacity: 0.5, width: '100%', height: '100%', position: 'absolute', top: 0 }} ></div>
            <div style={{
                width: '100%',
                marginTop: 30,
                position: 'absolute',
                top: 50
            }} >
                <Fragment>
                    <div className="col-md-8 col-md-offset-4">
                        <div className="col-md-6 col-sm-6 text-center">
                            <div
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderStyle: 'solid',
                                    borderRadius: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    paddingTop: 40,
                                    paddingBottom: 50,
                                    color: "#fff"
                                }}
                            >
                                <h3>Acara</h3>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start'
                                }} >
                                    <div className="event-col">
                                        <FaClock />
                                        <span>11:00 - Selesai</span>
                                    </div>
                                    <div className="event-col">
                                        <FaCalendarAlt />
                                        <span>Minggu, 11 Oktober 2026</span>
                                    </div>
                                    <div className="event-col" style={{ maxWidth: 250, textAlign: 'start' }} >
                                        <FaLocationDot />
                                        <span>Ngaglik RT 24/RW 12, Sukoreno,</span>
                                    </div>
                                    <div className="event-col" style={{ maxWidth: 250, textAlign: 'start', paddingLeft: 15 }} >
                                        <span>Sentolo, Kulon Progo,</span>
                                    </div>
                                    <div className="event-col" style={{ maxWidth: 250, textAlign: 'start', paddingLeft: 15 }} >
                                        <span>D.I. Yogyakarta</span>
                                    </div>
                                    <div class="btn-group-toggle" data-toggle="buttons" style={{ marginTop: 10 }} >
                                        <label
                                            onClick={() => window.location.href = "https://goo.gl/maps/FN2DgFHpG4WcjCxN7"}
                                            class="btn btn-secondary active"
                                            style={{ borderWidth: 1, borderColor: '#fff', backgroundColor: '#fc8ddd', borderRadius: 10, padding: 10 }}
                                        >
                                            <span style={{ color: '#fff', fontSize: 15 }} >Link Google Map</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </div>

        </div>
    )
}

function Page3() {
    return (
        <div style={{ marginTop: 50, marginBottom: 50 }} >
            <h3 className="italianno-regular" style={{ fontSize: 22, color: "#000", marginBottom: 40 }} >Perjalanan Kami</h3>
            <div className="story-card-box" >
                <div className="story-card" >
                    <h3>Awal Kenal</h3>
                    <h5 style={{ color: '#7d7a7b' }} >2022</h5>
                    <p>Pertama kali kenalan kami bertemu secara online karena Amin mendapatkan pekerjaan freelance yang mengharuskan berkomunikasi dengan Santi, kami melakukan komunikasi secara online beberapa kali tetapi hanya membahas pekerjaan.</p>
                </div>
                <div className="story-image-right" >
                    <img src={StoryArrow1} style={{ height: 150, width: 300, maxWidth: '100%', maxHeight: '100%' }} ></img>
                </div>
            </div>
            <div className="story-image-mobile" >
                <img src={StoryArrowMobile1} style={{ height: 300, width: 300, maxWidth: '100%', maxHeight: '100%' }} ></img>
            </div>
            <div className="story-card-box" >
                <div className="story-image-left" >
                    <img src={StoryArrow2} style={{ height: 150, width: 300, maxWidth: '100%', maxHeight: '100%' }} ></img>
                </div>
                <div className="story-card" >
                    <h3>Awal Berjumpa</h3>
                    <h5 style={{ color: '#7d7a7b' }} >Oktober 2023</h5>
                    <p>Setelah sekian lama berkenalan dan berkomunikasi secara online, Amin memutuskan untuk berkunjung ke rumah Santi di Indramayu untuk berkenalan lebih jauh, mengenal keluarga Santi termasuk Ayah, Ibu, dan Saudara Saudari Santi.</p>
                </div>
            </div>
            <div className="story-image-mobile" >
                <img src={StoryArrowMobile2} style={{ height: 300, width: 300, maxWidth: '100%', maxHeight: '100%' }} ></img>
            </div>
            <div className="story-card-box" >
                <div className="story-card" >
                    <h3>Saling Bertemu dan Mengeal Lebih Dekat</h3>
                    <h5 style={{ color: '#7d7a7b' }} >2024 - 2025</h5>
                    <p>Setelah hubungan semakin dekat, Amin dan Santi beberapa kali saling berkunjung dan mengenal lebih dekat satu sama lain.</p>
                </div>
                <div className="story-image-right" >
                    <img src={StoryArrow3} style={{ height: 140, width: 300, maxWidth: '100%', maxHeight: '100%' }} ></img>
                </div>
            </div>
            <div className="story-image-mobile" >
                <img src={StoryArrowMobile3} style={{ height: 400, width: 300, maxWidth: '100%', maxHeight: '100%' }} ></img>
            </div>
            <div className="story-card-box" >
                <div className="story-card-half-space">

                </div>
                <div className="story-card" >
                    <h3>Lamaran</h3>
                    <h5 style={{ color: '#7d7a7b' }} >28 Juni 2025</h5>
                    <p>Sampailah dititik Amin menyampaikan niat baik untuk menjalin hubungan yang lebih serius, kami melangsungkan lamaran sebagai pengikat untuk ke jenjang yang lebih serius yaitu pernikahan.</p>
                </div>

            </div>
        </div>
    )
}

function Page4() {
    return (
        <div style={{
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 50,
            paddingBottom: 70,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#fc8ddd'
        }} >
            <div style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#fff',
                borderRadius: 5,
                paddingTop: 40,
                paddingBottom: 40,
                paddingLeft: 10,
                paddingRight: 10,
            }}>
                <p style={{ color: '#fff' }} >Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antara rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berfikir.</p>
                <h4 className="italianno-regular" style={{ color: '#fff' }} >QS.Ar Rum : 21</h4>
            </div>
        </div>
    )
}

export default Home