import "./BookingForm.css";
import {submitAPI, checkAvailability} from "../services";
import Button from "../Button";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const date = new Date();
  const navigate = useNavigate();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  const [loading, setLoading] = useState(false)
  const [dateInput, setDateInput] = useState(defaultValue);
  const [timeInput, setTimeInput] = useState(null);
  const [guestsInput, setGuestsInput] = useState("1");
  const [occasion, setOccasionInput] = useState(null);
  const [formError, setFormError] = useState(false);

  // const apiService = new ApiService;

  // useCallback(async () => {
  //   await bookService.getBooks().then((data) => {
  //     dispatch(booksLoaded(data));
  //   });
  //   dispatch(booksLoading());
  // });

  console.log(dateInput)
  const sumbitReservation = useCallback(async(e)=>{
    e.preventDefault()
    if (
      !(
        dateInput === defaultValue &&
        timeInput === null &&
        guestsInput === "1" &&
        occasion === null
       ) && Date.parse(dateInput) >= date
    ) {
      setFormError(false);
      setLoading(true)
      // await checkAvailability({date: dateInput, people: guestsInput}).then(data=>{
      //   console.log(data, '2')
      // })
      await submitAPI().then((data)=>{
        console.log(data,'3')
      })
      setLoading(false)
      navigate("/confirmed");
    } else {
      setFormError(true);
    }
  })

  return (
    <form className="booking-form" onSubmit={sumbitReservation}>
      <label for="res-date">Choose date</label>
      <div className="booking-form-container-active">
        <svg
          className="booking-form-icon"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.245 1.34714C23.245 0.603792 23.9799 0 24.8885 0C25.7971 0 26.532 0.603792 26.532 1.34714V7.24835C26.532 7.9917 25.7971 8.59549 24.8885 8.59549C23.9799 8.59549 23.245 7.9917 23.245 7.24835V1.34714ZM18.8302 30.0928C18.6023 30.0928 18.6023 27.2162 18.8302 27.2162H23.3276C23.5555 27.2162 23.5555 30.0928 23.3276 30.0928H18.8302ZM4.51457 19.6346C4.2867 19.6346 4.2867 16.7581 4.51457 16.7581H9.01204C9.23991 16.7581 9.23991 19.6346 9.01204 19.6346H4.51457ZM11.6724 19.6346C11.4445 19.6346 11.4445 16.7581 11.6724 16.7581H16.1698C16.3977 16.7581 16.3977 19.6346 16.1698 19.6346H11.6724ZM18.8302 19.6346C18.6023 19.6346 18.6023 16.7581 18.8302 16.7581H23.3276C23.5555 16.7581 23.5555 19.6346 23.3276 19.6346H18.8302ZM25.9908 16.7581H30.4769C30.7048 16.7581 30.7048 19.6346 30.4769 19.6346H25.9908C25.7629 19.6346 25.7629 16.7581 25.9908 16.7581ZM4.51457 24.8637C4.2867 24.8637 4.2867 21.9871 4.51457 21.9871H9.01204C9.23991 21.9871 9.23991 24.8637 9.01204 24.8637H4.51457ZM11.6781 24.8637C11.4502 24.8637 11.4502 21.9871 11.6781 21.9871H16.1698C16.3977 21.9871 16.3977 24.8637 16.1698 24.8637H11.6781ZM18.8359 24.8637C18.608 24.8637 18.608 21.9871 18.8359 21.9871H23.3276C23.5555 21.9871 23.5555 24.8637 23.3276 24.8637H18.8359ZM25.9965 24.8637C25.7686 24.8637 25.7686 21.9871 25.9965 21.9871H30.4769C30.7048 21.9871 30.7048 24.8637 30.4769 24.8637H25.9965ZM4.52026 30.0928C4.2924 30.0928 4.2924 27.2162 4.52026 27.2162H9.01204C9.23991 27.2162 9.23991 30.0928 9.01204 30.0928H4.52026ZM11.6781 30.0928C11.4502 30.0928 11.4502 27.2162 11.6781 27.2162H16.1698C16.3977 27.2162 16.3977 30.0928 16.1698 30.0928H11.6781ZM8.43384 1.34714C8.43384 0.603792 9.1687 0 10.0773 0C10.9859 0 11.7208 0.603792 11.7208 1.34714V7.24835C11.7208 7.9917 10.9859 8.59549 10.0773 8.59549C9.1687 8.59549 8.43384 7.9917 8.43384 7.24835V1.34714ZM1.82292 12.3806H33.1742V6.11482C33.1718 5.89404 33.084 5.68275 32.9293 5.52527C32.852 5.44762 32.7601 5.38601 32.6589 5.34398C32.5577 5.30194 32.4493 5.28031 32.3397 5.28033H29.3376C29.0958 5.28033 28.864 5.18431 28.6931 5.01339C28.5221 4.84248 28.4261 4.61066 28.4261 4.36895C28.4261 4.12723 28.5221 3.89542 28.6931 3.7245C28.864 3.55358 29.0958 3.45756 29.3376 3.45756H32.3425C33.0466 3.45982 33.7213 3.7405 34.2192 4.23834C34.717 4.73619 34.9977 5.41076 35 6.11482V32.3427C34.9977 33.0468 34.717 33.7214 34.2192 34.2192C33.7213 34.7171 33.0466 34.9977 32.3425 35H2.65747C1.95287 34.9977 1.27781 34.7167 0.779842 34.2182C0.281877 33.7198 0.00150196 33.0444 0 32.3399L0 6.11482C0.00225318 5.41076 0.282959 4.73619 0.780844 4.23834C1.27873 3.7405 1.95336 3.45982 2.65747 3.45756H5.86751C5.98721 3.45756 6.10573 3.48114 6.21631 3.52694C6.3269 3.57274 6.42738 3.63987 6.51201 3.7245C6.59665 3.80913 6.66379 3.9096 6.70959 4.02018C6.7554 4.13075 6.77897 4.24926 6.77897 4.36895C6.77897 4.48863 6.7554 4.60715 6.70959 4.71772C6.66379 4.82829 6.59665 4.92876 6.51201 5.01339C6.42738 5.09802 6.3269 5.16516 6.21631 5.21096C6.10573 5.25676 5.98721 5.28033 5.86751 5.28033H2.65747C2.43667 5.28274 2.22537 5.37051 2.06787 5.52527C1.99022 5.60256 1.9286 5.69443 1.88657 5.7956C1.84453 5.89678 1.8229 6.00526 1.82292 6.11482V12.3806ZM33.1771 14.2062H1.82292V32.3399C1.82532 32.5607 1.91311 32.772 2.06787 32.9295C2.14517 33.0071 2.23705 33.0687 2.33823 33.1107C2.43941 33.1528 2.5479 33.1744 2.65747 33.1744H32.3425C32.5633 33.172 32.7746 33.0842 32.9321 32.9295C33.0098 32.8522 33.0714 32.7603 33.1134 32.6591C33.1555 32.5579 33.1771 32.4495 33.1771 32.3399V14.2062ZM14.364 5.28033C14.1223 5.28033 13.8904 5.18431 13.7195 5.01339C13.5486 4.84248 13.4526 4.61066 13.4526 4.36895C13.4526 4.12723 13.5486 3.89542 13.7195 3.7245C13.8904 3.55358 14.1223 3.45756 14.364 3.45756H20.485C20.6047 3.45756 20.7232 3.48114 20.8338 3.52694C20.9444 3.57274 21.0449 3.63987 21.1295 3.7245C21.2142 3.80913 21.2813 3.9096 21.3271 4.02018C21.3729 4.13075 21.3965 4.24926 21.3965 4.36895C21.3965 4.48863 21.3729 4.60715 21.3271 4.71772C21.2813 4.82829 21.2142 4.92876 21.1295 5.01339C21.0449 5.09802 20.9444 5.16516 20.8338 5.21096C20.7232 5.25676 20.6047 5.28033 20.485 5.28033H14.364Z"
            fill="black"
          />
        </svg>
        <input
          className="booking-form-element booking-form-date"
          type="date"
          id="res-date"
          onChange={(e) => setDateInput(e.target.value)}
          value={dateInput}
          required
        />
      </div>
      <label className="booking-form-label" htmlFor="res-time">
        Choose time
      </label>
      <div className="booking-form-container-active">
        <svg
          className="booking-form-icon"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 8H18V17.8406L24.3939 20.5809L23.6061 22.4191L16 19.1594V8Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 33C26.0604 33 33 26.0604 33 17.5C33 8.93959 26.0604 2 17.5 2C8.93959 2 2 8.93959 2 17.5C2 26.0604 8.93959 33 17.5 33ZM17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z"
            fill="black"
          />
        </svg>
        <select
          className="booking-form-element booking-form-select"
          id="res-time "
          required
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </div>
      <label className="booking-form-label" htmlFor="guests">
        Number of guests
      </label>
      <div className="booking-form-container-active">
        <svg
          className="booking-form-icon"
          width="35"
          height="45"
          viewBox="0 0 35 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.45949 25.1611C5.28002 25.1611 1.8919 28.3352 1.8919 32.2507V44.5035H0V32.2507C0 27.3564 4.23516 23.3887 9.45949 23.3887H11.1457C16.3701 23.3887 20.6052 27.3564 20.6052 32.2508V44.5035H18.7133V32.2508C18.7133 28.3352 15.3252 25.1611 11.1457 25.1611H9.45949Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.395 25.2392C14.395 20.493 18.5019 16.6455 23.568 16.6455H25.5408C30.7651 16.6455 35.0002 20.6132 35.0002 25.5076V37.7604H33.1084V25.5076C33.1084 21.5921 29.7202 18.4179 25.5408 18.4179H23.568C19.5468 18.4179 16.2869 21.4719 16.2869 25.2392H14.395Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3024 17.1079C12.8351 17.1079 14.8882 15.1845 14.8882 12.8118C14.8882 10.439 12.8351 8.51558 10.3024 8.51558C7.76973 8.51558 5.7166 10.439 5.7166 12.8118C5.7166 15.1845 7.76973 17.1079 10.3024 17.1079ZM10.3024 18.8804C13.8799 18.8804 16.7801 16.1634 16.7801 12.8118C16.7801 9.46017 13.8799 6.74316 10.3024 6.74316C6.72487 6.74316 3.82471 9.46017 3.82471 12.8118C3.82471 16.1634 6.72487 18.8804 10.3024 18.8804Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.6974 10.3648C27.2301 10.3648 29.2832 8.44132 29.2832 6.0686C29.2832 3.69588 27.2301 1.77242 24.6974 1.77242C22.1648 1.77242 20.1116 3.69588 20.1116 6.0686C20.1116 8.44132 22.1648 10.3648 24.6974 10.3648ZM24.6974 12.1372C28.275 12.1372 31.1751 9.4202 31.1751 6.0686C31.1751 2.71701 28.275 0 24.6974 0C21.1199 0 18.2197 2.71701 18.2197 6.0686C18.2197 9.4202 21.1199 12.1372 24.6974 12.1372Z"
            fill="black"
          />
        </svg>
        <input
          className="booking-form-element"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestsInput}
          onChange={(e) => setGuestsInput(e.target.value)}
          required
        />
      </div>
      <label className="booking-form-label" htmlFor="occasion">
        Occasion
      </label>
      <div className="booking-form-container-active">
        <svg
          className="booking-form-icon"
          width="35"
          height="48"
          viewBox="0 0 35 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.1444 46.2857H29.8663V32.5125C32.2941 32.1054 34.1444 29.9893 34.1444 27.4393V15.4286C34.1444 14.4804 33.3797 13.7143 32.4332 13.7143H25.5882C24.6417 13.7143 23.877 14.4804 23.877 15.4286V27.4446C23.877 29.9946 25.7273 32.1054 28.1551 32.5179V46.2857H23.877C23.4064 46.2857 23.0214 46.6714 23.0214 47.1429C23.0214 47.6143 23.4064 48 23.877 48H34.1444C34.615 48 35 47.6143 35 47.1429C35 46.6714 34.615 46.2857 34.1444 46.2857ZM25.5882 27.4446V15.4286H32.4332V27.4446C32.4332 29.3357 30.8984 30.8732 29.0107 30.8732C27.123 30.8732 25.5882 29.3304 25.5882 27.4446ZM14.5455 29.1429H12.8342V27.4286H14.5455V29.1429ZM11.9519 27.4286H6.81818V29.1429H11.9519V27.4286ZM17.1123 22.2857V46.2857C17.1123 47.2286 16.3422 48 15.4011 48H1.71123C0.770053 48 0 47.2286 0 46.2857V22.2857C0 18.7875 2.11765 15.7661 5.13369 14.4321V1.71429C5.13369 0.771429 5.90374 0 6.84492 0H10.2674C11.2086 0 11.9786 0.771429 11.9786 1.71429V14.4375C14.9947 15.7661 17.1123 18.7875 17.1123 22.2857ZM6.84492 11.1589H10.2674V1.71964L10.262 1.71429H6.84492L6.83957 1.71964L6.84492 11.1589ZM15.4011 46.2804V41.1429H5.16043C4.21925 41.1429 3.4492 40.3714 3.4492 39.4286V25.7411C3.4492 24.7982 4.21925 24.0268 5.16043 24.0268H15.4011V22.2857C15.4011 19.5696 13.7861 17.1054 11.2888 16.0018C10.6684 15.7286 10.2674 15.1125 10.2674 14.4321V12.8679H6.84492V14.4321C6.84492 15.1125 6.44385 15.7286 5.82353 16.0018C3.3262 17.1054 1.71123 19.5696 1.71123 22.2857V46.2804L1.71658 46.2857L15.4011 46.2804C15.4011 46.2857 15.4011 46.2857 15.4011 46.2804ZM15.4011 25.7464C15.4011 25.7411 15.4011 25.7411 15.4011 25.7464L5.16578 25.7411L5.16043 25.7464V39.4286L5.16578 39.4339H15.4011L15.4064 39.4286L15.4011 25.7464Z"
            fill="black"
          />
        </svg>

        <select
          className="booking-form-element booking-form-select"
          id="occasion"
          value={occasion}
          required
          defaultValue={(e) => setOccasionInput(e.target.value)}>
          <option>No occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engage</option>
        </select>
      </div>
      <div>
        <Button type="submit" bgColor="primary">
          Reserve
        </Button><br/>
        {formError &&<span style={{marginTop:'10px', color:'#EE9972'}}>there is an error, please, try again</span>}
        {loading && <span style={{marginTop:'10px', color:'#EE9972'}}>loading...</span>}
      </div>
    </form>
  );
};

export default BookingForm;
