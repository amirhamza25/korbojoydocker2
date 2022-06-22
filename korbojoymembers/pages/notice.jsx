import axios from "axios";
import useScript from "../commonFunction/ReloadJs";
const Notice = ({ data }) => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <div className="app container">
        <div className="row widget-social">
          {data.map((pd, index) => {
            return (
              <div className="col-xl-4 col-sm-4" key={index}>
                <div className="card card-statistics widget-social-box15">
                  <div className="card-body bg-info">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="text-white">{pd.subject}</h4>
                      <div className="img-icon bg-white">
                        <i className="fa fa-twitter" />
                      </div>
                    </div>
                    <p className="text-white my-3 ">{pd.shortDiscriptions}</p>

                    <div className="d-flex justify-content-between">
                      <ul className="list-inline float-right mb-0">
                        {/* <li className="list-inline-item text-white">
                          <a href="javascript:void(0)">
                            <i className="fa fa-thumbs-o-up" /> 895
                          </a>
                        </li>
                        <li className="list-inline-item text-white">
                          <a href="javascript:void(0)">
                            <i className="fa fa-share" /> 1000
                          </a>
                        </li> */}
                      </ul>
                      <small className="text-white">Date : {pd.date}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(process.env.API_URL + "/ListOfNotice");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Notice;
