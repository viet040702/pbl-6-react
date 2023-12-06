import React, { useEffect, useState } from "react"
import '../nodung/node.css'
const Trang2 = () => {
    return(<div>
        <h1 class="abd boxn">Mã Số Hóa Sổ Đỏ</h1>
                <h2 className="abd box12"> Kiểm Tra Thông Tin</h2>
                <h3 className ="abd box45">kiểm tra thông tin triết suất trước khi lưu dữ liệu</h3>
                <h4 className ="thongtin">Thong tin về chủ sở hữu</h4>
                <div className ="thongtin1">
                  <span className = "A">Chủ sở hữu</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">Năm sinh</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">CMND số</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">Địa chỉ thường trú</span>
                  <input className="B" type="text"/>
                </div>
                <h4 className ="thongtin">Thửa đát nhà ở và tài sản găn slieenf với đất</h4>
                <div className ="thongtin1">
                  <span className = "A">So vao so cap GCN</span>
                  <input className="B" type="text"/>
                </div>
                <h5 className ="thongtin2">1.Thửa đất</h5>
                <div className ="thongtin1">
                  <span className = "A">thửa đất số</span>
                  <input className="B" type="text"/> 
                </div>
                <div className ="thongtin1">
                  <span className = "A">địa chỉ</span>
                  <input className="B" type="text"/>
                </div>
                <div class ="thongtin1">
                  <span className = "A">diện tích</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">bằng chữ</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">hình thức sử dụng</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">mục đích sử dụng</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">thời gian sử dụng</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "A">nguồn gốc sử dụng</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">2.Nhà ở</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">3.coong trình sử dụng khác</span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">4.cây lâu năm </span>
                  <input className="B" type="text"/>
                </div>
                <div className ="thongtin1">
                  <span className = "C">5.ghi trú</span>
                  <input className="B" type="text"/>
                </div>
                <h4 className ="thongtin">Những thay đổi khi cấp quyền trứng nhận</h4>
                <div className ="thongtin1">
                  <span className = "A">nội dung thay đổi </span>
                  <input className="B" type="text"/>
            
                </div>
                <h4 className ="thongtin">hồ sơ thửa đất</h4>
                <div className ="thongtin1">
                 
                  <input className="D" type="text"/>
                </div>
                <div class="button">
                <button  >
                  Lưu
                </button>
                </div>
        </div>
        )

}

export default Trang2