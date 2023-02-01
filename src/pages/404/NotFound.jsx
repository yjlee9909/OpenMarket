import React from "react";
import notFoundIcon from "../../assets/img/icon-404.png";

const NotFound = () => {
  return (
    <section>
      <h2 className="hidden">페이지를 찾을 수 없습니다.</h2>
      <img src={notFoundIcon} alt="404 이미지입니다." />
      <div>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. 웹 주소가
          올바른지 확인해 주세요.
        </p>
        <div>
          <button type="button">sd</button>
          <button type="button">sd</button>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
