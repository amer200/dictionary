import { Table } from "reactstrap";
import "./DicTable.css";
const DicTable = () => {
  const tdHandler = () => {};
  return (
    <Table hover responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <select name="lang" id="s-lang" className="s-lang">
              <option value="volvo">العربية</option>
              <option value="saab">الانجليزية</option>
              <option value="mercedes">الاسبانية</option>
            </select>
          </th>
          <th>
            {" "}
            <select name="lang" id="s-lang" className="s-lang">
              <option value="saab">الانجليزية</option>
              <option value="volvo">العربية</option>
              <option value="mercedes">الاسبانية</option>
            </select>
          </th>
          <th>
            {" "}
            <select name="lang" id="s-lang" className="s-lang">
              <option value="mercedes">الاسبانية</option>
              <option value="volvo">العربية</option>
              <option value="saab">الانجليزية</option>
            </select>
          </th>
          <th> الوسم</th>
          <th> النوع</th>
          <th> المجال</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            كلمة 1
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>هذا النص هو مثال لنص يمكن
                أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </div>
            }
          </td>
          <td>
            كلمة 2
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>هذا النص هو مثال لنص يمكن
                أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </div>
            }
          </td>
          <td>
            كلمة 3
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>هذا النص هو مثال لنص يمكن
                أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </div>
            }
          </td>
          <td>وسم</td>
          <td>النوع</td>
          <td>المجال</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>
            word 1
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
              </div>
            }
          </td>
          <td>
            word 2
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
              </div>
            }
          </td>
          <td>
            word 3
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
              </div>
            }
          </td>
          <td>tag</td>
          <td>type</td>
          <td>domain</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>
            palabra 1
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
              </div>
            }
          </td>
          <td>
            palabra 2
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
              </div>
            }
          </td>
          <td>
            palabra 3
            {
              <div className="td-1">
                {" "}
                <span className="td-num">( 1 )</span>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's
              </div>
            }
          </td>
          <td>marbete</td>
          <td>escribe</td>
          <td>dominio</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DicTable;
