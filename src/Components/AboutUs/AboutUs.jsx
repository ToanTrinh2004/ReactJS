import React from 'react'
import './AboutUs.css';
function AboutUs() {
  return (
    <div className="container">
      <h1>Về Men Wear</h1>
      <div className="intro">
        <div className="img-bg">
          <img className="logo" src="../Assets/mwlogo.png" alt="Men Wear Logo" />
          <img className="menwear" src="../Assets/Logo.png" alt="Men Wear Collection" />
        </div>
        <div className="text">
          <p>
            <span className="brand-name">Men Wear</span> tự hào là điểm đến lý tưởng cho phái mạnh,
            chuyên cung cấp các sản phẩm quần áo nam với chất lượng vượt trội và phong cách thời thượng.
            Tại Men Wear, chúng tôi hiểu rằng thời trang là cách để mỗi người đàn ông thể hiện cá tính và phong
            cách sống của mình. Với mục tiêu mang đến trải nghiệm mua sắm đẳng cấp,
            chúng tôi không ngừng cập nhật những xu hướng mới nhất từ khắp nơi trên thế giới.
          </p>
          <p>
            Bộ sưu tập của <span className="brand-name">Men Wear</span> tập trung vào các sản phẩm chính như áo nam
            và quần nam. Bạn có thể tìm thấy đa dạng các loại áo từ áo sơ mi lịch lãm, áo thun trẻ trung đến áo khoác
            thời thượng, phù hợp cho mọi hoàn cảnh, từ công sở đến dạo phố. Bên cạnh đó, chúng tôi cũng cung cấp
            nhiều mẫu quần nam như quần jeans, quần âu, quần short,
            với thiết kế tinh tế và chất liệu cao cấp, mang lại sự thoải mái và phong cách riêng cho người mặc.
          </p>
        </div>
      </div>
      <br />
      <h1>Bộ sưu tập</h1>
      <div className="collection">
        <img src="../Assets/collection-all.jpg" alt="All Collection" />
        <img src="../Assets/sport-collection.png" alt="Sport Collection" />
        <img src="../Assets/usual-collection.png" alt="Usual Collection" />
      </div>
      <h1>Chính sách của Men Wear</h1>
      <img className="custom-service" src="../Assets/aboutus.jpg" alt="Customer Service" />
    </div>
  );
}


export default AboutUs