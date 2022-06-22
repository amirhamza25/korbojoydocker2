import axios from "axios";
import useScript from "../commonFunction/ReloadJs";
const NewsFeed = (props) => {
  useScript("/assets/js/app.js");
  const report = props.data;
  return (
    <div>
      <div className="row">
        {report.map((pd, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card card-statistics ">
                <img className="card-img-top" src="assets/img/widget/01.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">{pd.subject}</h4>
                  <p className="card-text">{pd.shortDiscriptions}</p>
                  {/* <a href="javascript:void(0)" className="btn btn-primary mt-2">
                          Read More
                        </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const { data } = await axios.get(process.env.API_URL + "/userPanel/v1/ListOfFeedBack");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default NewsFeed;
