import React, { useEffect, useState } from "react"
import '../nodung/node.css'
const Trang2 = () => {
    return(<div>
        <h1 class="abd boxn">Ma So Hoa So Do</h1>
                <h2 className="abd box12"> Kiem Tra Thong Tin</h2>
                <h3 className ="abd box45">kiem tra thong tin triet xuat truoc khi luu vao co so du lieu</h3>
                <h4 className ="thongtin">Thong tin ve chu so huu</h4>
                <div className ="thongtin1">
                  <span className = "A">Chu So Huu</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">Nam sinh</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">CMND so</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">Dia chi thuong tru</span>
                  <input className="B" type="text"/>
                </div>
                <h4 className ="thongtin">Thua dat nha o va tai san khac gan lien voi dat</h4>
                <div className ="thongtin1">
                  <span className = "A">So vao so cap GCN</span>
                  <input className="B" type="text"/>
                </div>
                <h5 className ="thongtin2">1.Thua dat</h5>
                <div className ="thongtin1">
                  <span className = "A">thua dat so</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">dia chi</span>
                  <input className="B" type="text"/>
                </div>
                <div class ="thongtin1">
                  <span className = "A">dian tich</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">bang chu</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">hinh thuc su dung</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">muc dich su dung</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">thoi gian su dung</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">nguon goc su dung</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">2.Nha o</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">3.cong trinh su dung khac</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">4.cay lau nam </span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">5.ghi tru</span>
                  <input className="B" type="text"/>
                </div>
                <h4 className ="thongtin">Nhung thay doi khi cap quyen chung nhan</h4>
                <div className ="thongtin1">
                  <span className = "A">nooi dung thay doi </span>
                  <input className="B" type="text"/>
            
                </div>
                <h4 className ="thongtin">ho so thua dat</h4>
                <div className ="thongtin1">
                 
                  <input className="D" type="text"/>
                </div>
                <div class="button">
                <button  >
                  save
                </button>
                </div>
        </div>
        )

}

export default Trang2