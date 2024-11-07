import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/footer.css";

const Footer = () => {
  let location = useLocation();

  return (
    <footer className="footer">
      <div className="main-container">
        <nav className="footer-in">
          <div
            className={
              "nav-link " + (location.pathname === "/" ? "active" : "")
            }
          >
            <Link to={"/"}>
              <span className="icon">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.97168 24.667C4.73144 24.4912 4.58496 24.2539 4.53222 23.9551C4.48535 23.6621 4.52929 23.3135 4.66406 22.9092L7.02832 15.8516L0.972652 11.501C0.626949 11.2549 0.386715 11 0.251949 10.7363C0.117184 10.4668 0.0966759 10.1885 0.190426 9.90137C0.284176 9.62012 0.462887 9.41211 0.726559 9.27734C0.99609 9.13672 1.34179 9.06641 1.76367 9.06641H9.19921L11.4668 2.01758C11.5957 1.60742 11.7656 1.2998 11.9766 1.09473C12.1934 0.883789 12.4482 0.77832 12.7412 0.77832C13.04 0.77832 13.2949 0.883789 13.5059 1.09473C13.7168 1.2998 13.8896 1.60742 14.0244 2.01758L16.2832 9.06641H23.71C24.1436 9.06641 24.4922 9.13672 24.7559 9.27734C25.0254 9.41211 25.207 9.62012 25.3008 9.90137C25.3945 10.1885 25.374 10.4668 25.2393 10.7363C25.1045 11 24.8613 11.2549 24.5098 11.501L18.4541 15.8516L20.8184 22.9092C20.959 23.3135 21.0029 23.6621 20.9502 23.9551C20.8975 24.2539 20.7539 24.4912 20.5195 24.667C20.2793 24.8486 20.0098 24.9131 19.7109 24.8604C19.418 24.8135 19.0957 24.6641 18.7441 24.4121L12.7412 20.0088L6.73828 24.4121C6.38671 24.6641 6.06152 24.8135 5.76269 24.8604C5.46972 24.9131 5.20605 24.8486 4.97168 24.667Z"
                    fill="#999999"
                  />
                </svg>
              </span>
              Scanner
            </Link>
          </div>
          <div
            className={
              "nav-link " + (location.pathname === "/wallet" ? "active" : "")
            }
          >
            <Link to={"/wallet"}>
              <span className="icon">
                <svg
                  width="29"
                  height="22"
                  viewBox="0 0 29 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0H20.6C22.8402 0 23.9603 0 24.816 0.435974C25.5686 0.819467 26.1805 1.43139 26.564 2.18404C26.8979 2.8394 26.9761 3.6499 26.9944 5H20C18.1362 5 17.2044 5 16.4693 5.30448C15.4892 5.71046 14.7105 6.48915 14.3045 7.46927C14 8.20435 14 9.13623 14 11C14 12.8638 14 13.7956 14.3045 14.5307C14.7105 15.5108 15.4892 16.2895 16.4693 16.6955C17.2044 17 18.1362 17 20 17H26.9944C26.9761 18.3501 26.8979 19.1606 26.564 19.816C26.1805 20.5686 25.5686 21.1805 24.816 21.564C23.9603 22 22.8402 22 20.6 22H6.4C4.15979 22 3.03969 22 2.18404 21.564C1.43139 21.1805 0.819467 20.5686 0.435974 19.816C0 18.9603 0 17.8402 0 15.6V6.4Z"
                    fill="#999999"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.75 10.75C15.75 9.34987 15.75 8.6498 16.0225 8.11502C16.2622 7.64462 16.6446 7.26217 17.115 7.02248C17.6498 6.75 18.3499 6.75 19.75 6.75H24.25C25.6501 6.75 26.3502 6.75 26.885 7.02248C27.3554 7.26217 27.7378 7.64462 27.9775 8.11502C28.25 8.6498 28.25 9.34987 28.25 10.75V11.25C28.25 12.6501 28.25 13.3502 27.9775 13.885C27.7378 14.3554 27.3554 14.7378 26.885 14.9775C26.3502 15.25 25.6501 15.25 24.25 15.25H19.75C18.3499 15.25 17.6498 15.25 17.115 14.9775C16.6446 14.7378 16.2622 14.3554 16.0225 13.885C15.75 13.3502 15.75 12.6501 15.75 11.25V10.75ZM22 11C22 12.1046 21.1046 13 20 13C18.8954 13 18 12.1046 18 11C18 9.89543 18.8954 9 20 9C21.1046 9 22 9.89543 22 11Z"
                    fill="#999999"
                  />
                </svg>
              </span>
              Wallet
            </Link>
          </div>
          <div
            className={
              "nav-link " + (location.pathname === "/friends" ? "active" : "")
            }
          >
            <Link to={"/friends"}>
              <span className="icon">
                <svg
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8902 3.03227C16.8914 1.162 14.095 0 11 0C4.92487 0 0 4.47715 0 10C0 13.1499 1.47133 15.7318 3.97498 17.5647C4.29515 17.7991 4.59005 19.1016 3.87638 20.1956C3.58455 20.643 3.26327 20.991 3.01594 21.2589C2.65843 21.6462 2.45542 21.8661 2.71917 21.9767C2.99426 22.0921 4.61974 22.1492 5.79294 21.4912C6.71121 20.9763 7.26736 20.4625 7.64189 20.1166C7.95158 19.8305 8.13709 19.6592 8.30048 19.6967C8.8863 19.831 9.49081 19.9227 10.1098 19.9677C10.1182 19.9683 10.1267 19.9689 10.1351 19.9695C10.4205 19.9897 10.7089 20 11 20C17.0751 20 22 15.5228 22 10C22 7.29077 20.8149 4.83317 18.8902 3.03227Z"
                    fill="#999999"
                  />
                  <path
                    d="M29 13C29 9.0932 26.5356 5.70967 22.9429 4.06405C22.5059 3.86387 22.1121 4.37581 22.3411 4.79849C23.1828 6.35273 23.66 8.11446 23.66 10C23.66 15.6043 19.444 20.1149 13.9721 21.3341C13.4915 21.4412 13.3851 22.0914 13.8467 22.2627C15.1282 22.738 16.5305 23 18 23C18.9314 23 19.8358 22.8948 20.6995 22.6967C20.8629 22.6592 21.0484 22.8305 21.3581 23.1166C21.7326 23.4625 22.2888 23.9763 23.2071 24.4912C24.3803 25.1492 26.0057 25.0921 26.2808 24.9767C26.5446 24.8661 26.3416 24.6462 25.9841 24.2589C25.7367 23.991 25.4155 23.643 25.1236 23.1956C24.41 22.1016 24.7048 20.7991 25.025 20.5647C27.5287 18.7318 29 16.1499 29 13Z"
                    fill="#999999"
                  />
                </svg>
              </span>
              Friends
            </Link>
          </div>
          <div
            className={
              "nav-link " + (location.pathname === "/settings" ? "active" : "")
            }
          >
            <Link to={"/settings"}>
              <span className="icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.069 12.0175C21.2235 12.6121 20.738 13.1656 20.1237 13.1657L15.4587 13.1662C15.1305 13.1662 14.8231 13.0052 14.6364 12.7353L11.5606 8.29133C11.2215 7.80141 11.4125 7.09974 11.9856 6.93655C12.6257 6.75426 13.3015 6.65667 14 6.65667C17.3331 6.65667 20.1473 8.87827 21.0426 11.9215C21.0513 11.9512 21.0602 11.9834 21.069 12.0175Z"
                    fill="#999999"
                  />
                  <path
                    d="M10.1131 9.11842C9.7763 8.632 9.083 8.53293 8.66799 8.95457C8.63605 8.98702 8.60645 9.01803 8.58002 9.04696C7.38747 10.3521 6.66004 12.0894 6.66004 13.9967C6.66004 15.9198 7.39964 17.6702 8.60992 18.9789C8.62804 18.9985 8.64769 19.0191 8.66858 19.0405C9.08145 19.4634 9.77569 19.3622 10.1121 18.8763L13.0964 14.5659C13.3335 14.2234 13.3335 13.7699 13.0964 13.4274L10.1131 9.11842Z"
                    fill="#999999"
                  />
                  <path
                    d="M12.1081 21.0905C12.7117 21.2511 13.3459 21.3367 14 21.3367C17.3102 21.3367 20.1086 19.1455 21.0239 16.1344C21.0382 16.0872 21.0527 16.0342 21.0672 15.9771C21.2187 15.3808 20.7364 14.8268 20.1211 14.8267L15.4577 14.8263C15.1295 14.8262 14.8222 14.9873 14.6354 15.2572L11.6064 19.6339C11.2437 20.1578 11.4511 20.9047 12.0642 21.0784C12.0792 21.0827 12.0939 21.0867 12.1081 21.0905Z"
                    fill="#999999"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 1.33C13 0.777717 13.4478 0.330002 14 0.330002C14.5523 0.330002 15 0.777717 15 1.33V2.15957C15 2.55867 15.2588 2.91171 15.6394 3.03189L16.271 3.23136C16.6632 3.31368 17.0477 3.41689 17.4233 3.53978L18.0627 3.68124C18.4524 3.76744 18.853 3.59107 19.0526 3.24544L19.4674 2.52701C19.7435 2.04872 20.3551 1.88485 20.8334 2.16099C21.3117 2.43713 21.4755 3.04872 21.1994 3.52701L20.7846 4.24544C20.5851 4.59107 20.6326 5.02618 20.9021 5.32055L21.3644 5.82547C21.647 6.08036 21.9164 6.34971 22.1712 6.63234L22.6762 7.09459C22.9705 7.36409 23.4056 7.41164 23.7513 7.21209L24.4697 6.79731C24.948 6.52117 25.5596 6.68504 25.8357 7.16334C26.1119 7.64163 25.948 8.25322 25.4697 8.52936L24.7513 8.94414C24.4056 9.14369 24.2293 9.54429 24.3155 9.93397L24.4569 10.5734C24.5798 10.949 24.683 11.3335 24.7653 11.7257L24.9648 12.3574C25.085 12.7379 25.438 12.9967 25.8371 12.9967H26.6667C27.219 12.9967 27.6667 13.4444 27.6667 13.9967C27.6667 14.549 27.219 14.9967 26.6667 14.9967H25.8371C25.438 14.9967 25.085 15.2554 24.9648 15.636L24.7653 16.2677C24.683 16.6598 24.5798 17.0443 24.457 17.4199L24.3155 18.0594C24.2293 18.4491 24.4056 18.8496 24.7513 19.0492L25.4697 19.464C25.948 19.7401 26.1119 20.3517 25.8357 20.83C25.5596 21.3083 24.948 21.4722 24.4697 21.196L23.7513 20.7812C23.4056 20.5817 22.9705 20.6292 22.6762 20.8987L22.1712 21.361C21.9163 21.6437 21.647 21.913 21.3644 22.1679L20.9021 22.6728C20.6326 22.9672 20.5851 23.4023 20.7846 23.7479L21.1994 24.4663C21.4755 24.9446 21.3117 25.5562 20.8334 25.8323C20.3551 26.1085 19.7435 25.9446 19.4673 25.4663L19.0526 24.7479C18.853 24.4023 18.4524 24.2259 18.0627 24.3121L17.4234 24.4536C17.0477 24.5764 16.6632 24.6797 16.271 24.762L15.6394 24.9614C15.2588 25.0816 15 25.4347 15 25.8338V26.6633C15 27.2156 14.5523 27.6633 14 27.6633C13.4478 27.6633 13 27.2156 13 26.6633V25.8338C13 25.4347 12.7413 25.0816 12.3607 24.9614L11.7291 24.762C11.3369 24.6797 10.9523 24.5764 10.5767 24.4536L9.93734 24.3121C9.54766 24.2259 9.14707 24.4023 8.94752 24.7479L8.53273 25.4663C8.25659 25.9446 7.645 26.1085 7.16671 25.8323C6.68842 25.5562 6.52454 24.9446 6.80068 24.4663L7.21547 23.7479C7.41502 23.4023 7.36746 22.9672 7.09796 22.6728L6.63573 22.1679C6.35307 21.913 6.08371 21.6436 5.8288 21.361L5.32392 20.8987C5.02955 20.6292 4.59445 20.5817 4.24881 20.7812L3.53039 21.196C3.0521 21.4722 2.44051 21.3083 2.16436 20.83C1.88822 20.3517 2.0521 19.7401 2.53039 19.464L3.24881 19.0492C3.59445 18.8496 3.77082 18.4491 3.68461 18.0594L3.54317 17.42C3.42027 17.0444 3.31705 16.6598 3.23472 16.2676L3.03526 15.636C2.91508 15.2554 2.56204 14.9967 2.16294 14.9967H1.33337C0.781089 14.9967 0.333374 14.549 0.333374 13.9967C0.333374 13.4444 0.781089 12.9967 1.33337 12.9967H2.16294C2.56204 12.9967 2.91508 12.7379 3.03526 12.3574L3.23472 11.7257C3.31704 11.3335 3.42026 10.949 3.54315 10.5734L3.6846 9.93397C3.77081 9.54429 3.59444 9.14369 3.24881 8.94414L2.53038 8.52936C2.05209 8.25322 1.88822 7.64163 2.16436 7.16334C2.4405 6.68504 3.05209 6.52117 3.53038 6.79731L4.24881 7.21209C4.59444 7.41164 5.02955 7.36409 5.32392 7.09459L5.82882 6.63235C6.08372 6.34971 6.35307 6.08035 6.63572 5.82545L7.09796 5.32055C7.36746 5.02618 7.41501 4.59107 7.21546 4.24544L6.80068 3.52701C6.52454 3.04872 6.68841 2.43713 7.1667 2.16099C7.645 1.88485 8.25659 2.04872 8.53273 2.52701L8.94751 3.24544C9.14706 3.59107 9.54766 3.76744 9.93734 3.68123L10.5767 3.53978C10.9524 3.41689 11.3369 3.31368 11.7291 3.23136L12.3607 3.03189C12.7413 2.91171 13 2.55867 13 2.15957V1.33ZM14 22.9967C18.9706 22.9967 23 18.9672 23 13.9967C23 9.02611 18.9706 4.99667 14 4.99667C9.02948 4.99667 5.00004 9.02611 5.00004 13.9967C5.00004 18.9672 9.02948 22.9967 14 22.9967Z"
                    fill="#999999"
                  />
                </svg>
              </span>
              Settings
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
