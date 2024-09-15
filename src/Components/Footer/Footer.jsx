import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="contact_container">
        <div className="contact_opinion">
          <h4>MEN WEAR lắng nghe bạn!</h4>
          <p>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </p>
          <button className="contact_btn">Đóng góp ý kiến</button>
        </div>
        <div className="contact_method">
          <div className="method_info">
            <img src="../../Assets/icon-hotline.svg" alt="hotline" />
            <div>
              <span>Hotline</span>
              <p>1900.272727 - 0999.999.999 (8:30 - 22:00)</p>
            </div>
          </div>
          <div className="method_info">
            <img src="../../Assets/icon-email.svg" alt="icon-email" />
            <div>
              <span>Email</span>
              <p>Menwear.me</p>
            </div>
          </div>
        </div>
        <div className="contact_social">
          <a href="https://www.facebook.com/coolmate.me">
            <img src="../../Assets/icon_facebook.png" alt="facebook" />
          </a>
          <a href="https://zalo.me/1517736583279228381">
            <img src="../../Assets/icon_zalo.png" alt="zalo" />
          </a>
          <a href="https://www.tiktok.com/@cool.coolmate">
            <img src="../../Assets/icon_tiktok.png" alt="tiktok" />
          </a>
          <a href="https://www.instagram.com/coolmate.me/">
            <img src="../../Assets/icon_instagram.svg" alt="instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCWw8wLlodKBtEvVt1tTAsMA">
            <img src="../../Assets/icon_youtube.svg" alt="youtube" />
          </a>
        </div>
      </div>
      <div className="line"></div>
      <div className="info_container">
        <div className="info_items">
          <h2>MENCLUB</h2>
          <p>Đăng kí thành viên</p>
          <p>Ưu đãi & Đặc quyền</p>
        </div>
        <div className="info_items">
          <h2>Chính sách</h2>
          <p>Chính sách đổi trả 60 ngày</p>
          <p>Chính sách khuyến mãi</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách giao hàng</p>
        </div>
        <div className="info_items">
          <h2>Chăm sóc khách hàng</h2>
          <p>Trải nghiệm mua sắm</p>
          <p>Hỏi đáp - FAQs</p>
        </div>
        <div className="info_items">
          <h2>Kiến thức mặc đẹp</h2>
          <p>Hướng dẫn chọn size</p>
          <p>Blog</p>
        </div>
        <div className="info_items">
          <h2>Tài liệu - Tuyển dụng</h2>
          <p>Tuyển dụng</p>
          <p>Đăng ký bản quyền</p>
        </div>
        <div className="info_items">
          <h2>Địa chỉ liên hệ</h2>
          <p>146 Tô Ký Quận 12 Tp HCM</p>
          <p>146 Tô Ký Quận 12 Tp HCM</p>
          <p>146 Tô Ký Quận 12 Tp HCM</p>
          <p>146 Tô Ký Quận 12 Tp HCM</p>
        </div>
      </div>

      <div className="line"></div>
      <div className="copyright_container"></div>
    </div>
  );
}

export default Footer;
