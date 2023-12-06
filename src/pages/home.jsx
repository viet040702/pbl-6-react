import React, { useEffect, useState } from "react"
import '../pages/mail.css'
const Home = () => {
    const [stateU, setStateU] = useState(false)
    const circle = document.querySelectorAll(".circle");
    const progressBar = document.querySelector(".indicator");
    const buttons = document.querySelectorAll("button");
    const inputs = document.querySelectorAll("input");
    const [step,setCurrenStep] = useState(0)
    useEffect(()=> {setStateU(true)})
    let currentStep = 0;
    const [progressBarW, setProgressBarW] = useState(0)
    const updateSteps = (e) => {
        setStateU(true)
        if (currentStep = e.target.id === "face-view") {
            currentStep = 1;
            setCurrenStep(1)
            circle.forEach((circle, index) => {
                circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
            });

            let widthPro = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
            setProgressBarW(widthPro)
        }
        else if (currentStep = e.target.id === "face-left") {
            currentStep = 2;
            setCurrenStep(2)
            circle.forEach((circle, index) => {
                circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
            });

            let widthPro = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
            setProgressBarW(widthPro)
        }
        else if (currentStep = e.target.id === "face-right") {
            currentStep = 3;
            setCurrenStep(3)
            circle.forEach((circle, index) => {
                circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
            });

            let widthPro = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
            setProgressBarW(widthPro)
        }
        else {
            currentStep = 4;
            setCurrenStep(4)
            circle.forEach((circle, index) => {
                circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
            });

            let widthPro = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
            setProgressBarW(widthPro)
        }
    };


    return (
        <div><h1 className="abc box">Mã Số Hóa Sổ Đỏ</h1>
            <h2 className="abc box1">Vui lòng làm theo các bước</h2>

            <div className="M">
                <div className="container">
                    <div className="steps">
                        <span className="circle active"> 1</span>
                        <span className="circle"> 2</span>
                        <span className="circle"> 3</span>
                        <span className="circle"> 4</span>
                        <div className="progress-bar">
                            <span className="indicator" style={{width:progressBarW}}></span>
                        </div>
                    </div>
                    <span className="abc box3"> Tải ảnh lên </span>
                    <span className="abc box4">
                        Vui lòng uploat theo định dạng (JPG,PNG)</span>

                    <div className="buttons">

                        <div className="view"> Mặt trước
                            <span>
                                <i className="fa-regular fa-image"></i>
                            </span>

                            <input disabled={step>=0?false:true} type="file" id="face-view" onChange={updateSteps} />

                        </div>

                        <div className="view"> Mặt trong ngoài
                            <span>
                                <i className="fa-regular fa-image"></i>
                            </span>
                            <input disabled={step>=1?false:true} onChange={updateSteps} type="file" id="face-left" />

                        </div>

                        <div className="view">Mặt trong sau
                            <span>
                                <i className="fa-regular fa-image"></i>
                            </span>
                            <input disabled={step>=2?false:true} onChange={updateSteps} type="file" id="face-right" />

                        </div>

                        <div className="view">Mặt sau
                            <span>
                                <i className="fa-regular fa-image"></i>
                            </span>
                            <input disabled={step>=3?false:true} onChange={updateSteps} type="file" id="face-back" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="abc">
                <a href="http://localhost:3000/noidung" className="boll12345">
                    <span className="button-icon">
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <span className="button-tex"> Tiếp tục </span>
                </a>
            </div></div>
    )
}
export default Home