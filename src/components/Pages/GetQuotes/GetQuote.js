import { Toast, ToastHeader, ToastBody } from "reactstrap";
const GetQuote = ({ quote }) => {
  return (
    
    <Toast className="text-center m-1 p-1" style={{ width: "100%" }}>
      <ToastHeader className="bg-success  text-white">
        <h5>{quote.character}</h5>
        <small>{quote.anime}</small>
      </ToastHeader>
      <ToastBody>{quote.quote}</ToastBody>
    </Toast>
  );
};

export default GetQuote;
