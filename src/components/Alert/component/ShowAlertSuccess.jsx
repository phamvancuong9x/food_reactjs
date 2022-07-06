import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Success } from "..";
import alertSlice from "../../../redux/slice/alertSlice";
function ShowAlertSuccess() {
  const showAlert = useSelector((state) => state.alert);
  console.log(showAlert);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(
        alertSlice.actions.changeAlert({
          showAlert: false,
          alertContent: "",
          showAlertError: false,
          alertContentError: "",
        })
      );
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [showAlert.showAlert]);
  return (
    <div className={showAlert.showAlert ? "alert active-alert" : "alert"}>
      <Success text={showAlert.alertContent} />
    </div>
  );
}

export default ShowAlertSuccess;
