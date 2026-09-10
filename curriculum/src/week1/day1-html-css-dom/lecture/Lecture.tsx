import { useEffect } from "react";
import DayNav from "../../../components/DayNav";
import "../day1-lecture.css";

export default function Lecture() {
  useEffect(() => {
    // query selector works the same way as css selector
    const boxModelDemo = document.querySelector("#dom-title");
    //  document.querySelectorAll()

    setTimeout(() => {
      // boxModelDemo
    }, 1000);
    console.log(boxModelDemo);
  }, []);

  return (
    <div className="page lecture-page day1-lecture">
      <title>Day 1 — Lecture Canvas</title>
      <DayNav day="day1-html-css-dom" current="lecture" />



      {/* Blank canvas — write/demo live here during lecture. */}
      <p className="title">Day 1 — Web Dev Fundamentals.</p>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <span>span</span>
      <span>span</span>
      <span>span</span>
      <span>span</span>
      <span>span</span>

      {/* opening and closing tag */}
      <div>
        <div>
          <div>
            doqiwj
            <span>doqwijd</span>
            <span>doqwijd</span>
            <span>doqwijd</span>
          </div>
        </div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
      </div>

      <input />
      {/* input element is self closing */}
      {/* <input /></input> very very wrong */}

      <nav>
        <a href="https://www.youtube.com/">youtube.com</a>
        <a href="https://www.google.com/">google.com</a>
      </nav>
      <h1>Title: breaking news (for whole page)</h1>
      <h2>subtitle for whole page</h2>
      <h3>sub sub title sub sections</h3>
      <h4>sub sub sub title for sub sections</h4>
      <aside>things on the side</aside>
      <main>
        {/* main is the most important part of your page */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          consequatur deleniti voluptatum excepturi, rerum recusandae optio atque
          nihil accusamus natus quibusdam ipsam! Eos corrupti saepe mollitia quos
          vel et assumenda.
        </p>
        {/* gives meaning about what this html element is all about */}
      </main>
      <form>email <input /> name <input /> phone <input /></form>

      <footer>
        <div>React 123 ave. CA 10000</div>
      </footer>

      <h3>List demo</h3>
      {/* ul's direct children need to be li/ul */}
      <ul>
        <li>bullet point 1</li>
        <li>bullet point 2</li>
        <li>
          <div>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </li>
        <ul>
          <li>sub list bullet point 1</li>
          <li>sub list bullet point 2</li>
          <li>sub list bullet point 3</li>
        </ul>
      </ul>

      <h3>table demo</h3>
      {/* the table tag itself */}
      <table>
        {/* table head, mandatory */}
        <thead>
          {/* tr represents one table row */}
          <tr>
            {/* td represents each table cell */}
            <td>company</td>
            <td>contact</td>
            <td>country</td>
          </tr>
        </thead>
        {/* table body, mandatory */}
        <tbody>
          <tr>
            <td>RT</td>
            <td>123-123-1234</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>123-123-1235</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>123-123-1235</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>123-123-1235</td>
            <td>USA</td>
          </tr>
        </tbody>
      </table>

      {/* the element used for submitting information */}
      {/* whenever you have inputs, you always wrap them around forms */}
      <form>
        {/* we put it inside  */}
        <h3>Login Form</h3>

        {/* inline element */}
        <div>
          {/* these label and input are officially associated */}
          <label htmlFor="email">Email:</label>
          <input id="email" />
        </div>
        <div>
          <label>
            Password:
            <input />
          </label>
        </div>
        <div>
          <label>
            remember me:
            <input type="checkbox" />
          </label>
          {/* attribute is a way to provide additional information or / change behavior of the html element */}
        </div>

        <div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      <div>
        <img src="https://placehold.co/100x100" />
      </div>
      {/* command + /
      ctrl + / */}



      <h3 className="a">CSS</h3>
      <div>selectors</div>
      <div id="id-example">id example</div>
      <p className="a">123</p>
      <p>2351</p>
      <p>lorem</p>
      <p>ipsum</p>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>

      <h3>CSS box model</h3>

      <div id="box-model-demo">
        <div id="content"></div>
      </div>


      <h3>CSS Layout</h3>
      <div className="flex">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>

      <div className="grid">2d layout</div>

      <h3 id="dom-title">DOM model: Document Object Model</h3>


      <div>
        <label>123</label>
        <input />
        <label>123</label>
        <input />
      </div>

      <br />
      <br />
      <br />
      <hr />

      <div>
        <div>Example input</div>
        <input />
        <button>Click</button>
      </div>

      <div style={{ marginTop: "50px", width: "300px", padding: "10px", border: "5px solid black", backgroundColor: "green" }}>
        <div style={{ color: "red" }}>class a</div>
        <div style={{ color: "blue" }}>class b</div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h3>Folders</h3>
        <ul>
          <li>folder a</li>
          <li>folder b</li>
          <li>
            folder c
            <ul>
              <li>foo.jsx</li>
              <li>bar.jsx</li>
            </ul>
          </li>
        </ul>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}
