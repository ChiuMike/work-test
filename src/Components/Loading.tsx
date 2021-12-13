import ReactLoading from 'react-loading';
import '../CSS/login.css';
const Loading=()=>{
    return(
        <div className="loading">
            <ReactLoading className="loadcoms"
             type={"spinningBubbles"} color={"green"}
             height={'50%'} width={'50%'} />
        </div>
    )
}
export default Loading;